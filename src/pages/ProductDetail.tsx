import { useState } from 'react'
import { ArrowLeft, MessageCircle } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { useProducts } from '../hooks/useProducts'

const currency = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 })

export function ProductDetail() {
  const { id } = useParams()
  const { products } = useProducts()
  const product = products.find((item) => item.id === id)
  const [imageIndex, setImageIndex] = useState(0)
  if (!product) return <div className="min-h-screen bg-[#fcfbf8]"><Navbar /><div className="mx-auto max-w-7xl px-5 py-20"><h1 className="font-serif text-4xl">Producto no encontrado</h1><Link className="mt-6 inline-block underline" to="/catalogo">Volver al catálogo</Link></div></div>
  const whatsappText = encodeURIComponent(`Hola, estoy interesado(a) en el producto: ${product.name}. ¿Me puedes compartir más información sobre disponibilidad y opciones de estampado?`)
  return <div className="min-h-screen bg-[#fcfbf8]"><Navbar /><main className="mx-auto max-w-7xl px-5 py-10 sm:px-8"><Link to="/catalogo" className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-950"><ArrowLeft size={16} /> Volver al catálogo</Link><div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16"><div><img className="aspect-[3/4] w-full object-cover" src={product.images[imageIndex]} alt={product.name}/><div className="mt-3 grid grid-cols-4 gap-3">{product.images.map((image, index) => <button className={`overflow-hidden ${index === imageIndex ? 'ring-2 ring-stone-900 ring-offset-2' : ''}`} onClick={() => setImageIndex(index)} key={image}><img className="aspect-square w-full object-cover" src={image} alt={`${product.name}, imagen ${index + 1}`} /></button>)}</div></div><div className="lg:pt-5"><p className="text-xs uppercase tracking-[0.18em] text-stone-500">{product.category}</p><h1 className="mt-3 font-serif text-5xl text-stone-950">{product.name}</h1><p className="mt-4 text-xl text-stone-700">{product.price > 0 ? currency.format(product.price) : 'Precio por consultar'}</p><p className="mt-8 leading-7 text-stone-600">{product.description}</p><p className="mt-6 text-sm text-stone-600"><span className="font-medium text-stone-800">Tallas disponibles:</span> {product.sizes.join(', ')}</p><a href={`https://wa.me/573235830564?text=${whatsappText}`} className="mt-9 inline-flex w-full items-center justify-center gap-3 bg-[#25D366] px-6 py-4 text-sm font-medium text-white hover:bg-[#1ebc59]" target="_blank" rel="noreferrer"><MessageCircle size={20} /> Consultar por WhatsApp</a></div></div></main></div>
}
