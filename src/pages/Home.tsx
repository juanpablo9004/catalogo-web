import { useMemo } from 'react'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import gamaColores from '../assets/gama-colores.jpeg'
import { Navbar } from '../components/layout/Navbar'
import { ProductCard } from '../components/product/ProductCard'
import { useProducts } from '../hooks/useProducts'

export function Home() {
  const { products } = useProducts()
  const featuredProducts = useMemo(() => [...products].sort(() => Math.random() - 0.5).slice(0, 4), [products])

  return (
    <div className="min-h-screen bg-[#fcfbf8] text-stone-800">
      <Navbar />
      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_0.86fr] lg:items-center lg:py-24">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-800">Personaliza tu prenda</p>
            <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-stone-950 sm:text-6xl lg:text-7xl">Tu estampado,<br />a tu manera.</h1>
            <p className="mt-6 max-w-lg text-base leading-7 text-stone-600">Puedes solicitar cualquier estampado que quieras mandar a hacer. Lo montamos sobre nuestras prendas en la gama de color disponible para crear una pieza única para ti.</p>
            <Link to="/catalogo" className="mt-8 inline-flex items-center gap-3 bg-stone-900 px-6 py-3.5 text-sm font-medium text-white transition hover:bg-stone-700">
              Ver prendas <ArrowRight size={17} />
            </Link>
          </div>
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute -left-4 -top-4 h-full w-full border border-amber-800/40 sm:-left-6 sm:-top-6" />
            <img className="relative aspect-[4/5] w-full object-cover" src={gamaColores} alt="Gama de colores disponible para personalizar prendas Luelo" />
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex items-end justify-between gap-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-amber-800">Selección especial</p>
                <h2 className="mt-3 font-serif text-4xl text-stone-950 sm:text-5xl">Nuestros favoritos</h2>
              </div>
              <Link to="/catalogo" className="hidden items-center gap-2 text-sm font-medium text-stone-800 hover:text-amber-800 sm:flex">Ver todo <ArrowRight size={16} /></Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 lg:grid-cols-4 lg:gap-x-6">
              {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          </div>
        </section>
      </main>
      <a href="https://wa.me/573235830564" aria-label="Escríbenos por WhatsApp" className="fixed bottom-5 right-5 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"><MessageCircle size={25} /></a>
      <footer className="border-t border-stone-200 px-5 py-8 text-center text-xs text-stone-500">© 2026 Luelo. Hecho con intención.</footer>
    </div>
  )
}
