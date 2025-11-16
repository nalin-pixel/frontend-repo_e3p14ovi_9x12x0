import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <Pricing />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black text-gray-400">
        <div className="container mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} GIO. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-sm">
            <a className="hover:text-yellow-400" href="#">Términos</a>
            <a className="hover:text-yellow-400" href="#">Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
