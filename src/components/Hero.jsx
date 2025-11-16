import { motion } from 'framer-motion'
import { Star, ArrowRight, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-screen flex items-center">
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-yellow-500/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-yellow-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-yellow-400 mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">GIO • Crea tu Libertad</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="text-5xl md:text-7xl font-extrabold leading-tight"
          >
            La academia premium para crear tu libertad.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Programas en vivo, comunidad de alto rendimiento y un entorno diseñado para llevarte de 0 a resultados reales. Sin ruido. Solo ejecución.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a href="#join" className="inline-flex items-center justify-center gap-2 rounded-lg bg-yellow-400 text-black font-semibold px-6 py-3 hover:bg-yellow-300 transition">
              Empezar Ahora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#benefits" className="inline-flex items-center justify-center gap-2 rounded-lg border border-yellow-500/30 text-yellow-400 px-6 py-3 hover:bg-yellow-500/10 transition">
              Ver Beneficios
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.7 }}
            className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-300"
          >
            {[
              { label: 'Miembros', value: '1,200+' },
              { label: 'Clases', value: '150+' },
              { label: 'Mentores', value: '12' },
              { label: 'Satisfacción', value: '98%' }
            ].map((stat) => (
              <div key={stat.label} className="bg-white/5 rounded-lg p-4 border border-white/10">
                <div className="text-2xl font-bold text-yellow-400">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
