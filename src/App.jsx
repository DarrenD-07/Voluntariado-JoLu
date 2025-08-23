"use client"

import { useState } from "react"
import "./App.css"

function App() {
  const [fileContent, setFileContent] = useState("")
  const [responseContent, setResponseContent] = useState("")
  const [errorList, setErrorList] = useState([])
  const [showQuienesSomos, setShowQuienesSomos] = useState(true)

  const handleNavClick = (section) => {
    if (section === "quienes-somos") {
      setShowQuienesSomos(true)
    } else {
      setShowQuienesSomos(false)
    }
  }

  return (
    <div className="App">
      {/* Barra de navegación */}
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo">LOGO</div>
          <div className="navbar-buttons">
            <button className="btn btn-primary" onClick={() => handleNavClick("quienes-somos")}>
              ¿Quiénes Somos?
            </button>
            <button className="btn btn-primary" onClick={() => handleNavClick("nosotros")}>
              Nosotros
            </button>
            <button className="btn btn-primary" onClick={() => handleNavClick("juventud")}>
              Juventud
            </button>
            <button className="btn btn-primary" onClick={() => handleNavClick("diversidad")}>
              Diversidad
            </button>
            <button className="btn btn-primary" onClick={() => handleNavClick("salud")}>
              Salud Mental
            </button>
            <button className="btn btn-primary" onClick={() => handleNavClick("contacto")}>
              Contáctanos
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <main className="main-content">
        {showQuienesSomos ? (
          <section className="quienes-somos fade-in">
            <div className="quienes-somos-content">
              <div className="header-section">
                <h1>NUESTRA HISTORIA</h1>
                <div className="image-placeholder">
                  <img src="/modern-business-logo.png" alt="Logo de la empresa" className="company-logo" />
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
        ) : (
          <div className="content-areas fade-in">
            {/* Área de texto 1 */}
            <div className="text-area">
              <h2>Área de Contenido 1</h2>
              <textarea
                value={fileContent}
                onChange={(e) => setFileContent(e.target.value)}
                placeholder="Escribe tu contenido aquí..."
              />
              <button className="btn btn-secondary">Procesar</button>
            </div>

            {/* Área de texto 2 */}
            <div className="text-area">
              <h2>Área de Respuesta</h2>
              <textarea
                value={responseContent}
                onChange={(e) => setResponseContent(e.target.value)}
                placeholder="La respuesta aparecerá aquí..."
                readOnly
              />
            </div>

            {/* Tabla de errores */}
            {errorList.length > 0 && (
              <div className="text-area">
                <h2>Lista de Errores</h2>
                <ul className="error-list">
                  {errorList.map((error, index) => (
                    <li key={index} className="error-item">
                      {error}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </main>
    </div>
  )
}

export default App

