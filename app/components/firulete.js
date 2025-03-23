"use client"; // Necesario para manejar el estado y efectos en Next.js
import { useEffect, useState } from "react";
import Image from "next/image";

const Particles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const numParticles = 60; // Cantidad de partículas
    const initialParticles = Array.from({ length: numParticles }, () => ({
      id: Math.random(),
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      dx: (Math.random() - 0.5) * 2, // Velocidad en X
      dy: (Math.random() - 0.5) * 2, // Velocidad en Y
      radius: 15, // Tamaño de la partícula
      rotation: Math.random() * 360, // Rotación inicial aleatoria
      rotationSpeed: (Math.random() - 0.5) * 4, // Velocidad de rotación
    }));

    setParticles(initialParticles);
  }, []);

  const handleMouseMove = (e) => {
    setParticles((prev) =>
      prev.map((p) => ({
        ...p,
        dx: p.dx + (Math.random() - 0.5) * 0.5, // Pequeñas variaciones aleatorias en X
        dy: p.dy + (Math.random() - 0.5) * 0.5, // Pequeñas variaciones aleatorias en Y
      }))
    );
  };
  const handleClick = (e) => {
    setParticles((prev) =>
    prev.map((p) => ({
      ...p,
      dx: p.dx = 0,
      dy: p.dy = 0,
    })));
  };

  useEffect(() => {
    const updateParticles = () => {
      setParticles((prev) => {
        const newParticles = prev.map((p) => {
          let newX = p.x + p.dx;
          let newY = p.y + p.dy;
          let newrotation = p.rotation + p.rotationSpeed;

          // Rebote en los bordes
          if (newX <= 0 || newX >= window.innerWidth ) p.dx *= -1;
          if (newY <= 0 || newY >= window.innerHeight) p.dy *= -1;

          return { ...p, x: newX, y: newY , rotation: newrotation};
        });

        // Detectar colisiones
        for (let i = 0; i < newParticles.length; i++) {
          for (let j = i + 1; j < newParticles.length; j++) {
            const p1 = newParticles[i];
            const p2 = newParticles[j];

            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < p1.radius * 2) {
              // Intercambiar velocidades (colisión elástica)
              [newParticles[i].dx, newParticles[j].dx] = [newParticles[j].dx, newParticles[i].dx];
              [newParticles[i].dy, newParticles[j].dy] = [newParticles[j].dy, newParticles[i].dy];
            }
          }
        }

        return newParticles;
      });

      requestAnimationFrame(updateParticles);
    };
    
    requestAnimationFrame(updateParticles);
}, []);


  return (
    
    <div id="mask" className="relative top-0 left-0 w-full h-full">
      {particles.map((p) => (
        <Image
          key={p.id}
          src="/firulete.svg"
          alt="Particle"
          width={60}
          height={60}
          className="absolute transition-transform ease-out duration-100"
          style={{
            left: p.x,
            top: p.y,
            position: "absolute",
            transform: `rotate(${p.rotation}deg)`,
            transitionBehavior: "allow-discrete",
            transitionDuration: "1s",
            transition:"ease-in-out"
          }}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
        />
      ))}
    </div>
  );
};

export default Particles;