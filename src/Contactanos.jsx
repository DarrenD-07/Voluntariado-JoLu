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
          <h2>Email</h2>
          <p>ongjolu@gmail.com</p>
        </div>
        <div className="info-box">
          <h2>Teléfono</h2>
          <p>(+502) 3305-7723</p>
        </div>
        <div className="info-box">
          <h2>Instagram</h2>
          <p>@joludeguatemala</p>
        </div>
      </div>

      {/* Redes sociales */}
      <div className="contactanos-socials">
        <a href="https://www.facebook.com/share/1GS97ERopC/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-bubble">
          <img src="/galeria/facebook-2.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/joludeguatemala?igsh=NXo2b2xsdGY0cnR6" target="_blank" rel="noopener noreferrer" className="social-bubble">
          <img src="/galeria/instagram-2.svg" alt="Instagram" />
        </a>
        <a href="https://wa.me/50233057723" target="_blank" rel="noopener noreferrer" className="social-bubble">
          <img src="/galeria/whatsapp.svg" alt="Whatsapp" />
        </a>
      </div>
    </section>
  );
};

export default Contactanos;
