"use client";
import React, { useRef, useEffect } from "react";
import "./index.css";

const GaleriaAlternada = () => {
  const fila1Ref = useRef(null);
  const fila2Ref = useRef(null);
  const fila3Ref = useRef(null);

  // Movimiento automático en bucle
  useEffect(() => {
    const autoScroll = (ref, direction) => {
      if (!ref.current) return;
      let scrollAmount = direction === "left" ? -1 : 1;
      const interval = setInterval(() => {
        ref.current.scrollLeft += scrollAmount;

        // Reinicio si llega al final
        if (
          direction === "left" &&
          ref.current.scrollLeft <= 0
        ) {
          ref.current.scrollLeft = ref.current.scrollWidth / 2;
        }
        if (
          direction === "right" &&
          ref.current.scrollLeft >= ref.current.scrollWidth / 2
        ) {
          ref.current.scrollLeft = 0;
        }
      }, 20); // velocidad del movimiento automático

      return () => clearInterval(interval);
    };

    const stop1 = autoScroll(fila1Ref, "left");
    const stop2 = autoScroll(fila2Ref, "right");
    const stop3 = autoScroll(fila3Ref, "left");

    return () => {
      stop1?.();
      stop2?.();
      stop3?.();
    };
  }, []);

  // Flechas funcionales
  const scrollManual = (ref, direction) => {
    const desplazamiento = 1000; // empuje fuerte
    if (ref.current) {
      ref.current.scrollBy({
        left: direction === "left" ? -desplazamiento : desplazamiento,
        behavior: "smooth",
      });
    }
  };

  const renderFila = (ref, direction, startIndex) => (
    <div className="galeria-fila">
      <button className="flecha" onClick={() => scrollManual(ref, "left")}>←</button>
      <div className="galeria-scroll" ref={ref}>
        {[...Array(7)].map((_, i) => (
          <img
            key={i}
            src={`/galeria/jolu${startIndex + i}.jpg`}

            alt={`Actividad ${startIndex + i}`}
          />
        ))}
        {[...Array(7)].map((_, i) => (
          <img
            key={`dup-${i}`}
            src={`/images/actividad${startIndex + i}.jpg`}
            alt={`Actividad ${startIndex + i}`}
          />
        ))}
      </div>
      <button className="flecha" onClick={() => scrollManual(ref, "right")}>→</button>
    </div>
  );

  return (
    <section className="galeria-alternada">
      {renderFila(fila1Ref, "left", 1)}
      {renderFila(fila2Ref, "right", 8)}
      {renderFila(fila3Ref, "left", 15)}
    </section>
  );
};

export default GaleriaAlternada;
