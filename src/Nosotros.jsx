"use client";
import React from "react";
import "./index.css";
import GaleriaAlternada from "./GaleriaAlternada";

const Nosotros = () => {
  return (
    <>
      <section className="nosotros-fondo fade-in">
        <img
          src="/fondojolunosotros.jpg"
          alt="Fondo Nosotros"
          className="nosotros-fondo-img"
        />
      </section>
      <div className="nosotros-text">
        <h1>NOSOTROS</h1>
        <p>
          Informamos a la población adolescente y joven sobre temas clave como
          salud sexual y reproductiva, empleabilidad, educación, inteligencias
          múltiples y problemas conductuales propios de la edad.
        </p>
      </div>
      <GaleriaAlternada />
    </>
  );
};

export default Nosotros;
