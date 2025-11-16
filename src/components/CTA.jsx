export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-b from-black to-zinc-950 text-white py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold">¿Listo para crear tu libertad?</h2>
          <p className="text-gray-400 mt-3">Deja tu correo y te enviaremos los próximos cupos y contenidos exclusivos.</p>
          <form className="mt-8 grid sm:grid-cols-[1fr_auto] gap-3" onSubmit={(e)=>e.preventDefault()}>
            <input type="email" required placeholder="Tu correo" className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 outline-none focus:border-yellow-400" />
            <button className="rounded-lg bg-yellow-400 text-black font-semibold px-6 py-3 hover:bg-yellow-300 transition">Unirme</button>
          </form>
          <p className="text-xs text-gray-500 mt-3">Sin spam. Cancela cuando quieras.</p>
        </div>
      </div>
    </section>
  )
}
