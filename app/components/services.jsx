export default function Services() {
  const services = [
    "Terapia individual",
    "Terapia de pareja",
    "Terapia para niños y adolescentes",
    "Talleres o charlas"
  ]

  return (
    <section id="services" className="px-10 py-16 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8">Servicios</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div key={i} className="border rounded-lg p-6 shadow-sm bg-white">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
              <div>
                <h3 className="font-semibold">{service}</h3>
                <button className="mt-2 text-sm text-blue-600 hover:underline">
                  Más información
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
