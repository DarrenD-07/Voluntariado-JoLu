"use client";

import "./Diversidad.css";

const Diversidad = () => {
  return (
    <section className="salud-mental-section fade-in">
      <div className="salud-mental-content">
        <div className="salud-mental-header">
          <div className="salud-mental-image">
            <img src="/logo2.png" alt="Diversidad" className="salud-mental-logo" />
          </div>
          <div className="salud-mental-title-section">
            <h1><span className="salud-mental-highlight-text">Diversidad</span></h1>
          </div>
        </div>
        <div className="objetivo-section">
          <h2>Objetivo</h2>
          <p>Promovemos la inclusión, el respeto y la valoración de las diferencias individuales en la sociedad. Fomentamos el reconocimiento de la diversidad cultural, sexual, de género, de capacidades y de pensamiento, como pilares para una convivencia armónica y equitativa.</p>
        </div>
        <hr className="separator" />
        <div className="salud-mental-servicios-list">
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">🌎</div>
            <div className="salud-mental-servicio-text">
              <h3>Respeto a la diversidad cultural y social</h3>
            </div>
          </div>
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">♿</div>
            <div className="salud-mental-servicio-text">
              <h3>Inclusión de personas con discapacidades</h3>
            </div>
          </div>
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">🏳️‍🌈</div>
            <div className="salud-mental-servicio-text">
              <h3>Diversidad sexual y de género</h3>
            </div>
          </div>
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">🚫</div>
            <div className="salud-mental-servicio-text">
              <h3>Prevención de la discriminación</h3>
            </div>
          </div>
          <div className="salud-mental-servicio-item">
            <div className="salud-mental-servicio-icon">⚖️</div>
            <div className="salud-mental-servicio-text">
              <h3>Promoción de la equidad</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Diversidad;
