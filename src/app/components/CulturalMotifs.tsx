import { motion } from "motion/react";

export function CulturalMotifs() {
  return (
    <>
      {/* Mandala overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="mandala"
              x="0"
              y="0"
              width="400"
              height="400"
              patternUnits="userSpaceOnUse"
            >
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="1"
              />
              <circle
                cx="200"
                cy="200"
                r="120"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.5"
              />
              <circle
                cx="200"
                cy="200"
                r="90"
                fill="none"
                stroke="#D4AF37"
                strokeWidth="0.5"
              />
              {Array.from({ length: 8 }).map((_, i) => {
                const angle = (i * Math.PI * 2) / 8;
                const x1 = 200 + Math.cos(angle) * 60;
                const y1 = 200 + Math.sin(angle) * 60;
                const x2 = 200 + Math.cos(angle) * 150;
                const y2 = 200 + Math.sin(angle) * 150;
                return (
                  <line
                    key={i}
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#D4AF37"
                    strokeWidth="0.5"
                  />
                );
              })}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * Math.PI * 2) / 12;
                const cx = 200 + Math.cos(angle) * 120;
                const cy = 200 + Math.sin(angle) * 120;
                return (
                  <circle
                    key={i}
                    cx={cx}
                    cy={cy}
                    r="8"
                    fill="none"
                    stroke="#D4AF37"
                    strokeWidth="0.5"
                  />
                );
              })}
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mandala)" />
        </svg>
      </motion.div>

      {/* Lotus petals corner decorations */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 opacity-[0.08]"
        initial={{ opacity: 0, x: -20, y: -20 }}
        animate={{ opacity: 0.08, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100,100 Q80,50 50,30 Q80,50 100,40 Q120,50 150,30 Q120,50 100,100"
            fill="#D4AF37"
          />
          <path
            d="M100,100 Q50,80 30,50 Q50,80 40,100 Q50,120 30,150 Q50,120 100,100"
            fill="#D4AF37"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.08] rotate-180"
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 0.08, x: 0, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <path
            d="M100,100 Q80,50 50,30 Q80,50 100,40 Q120,50 150,30 Q120,50 100,100"
            fill="#D4AF37"
          />
          <path
            d="M100,100 Q50,80 30,50 Q50,80 40,100 Q50,120 30,150 Q50,120 100,100"
            fill="#D4AF37"
          />
        </svg>
      </motion.div>
    </>
  );
}
