export default function Hero() {
  return (
    <section 
      className="flex flex-col md:flex-row items-center justify-between px-40 py-20 bg-no-repeat bg-contain bg-[right_70%]"
      style={{ backgroundImage: "url('/salud.jpg')" }}
    >
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold leading-snug text-gray-900">
          Tu bienestar emocional es nuestra prioridad
        </h1>
        <button className="mt-6 px-6 py-3 bg-red-700 text-white rounded-lg hover:bg-gray-900">
          Agendar una cita
        </button>
      </div>
    </section>
  )
}

