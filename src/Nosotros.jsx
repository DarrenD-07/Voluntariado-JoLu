"use client";
import React from "react";
import "./index.css";

const Nosotros = () => {
  return (
    <section className="nosotros-section fade-in">
      <div className="nosotros-container">
        {/* Imagen a la izquierda */}
        <div className="nosotros-image">
          <img src="/images/nosotros.jpg" alt="Nosotros" />
        </div>

        {/* Texto en bloque naranja a la derecha */}
        <div className="nosotros-text">
          <h1>NOSOTROS</h1>
          <p>
            Informamos a la población adolescente y joven sobre temas clave como
            salud sexual y reproductiva, empleabilidad, educación, inteligencias
            múltiples y problemas conductuales propios de la edad.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
