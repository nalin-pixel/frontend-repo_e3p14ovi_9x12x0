export default function Pricing() {
  return (
    <section id="join" className="relative bg-black text-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold">Acceso Premium</h2>
          <p className="text-gray-400 mt-3">Una única membresía para desbloquear toda la academia GIO.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {/* Starter */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold">Starter</h3>
            <p className="text-gray-400 mt-1">Para iniciar con foco y acompañamiento.</p>
            <div className="mt-6 text-4xl font-extrabold text-yellow-400">$19<span className="text-base text-gray-400">/mes</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-300">
              <li>• Acceso a clases base</li>
              <li>• Comunidad</li>
              <li>• Proyectos guiados</li>
            </ul>
            <a href="#" className="mt-8 inline-flex justify-center items-center w-full rounded-lg bg-yellow-400 text-black font-semibold py-3 hover:bg-yellow-300 transition">Elegir Starter</a>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border-2 border-yellow-400 bg-white/5 p-8 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-yellow-400/20 blur-3xl" />
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="text-gray-200 mt-1">La experiencia completa para ejecutar a velocidad.</p>
            <div className="mt-6 text-4xl font-extrabold text-yellow-400">$49<span className="text-base text-gray-400">/mes</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-300">
              <li>• Todo Starter</li>
              <li>• Mentorías grupales</li>
              <li>• Rutas avanzadas</li>
              <li>• Plantillas y recursos</li>
            </ul>
            <a href="#" className="mt-8 inline-flex justify-center items-center w-full rounded-lg bg-yellow-400 text-black font-semibold py-3 hover:bg-yellow-300 transition">Elegir Pro</a>
          </div>

          {/* Elite */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-bold">Élite</h3>
            <p className="text-gray-400 mt-1">Para creadores que buscan escalar con cercanía 1:1.</p>
            <div className="mt-6 text-4xl font-extrabold text-yellow-400">$199<span className="text-base text-gray-400">/mes</span></div>
            <ul className="mt-6 space-y-2 text-sm text-gray-300">
              <li>• Todo Pro</li>
              <li>• Mentoría 1:1 mensual</li>
              <li>• Auditoría de proyecto</li>
              <li>• Acceso anticipado a lanzamientos</li>
            </ul>
            <a href="#" className="mt-8 inline-flex justify-center items-center w-full rounded-lg bg-yellow-400 text-black font-semibold py-3 hover:bg-yellow-300 transition">Elegir Élite</a>
          </div>
        </div>
      </div>
    </section>
  )
}
