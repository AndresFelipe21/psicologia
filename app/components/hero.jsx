export default function Hero() {
  return (
    <section 
      className="flex flex-col md:flex-row items-center justify-between px-20 py-30 "
      style={{ backgroundImage: "url('/verde.jpg')" }}
    >
      <div className="max-w-lg -mt-15">
        <h1 className="text-4xl font-bold leading-snug text-white">
          Tu bienestar emocional es nuestra prioridad
        </h1>
        <button className="mt-15 px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-900">
          Agendar una cita
        </button>
      </div>
    </section>
  )
}

