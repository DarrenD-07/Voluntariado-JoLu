"use client"

const SaludMental = () => {
  return (
    <section className="salud-mental-section fade-in">
      <div className="salud-mental-content">
        <h1>Salud Mental</h1>
        
        <div className="objetivo-section">
          <h2>Objetivo</h2>
          <p>Informar a la población guatemalteca sobre los trastornos psicológicos que prioriza JOLU y aperturar espacios de atención psicológica gratuita en todo el país, presencial y/o virtual.</p>
        </div>

        <hr className="separator" />

        <div className="temas-section">
          <h2>Temas Abordados</h2>
          <ul>
            <li>Trastorno de Depresión</li>
            <li>Trastorno de Ansiedad Generalizada</li>
            <li>Trastorno de Ataques de Pánico</li>
            <li>Ideación suicida</li>
            <li>Autoaceptación</li>
            <li>Autoconcepto</li>
            <li>Inteligencia emocional</li>
            <li>Entre otros</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SaludMental