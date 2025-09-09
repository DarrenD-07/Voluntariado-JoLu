"use client";
import React from "react";
import "./index.css";

const Contactanos = () => {
  return (
    <section className="contactanos-section fade-in">
      <div className="contactanos-shape">
        <h1>CONTÁCTANOS</h1>
      </div>

      {/* 3 columnas con información */}
      <div className="contactanos-info">
        <div className="info-box">
          <h2>Dirección</h2>
          <p>Avenida Siempre Viva 123, Ciudad Ejemplo</p>
        </div>
        <div className="info-box">
          <h2>Teléfono</h2>
          <p>+502 1234-5678</p>
        </div>
        <div className="info-box">
          <h2>Email</h2>
          <p>contacto@ejemplo.com</p>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="contactanos-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-bubble">
          <img src="/icons/facebook.svg" alt="Facebook" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-bubble">
          <img src="/icons/instagram.svg" alt="Instagram" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-bubble">
          <img src="/icons/twitter.svg" alt="Twitter" />
        </a>
      </div>
    </section>
  );
};

export default Contactanos;
