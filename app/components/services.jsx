"use client"
import { useState } from "react"

export default function Services() {
  const services = [
    {
      title: "Terapia individual",
      image: "individual.jpg",
      description: "Sesiones personalizadas para trabajar tu bienestar emocional."
    },
    {
      title: "Terapia de pareja",
      image: "pareja.jpg",
      description: "Espacio seguro para mejorar la comunicación y fortalecer la relación."
    },
    {
      title: "Terapia para niños y adolescentes",
      image: "ninos.webp",
      description: "Acompañamiento especializado para menores en su desarrollo emocional."
    },
    {
      title: "Terapia Familiar",
      image: "familia.jpg",
      description: "Capacitaciones y talleres en grupo sobre temas de salud mental."
    }
  ]

  const [selectedService, setSelectedService] = useState(null)

  return (
    <section id="services" className="px-10 py-16 bg-gray-50 relative">
      <h2 className="text-2xl font-bold mb-8">Servicios</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <div key={i} className="border rounded-lg p-6 shadow-sm bg-white">
            <div className="flex items-center space-x-4">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-12 h-12 object-contain rounded-full bg-gray-100 p-2"
              />
              <div>
                <h3 className="font-semibold">{service.title}</h3>
                <button 
                  onClick={() => setSelectedService(service)} 
                  className="mt-2 text-sm text-blue-600 hover:underline"
                >
                  Más información
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedService && (
        <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
          <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-2xl w-full relative">
            <button 
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl"
              onClick={() => setSelectedService(null)}
            >
              ✖
            </button>
            <img 
              src={selectedService.image} 
              alt={selectedService.title} 
              className="w-60 h-60 mx-auto mb-6 object-contain rounded-full bg-gray-100 p-3"
            />
            <h3 className="text-3xl font-bold mb-4 text-center">
              {selectedService.title}
            </h3>
            <p className="text-gray-700 text-lg">{selectedService.description}</p>
          </div>
        </div>
      )}
    </section>
  )
}
