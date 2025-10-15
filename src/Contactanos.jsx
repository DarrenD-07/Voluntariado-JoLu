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
          <h2>Teléfono</h2>
          <a href="https://api.whatsapp.com/send?phone=50233057723" target="_blank" rel="noopener noreferrer">
            +502 3305-7723
          </a>
        </div>
        <div className="info-box">
          <h2>Email</h2>
          <a href="mailto:ongjolu@gmail.com">
            ongjolu@gmail.com
          </a>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="contactanos-socials">
        <a href="https://www.facebook.com/joludeguatemala/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="social-bubble">
          <img src="/galeria/facebook-2.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/joludeguatemala/?hl=en" target="_blank" rel="noopener noreferrer" className="social-bubble">
          <img src="/galeria/instagram-2.svg" alt="Instagram" />
        </a>
      </div>
    </section>
  );
};

export default Contactanos;
