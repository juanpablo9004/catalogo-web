/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products as initialProducts } from '../data/products'
import type { Product } from '../types/product'

type ProductInput = Omit<Product, 'id'>
type ProductContextValue = {
  products: Product[]
  createProduct: (product: ProductInput) => void
  updateProduct: (id: string, product: ProductInput) => void
  deleteProduct: (id: string) => void
}

const ProductContext = createContext<ProductContextValue | null>(null)
const storageKey = 'luelo-products-v2'

function getStoredProducts() {
  try {
    const stored = localStorage.getItem(storageKey)
    return stored ? (JSON.parse(stored) as Product[]) : initialProducts
  } catch {
    return initialProducts
  }
}

export function ProductProvider({ children }: { children: React.ReactNode }) {
  const [products, setProducts] = useState<Product[]>(getStoredProducts)

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(products))
  }, [products])

  const value = useMemo(() => ({
    products,
    createProduct: (product: ProductInput) => setProducts((current) => [{ ...product, id: crypto.randomUUID() }, ...current]),
    updateProduct: (id: string, product: ProductInput) => setProducts((current) => current.map((item) => item.id === id ? { ...product, id } : item)),
    deleteProduct: (id: string) => setProducts((current) => current.filter((item) => item.id !== id)),
  }), [products])

  return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

export function useProducts() {
  const context = useContext(ProductContext)
  if (!context) throw new Error('useProducts debe usarse dentro de ProductProvider')
  return context
}
