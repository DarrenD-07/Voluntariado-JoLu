"use client"

import { useState } from "react"
import "./App.css"
import './index.css'
import SaludMental from "./SaludMental" // Importa el nuevo componente
import Juventud from "./Juventud" // Importa el nuevo componente
import Nosotros from "./Nosotros"
import Diversidad from "./Diversidad"
import Contactanos from "./Contactanos"



function App() {
  const [fileContent, setFileContent] = useState("")
  const [responseContent, setResponseContent] = useState("")
  const [errorList, setErrorList] = useState([])
  const [activeSection, setActiveSection] = useState("quienes-somos")
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = (section) => {
    setActiveSection(section)
    setMenuOpen(false)
  }

  return (
    <div className="App">
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src="/logo.png" alt="Logo" className="logo-principal" />
          </div>
          <div className="navbar-menu">
            <div className="dropdown" tabIndex={0}>
              <button
                className="dropdown-toggle btn btn-active"
                onClick={() => setMenuOpen((open) => !open)}
                aria-expanded={menuOpen}
              >
                Menu ▼
              </button>
              <div className="dropdown-menu" style={{ display: menuOpen ? 'block' : 'none' }}>
                <button
                  className={`dropdown-item ${activeSection === "quienes-somos" ? "selected" : ""}`}
                  onClick={() => handleNavClick("quienes-somos")}
                >
                  ¿Quiénes somos?
                </button>
                <button
                  className={`dropdown-item ${activeSection === "nosotros" ? "selected" : ""}`}
                  onClick={() => handleNavClick("nosotros")}
                >
                  Nosotros
                </button>
                <button
                  className={`dropdown-item ${activeSection === "juventud" ? "selected" : ""}`}
                  onClick={() => handleNavClick("juventud")}
                >
                  Juventud
                </button>
                <button
                  className={`dropdown-item ${activeSection === "diversidad" ? "selected" : ""}`}
                  onClick={() => handleNavClick("diversidad")}
                >
                  Diversidad
                </button>
                <button
                  className={`dropdown-item ${activeSection === "salud-mental" ? "selected" : ""}`}
                  onClick={() => handleNavClick("salud-mental")}
                >
                  Salud Mental
                </button>
                <button
                  className={`dropdown-item ${activeSection === "contacto" ? "selected" : ""}`}
                  onClick={() => handleNavClick("contacto")}
                >
                  Contáctanos
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="main-content">
        {activeSection === "quienes-somos" && (
          <section className="quienes-somos fade-in">
            <div className="quienes-somos-content">
              <div className="header-section">
                <h1>NUESTRA HISTORIA</h1>
                <div className="image-placeholder">
                  <img src="/logo2.png" alt="Logo de la empresa" className="company-logo" />
                </div>
              </div>
              <p>
              Jolu de Guatemala ONG, fue creada con el fin de apoyar a adolescentes y jóvenes, comunidad LGBTIQ+, salud mental, e impactar en la educación de Guatemala, promoviendo la igualdad y los derechos humanos.
            </p>
            <p>
              La organización nace en el año 2016, con la idea de apoyar a adolescentes y jóvenes, en temas de sexualidad, salud sexual y reproductiva, derechos sexuales y derechos reproductivos, prevención de embarazos no planificados, prevención de infecciones de transmisión sexual, prevención del VIH/SIDA, entre otros temas.
En esa línea de ideas, se desarrollan actividades públicas informativas, que permitan comunicar a las poblaciones, en las diferentes temáticas de interés; estas actividades nos permiten dar orientación y asesoría de manera personalizada, según las necesidades de la población.
            </p>
            </div>
            <div className="decorative-circles">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </section>
        )}

        {activeSection === "salud-mental" ? <SaludMental /> : null}
        {activeSection === "juventud" ? <Juventud /> : null}
        {activeSection === "nosotros" ? <Nosotros /> : null}
        {activeSection === "diversidad" ? <Diversidad /> : null}
        {activeSection === "contacto" ? <Contactanos /> : null}
      </main>
    </div>
  )
}

export default App