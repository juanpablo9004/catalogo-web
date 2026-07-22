import { useMemo, useState } from 'react'
import { ArrowLeft, Search } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { ProductCard } from '../components/product/ProductCard'
import { useProducts } from '../hooks/useProducts'

export function Catalog() {
  const { products } = useProducts()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('Todos')
  const categories = ['Todos', ...new Set(products.map((product) => product.category))]
  const visibleProducts = useMemo(() => products.filter((product) =>
    (category === 'Todos' || product.category === category) && product.name.toLowerCase().includes(search.toLowerCase()),
  ), [category, products, search])

  return <div className="min-h-screen bg-[#fcfbf8]"><Navbar /><main className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
    <Link to="/" className="inline-flex items-center gap-2 text-sm text-stone-600 transition hover:text-stone-950"><ArrowLeft size={16} /> Volver al inicio</Link>
    <p className="mt-8 text-xs font-medium uppercase tracking-[0.2em] text-amber-800">Todas las prendas</p>
    <h1 className="mt-3 font-serif text-5xl text-stone-950">La colección</h1>
    <div className="mt-10 flex flex-col gap-5 border-y border-stone-200 py-5 md:flex-row md:items-center md:justify-between">
      <div className="flex gap-2 overflow-x-auto pb-1">{categories.map((item) => <button onClick={() => setCategory(item)} className={`whitespace-nowrap px-3 py-2 text-sm ${category === item ? 'bg-stone-900 text-white' : 'text-stone-600 hover:text-stone-950'}`} key={item}>{item}</button>)}</div>
      <label className="flex items-center gap-2 border-b border-stone-300 pb-2 text-stone-500"><Search size={17}/><input value={search} onChange={(event) => setSearch(event.target.value)} className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400 md:w-52" placeholder="Buscar prenda" /></label>
    </div>
    <p className="mt-6 text-sm text-stone-500">{visibleProducts.length} productos</p>
    <div className="mt-7 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">{visibleProducts.map((product) => <ProductCard key={product.id} product={product} />)}</div>
  </main></div>
}
