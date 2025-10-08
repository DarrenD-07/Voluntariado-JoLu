"use client";
import React, { useMemo, useEffect, useRef } from "react";
import "./index.css";

const GaleriaAlternada = () => {

  const filasRefs = useMemo(
    () => Array.from({ length: 6 }, () => React.createRef()),
    []
  );
  
  const tracksRefs = useMemo(
    () => Array.from({ length: 6 }, () => React.createRef()),
    []
  );


  const direcciones = useMemo(() => [-1, 1, -1, 1, -1, 1], []);
  
  const velocidadPxPorSegundo = 30;


  const posRef = useRef(Array(6).fill(0));
  const setWidthRef = useRef(Array(6).fill(0));

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

  const renderFila = (wrapRef, trackRef, startIndex) => (
    <div className="galeria-fila" key={`fila-${startIndex}`}>
      <div className="galeria-scroll" ref={wrapRef}>
        
        <div className="galeria-track" ref={trackRef}>
          {[...Array(2)].map((_, d) =>
            [...Array(7)].map((_, i) => {
              const n = startIndex + i;
              const src = `/galeria/jolu${n}.jpg`; 
              return (
                <img
                  key={`set${d}-${n}`}
                  src={src}
                  alt={`Actividad ${n}`}
                  loading="lazy"
                  decoding="async"
                  onError={onImgError}
                  className="galeria-img"
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );

  const startIdx = [1, 8, 15, 22, 29, 36];

  return (
    <section className="galeria-alternada">
    
      <div className="galeria-header">
        <div className="galeria-badge">GALERÍA</div>
      </div>

      {startIdx.map((idx, i) => renderFila(filasRefs[i], tracksRefs[i], idx))}
    </section>
  );
};

export default GaleriaAlternada;
