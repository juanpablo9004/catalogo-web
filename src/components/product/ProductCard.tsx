import { ArrowUpRight } from 'lucide-react'
import type { Product } from '../../types/product'

type ProductCardProps = { product: Product }

const currency = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
})

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group">
      <a className="block overflow-hidden bg-stone-100" href={`/producto/${product.id}`}>
        <img
          className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-105"
          src={product.images[0]}
          alt={product.name}
        />
      </a>
      <div className="flex items-start justify-between gap-3 pt-4">
        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-stone-500">{product.category}</p>
          <h3 className="mt-1 font-medium text-stone-900">{product.name}</h3>
          <p className="mt-1 text-sm text-stone-600">{product.price > 0 ? currency.format(product.price) : 'Precio por consultar'}</p>
          <p className="mt-2 text-xs text-stone-500">Tallas: {product.sizes.join(', ')}</p>
        </div>
        <a aria-label={`Ver ${product.name}`} className="mt-1 text-stone-600 transition group-hover:text-stone-950" href={`/producto/${product.id}`}>
          <ArrowUpRight size={19} />
        </a>
      </div>
    </article>
  )
}
