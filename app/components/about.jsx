export default function About() {
  return (
    <section id="about" className="px-10 py-16 bg-white">
      <h2 className="text-2xl font-bold mb-6">Sobre mí</h2>
      <div className="flex items-center space-x-6">
        <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
        <div>
          <p className="text-gray-600">
            Aquí puedes escribir una breve descripción personal, tu experiencia y
            tu enfoque profesional.
          </p>
        </div>
      </div>
    </section>
  )
}