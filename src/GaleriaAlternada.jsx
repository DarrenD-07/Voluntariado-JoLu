"use client";
import React, { useMemo, useEffect, useRef } from "react";
import "./index.css";

const GaleriaAlternada = () => {

  // Lista de imágenes realmente existentes en public/galeria
  const imagenes = [
    "jolu1.jpg", "jolu2.jpg", "jolu3.jpg", "jolu4.jpg", "jolu5.jpg", "jolu6.jpg", "jolu7.jpg", "jolu8.jpg", "jolu9.jpg",
    "jolu10.jpg", "jolu11.jpg", "jolu12.jpg", "jolu13.jpg", "jolu14.jpg", "jolu15.jpg", "jolu16.jpg", "jolu17.jpg", "jolu18.jpg", "jolu19.jpg",
    "jolu20.jpg", "jolu21.jpg", "jolu22.jpg", "jolu23.jpg", "jolu24.jpg", "jolu25.jpg", "jolu26.jpg", "jolu27.jpg", "jolu28.jpg", "jolu29.jpg",
    "jolu30.jpg", "jolu31.jpg", "jolu32.jpg", "jolu33.jpg", "jolu34.jpg", "jolu35.jpg", "jolu36.jpg", "jolu37.jpg", "jolu38.jpg", "jolu39.jpg",
    "jolu40.jpg", "jolu41.jpg", "jolu42.jpg"
  ];
  const numFilas = 6;
  const imagenesPorFila = Math.ceil(imagenes.length / numFilas);
  // Divide las imágenes en filas sin dejar huecos ni espacios vacíos
  const imagenesEnFilas = Array.from({ length: numFilas }, (_, i) =>
    imagenes.slice(i * imagenesPorFila, (i + 1) * imagenesPorFila)
  );
  const filasRefs = useMemo(
    () => Array.from({ length: numFilas }, () => React.createRef()),
    []
  );
  const tracksRefs = useMemo(
    () => Array.from({ length: numFilas }, () => React.createRef()),
    []
  );
  const direcciones = useMemo(() => Array.from({ length: numFilas }, (_, i) => (i % 2 === 0 ? -1 : 1)), []);
  const velocidadPxPorSegundo = 60;
  const posRef = useRef(Array(numFilas).fill(0));
  const setWidthRef = useRef(Array(numFilas).fill(0));

  const onImgError = (e) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='440' height='280'>
          <rect width='100%' height='100%' fill='#eee'/>
          <text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle'
                fill='#999' font-family='Arial' font-size='18'>
            Imagen no disponible
          </text>
        </svg>`
      );
  };

  
  const medirFila = (i) => {
    const wrap = filasRefs[i]?.current;
    const track = tracksRefs[i]?.current;
    if (!wrap || !track) return;

    const anchoSet = track.scrollWidth / 2; 
    setWidthRef.current[i] = Math.max(1, anchoSet);


    const W = setWidthRef.current[i];
    posRef.current[i] = ((posRef.current[i] % W) + W) % W;

    wrap.scrollLeft = 0;
    track.style.transform = `translate3d(${-posRef.current[i]}px,0,0)`;
  };

  useEffect(() => {
    const medirTodo = () => {
      for (let i = 0; i < 6; i++) medirFila(i);
    };

    const onResize = () => medirTodo();
    const onImgLoad = () => medirTodo();

    window.addEventListener("resize", onResize, { passive: true });
    document.addEventListener("load", onImgLoad, true);

    requestAnimationFrame(medirTodo);
    setTimeout(medirTodo, 0);

    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("load", onImgLoad, true);
    };
  }, [filasRefs, tracksRefs]);

  useEffect(() => {
    let rafId;
    let last = performance.now();
    let paused = document.hidden;

    const onVisibility = () => {
      paused = document.hidden;
      last = performance.now();
    };
    document.addEventListener("visibilitychange", onVisibility);

    const tick = (t) => {
      const dt = (t - last) / 1000;
      last = t;

      if (!paused) {
        for (let i = 0; i < 6; i++) {
          const wrap = filasRefs[i]?.current;
          const track = tracksRefs[i]?.current;
          if (!wrap || !track) continue;

          const W = setWidthRef.current[i] || track.scrollWidth / 2 || 1;
          const dir = direcciones[i];

          const puedeScroll = track.scrollWidth > wrap.clientWidth + 1;
          if (!puedeScroll) {
            posRef.current[i] = 0;
            track.style.transform = `translate3d(0,0,0)`;
            continue;
          }
          let x = posRef.current[i] + dir * velocidadPxPorSegundo * dt;
          x = ((x % W) + W) % W;

          posRef.current[i] = x;
          track.style.transform = `translate3d(${-x}px,0,0)`;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [filasRefs, tracksRefs, direcciones]);

  const renderFila = (wrapRef, trackRef, imagenesFila) => (
    <div className="galeria-fila" key={imagenesFila[0] || Math.random()}>
      <div className="galeria-scroll" ref={wrapRef}>
        <div className="galeria-track" ref={trackRef}>
          {[...Array(2)].map((_, d) =>
            imagenesFila.map((img, i) => (
              <img
                key={`set${d}-${img}`}
                src={`/galeria/${img}`}
                alt={`Actividad ${i + 1}`}
                loading="lazy"
                decoding="async"
                onError={onImgError}
                className="galeria-img"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );

  // Renderizar filas usando solo imágenes existentes

  return (
    <section className="galeria-alternada">
      <div className="galeria-header">
        <div className="galeria-badge">GALERÍA</div>
      </div>
  {imagenesEnFilas.map((filaImgs, i) => renderFila(filasRefs[i], tracksRefs[i], filaImgs))}
    </section>
  );
};

export default GaleriaAlternada;
