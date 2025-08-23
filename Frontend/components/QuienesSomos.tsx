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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>

            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
              rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
              dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
              incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            </p>

            <p>
              Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid
              ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
              molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
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
