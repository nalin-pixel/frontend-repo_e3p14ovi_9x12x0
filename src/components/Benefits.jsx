import { CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    title: 'Clases Premium',
    description: 'Sesiones en vivo y grabadas con mentores expertos y frameworks probados.'
  },
  {
    title: 'Comunidad Élite',
    description: 'Rodeate de personas ejecutoras. Accountability y network real.'
  },
  {
    title: 'Rutas de Aprendizaje',
    description: 'Camino claro: fundamentos, práctica guiada y proyectos reales.'
  },
  {
    title: 'Soporte Personal',
    description: 'Revisiones de progreso, feedback y respuestas a tus bloqueos.'
  }
]

export default function Benefits() {
  return (
    <section id="benefits" className="relative bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">Por qué GIO</h2>
        <p className="text-gray-400 mt-2 max-w-2xl">Un sistema pensado para acelerar tu resultado: foco, ejecución y comunidad.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b) => (
            <div key={b.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <CheckCircle2 className="w-6 h-6 text-yellow-400" />
              <h3 className="mt-4 font-semibold text-lg">{b.title}</h3>
              <p className="text-gray-400 text-sm mt-2">{b.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
