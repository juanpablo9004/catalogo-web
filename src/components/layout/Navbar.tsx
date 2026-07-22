import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <header className="border-b border-stone-200 bg-[#fcfbf8]">
      <nav className="mx-auto max-w-7xl px-5 py-5 sm:px-8">
        <Link className="font-serif text-2xl tracking-[0.18em] text-stone-900" to="/">
          LUELO
        </Link>
      </nav>
    </header>
  )
}
