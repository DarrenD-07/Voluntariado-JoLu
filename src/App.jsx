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

  const handleNavClick = (section) => {
    setActiveSection(section)
  }

  return (
    <div className="App">
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">
            <img src="/logo.png" alt="Logo" className="logo-principal" />
          </div>
          <div className="navbar-buttons">
            <button 
              className={`btn ${activeSection === "quienes-somos" ? "btn-active" : "btn-primary"}`} 
              onClick={() => handleNavClick("quienes-somos")}
            >
              ¿Quiénes Somos?
            </button>
            <button 
              className={`btn ${activeSection === "nosotros" ? "btn-active" : "btn-primary"}`} 
              onClick={() => handleNavClick("nosotros")}
            >
              Nosotros
            </button>
            <button 
              className={`btn ${activeSection === "juventud" ? "btn-active" : "btn-primary"}`} 
              onClick={() => handleNavClick("juventud")}
            >
              Juventud
            </button>
            <button 
              className={`btn ${activeSection === "diversidad" ? "btn-active" : "btn-primary"}`} 
              onClick={() => handleNavClick("diversidad")}
            >
              Diversidad
            </button>
            <button 
              className={`btn ${activeSection === "salud-mental" ? "btn-active" : "btn-primary"}`} 
              onClick={() => handleNavClick("salud-mental")}
            >
              Salud Mental
            </button>
            <button 
              className={`btn ${activeSection === "contacto" ? "btn-active" : "btn-primary"}`} 
              onClick={() => handleNavClick("contacto")}
            >
              Contáctanos
            </button>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam
                rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
              </p>
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
                non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad
                minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
                commodi consequatur?
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