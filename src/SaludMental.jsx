"use client"
import "./SaludMental.css"

const SaludMental = () => {
  return (
    <section className="salud-mental-section fade-in">
      <div className="salud-mental-content">
        <div className="salud-mental-header">
          <div className="salud-mental-title-section">
            <h1>Salud <span className="salud-mental-highlight-text">Mental</span></h1>
          </div>
        </div>
        
        <div className="objetivo-section">
          <h2>Objetivo</h2>
          <p>Informar a la población guatemalteca sobre los trastornos psicológicos que prioriza JOLU y aperturar espacios de atención psicológica gratuita en todo el país, presencial y/o virtual.</p>
        </div>

        <hr className="separator" />

        <div className="salud-mental-servicios-list">
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">😔</div>
            <div className="salud-mental-servicio-text">
              <h3>TRASTORNO DE DEPRESIÓN</h3>
            </div>
          </div>
          
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">😰</div>
            <div className="salud-mental-servicio-text">
              <h3>TRASTORNO DE ANSIEDAD GENERALIZADA</h3>
            </div>
          </div>
          
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">💔</div>
            <div className="salud-mental-servicio-text">
              <h3>TRASTORNO DE ATAQUES DE PÁNICO</h3>
            </div>
          </div>
          
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">🆘</div>
            <div className="salud-mental-servicio-text">
              <h3>IDEACIÓN SUICIDA</h3>
            </div>
          </div>

          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">🤗</div>
            <div className="salud-mental-servicio-text">
              <h3>AUTOACEPTACIÓN</h3>
            </div>
          </div>

          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">🪞</div>
            <div className="salud-mental-servicio-text">
              <h3>AUTOCONCEPTO</h3>
            </div>
          </div>

          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">🧠</div>
            <div className="salud-mental-servicio-text">
              <h3>INTELIGENCIA EMOCIONAL</h3>
            </div>
          </div>

          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">💡</div>
            <div className="salud-mental-servicio-text">
              <h3>ENTRE OTROS</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SaludMental