"use client"

import type React from "react"

const QuienesSomos: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#fb8500] to-[#ffb703] p-8">
      <div className="max-w-6xl mx-auto relative">
        {/* Área de contenido principal */}
        <div className="bg-white rounded-lg shadow-2xl p-8 mr-64 fade-in">
          <h1 className="text-4xl font-bebas tracking-wider text-[#023047] mb-6 border-b-4 border-[#219ebc] pb-2">
            NUESTRA HISTORIA
          </h1>

          <div className="text-gray-700 leading-relaxed space-y-4 text-lg">
            <p>
              Jolu de Guatemala ONG, fue creada con el fin de apoyar a adolescentes y jóvenes, comunidad LGBTIQ+, salud mental, e impactar en la educación de Guatemala, promoviendo la igualdad y los derechos humanos.
            </p>
            <p>
              La organización nace en el año 2016, con la idea de apoyar a adolescentes y jóvenes, en temas de sexualidad, salud sexual y reproductiva, derechos sexuales y derechos reproductivos, prevención de embarazos no planificados, prevención de infecciones de transmisión sexual, prevención del VIH/SIDA, entre otros temas.
En esa línea de ideas, se desarrollan actividades públicas informativas, que permitan comunicar a las poblaciones, en las diferentes temáticas de interés; estas actividades nos permiten dar orientación y asesoría de manera personalizada, según las necesidades de la población.
            </p>
          </div>
        </div>

        <div className="decorative-circles">
          <div className="circle circle-1"></div>
          <div className="circle circle-2"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle circle-5"></div>
          <div className="circle circle-6"></div>
          <div className="circle circle-7"></div>
          <div className="circle circle-8"></div>
        </div>
      </div>
    </div>
  )
}

export default QuienesSomos
