"use client"


import "./Juventud.css";

const Juventud = () => {
  return (
    <section className="salud-mental-section fade-in">
      <div className="salud-mental-content">
        <div className="salud-mental-header">
          <div className="salud-mental-image">
            <img src="/logo2.png" alt="Juventud" className="salud-mental-logo" />
          </div>
          <div className="salud-mental-title-section">
            <h1>Adolescencia y <span className="salud-mental-highlight-text">Juventud</span></h1>
          </div>
        </div>
        <div className="objetivo-section">
          <h2>Objetivo</h2>
          <p>Informar a la población adolescente y joven sobre temas de salud sexual y reproductiva, empleabilidad, educación, inteligencias múltiples, problemas conductuales y actitudinales propios de la edad, entre otros.</p>
        </div>
        <hr className="separator" />
        <div className="salud-mental-servicios-list">
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">🧑‍🎓</div>
            <div className="salud-mental-servicio-text">
              <h3>Orientación sexual</h3>
            </div>
          </div>
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">📚</div>
            <div className="salud-mental-servicio-text">
              <h3>Inteligencias múltiples como herramienta de estudio</h3>
            </div>
          </div>
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">🧑‍💼</div>
            <div className="salud-mental-servicio-text">
              <h3>Problemas conductuales y actitudinales propios de la edad</h3>
            </div>
          </div>
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">💼</div>
            <div className="salud-mental-servicio-text">
              <h3>Inserción laboral</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Juventud;