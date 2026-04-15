import { motion } from "motion/react";
import { useEffect, useState } from "react";

export function SpotlightEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Main spotlight from top */}
      <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 800px 600px at 50% 20%, rgba(212, 175, 55, 0.25) 0%, transparent 50%)`,
        }}
        animate={{
          opacity: [0.6, 0.8, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary warm glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle 600px at ${mousePosition.x}% ${mousePosition.y}%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)`,
          transition: "background 0.3s ease-out",
        }}
      />

      {/* Subtle edge vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, transparent 0%, rgba(90, 15, 28, 0.4) 100%)",
        }}
      />
    </>
  );
}
