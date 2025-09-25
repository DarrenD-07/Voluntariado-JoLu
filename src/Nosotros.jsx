"use client";
import React from "react";
import "./index.css";
import GaleriaAlternada from "./GaleriaAlternada"; // 👈 Importación

const Nosotros = () => {
  return (
    <>
      <section className="nosotros-fondo fade-in">
        {/* Imagen de fondo */}
        <div className="nosotros-background">
          <img src="/public/jolus.jpeg" alt="Fondo Nosotros" />
        </div>

        {/* Bloque naranja alineado a la derecha */}
        <div className="nosotros-cuadro">
          <h1>NOSOTROS</h1>
          <p>
            Informamos a la población adolescente y joven sobre temas clave como
            salud sexual y reproductiva, empleabilidad, educación, inteligencias
            múltiples y problemas conductuales propios de la edad.
          </p>
        </div>
      </section>

      {/* Galería Alternada debajo */}
      <GaleriaAlternada />
    </>
  );
};

export default Nosotros;
