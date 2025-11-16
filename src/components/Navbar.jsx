import { Menu } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/60 backdrop-blur border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-yellow-400 font-extrabold tracking-tight text-xl">GIO</a>
        <nav className="hidden sm:flex items-center gap-6 text-gray-300">
          <a href="#benefits" className="hover:text-yellow-400 transition">Beneficios</a>
          <a href="#join" className="hover:text-yellow-400 transition">Precios</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contacto</a>
        </nav>
        <button className="sm:hidden p-2 border border-white/10 rounded-lg text-gray-300">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  )
}
