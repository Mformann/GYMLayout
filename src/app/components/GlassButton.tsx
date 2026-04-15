import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { useState } from "react";

interface GlassButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}

export function GlassButton({ children, variant = "primary", onClick }: GlassButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const isPrimary = variant === "primary";

  return (
    <motion.button
      className={`relative px-8 py-4 rounded-lg overflow-hidden backdrop-blur-md transition-all duration-300 ${
        isPrimary
          ? "bg-gradient-to-r from-[#D4AF37]/20 to-[#D4AF37]/30 border-2 border-[#D4AF37]/50"
          : "bg-white/10 border-2 border-white/30"
      }`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      style={{
        boxShadow: isPrimary
          ? "0 8px 32px rgba(212, 175, 55, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
          : "0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
      }}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        initial={{ x: "-100%" }}
        animate={isHovered ? { x: "100%" } : { x: "-100%" }}
        transition={{ duration: 0.6 }}
      />

      {/* Glow on hover */}
      {isPrimary && (
        <motion.div
          className="absolute inset-0 bg-[#D4AF37]/30 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}

      <span
        className={`relative z-10 flex items-center gap-2 tracking-wide ${
          isPrimary ? "text-[#D4AF37]" : "text-[#F8F4E9]"
        }`}
        style={{
          fontFamily: "'Inter', sans-serif",
          textShadow: isPrimary
            ? "0 0 20px rgba(212, 175, 55, 0.5)"
            : "0 2px 8px rgba(0, 0, 0, 0.3)",
        }}
      >
        {children}
        {isPrimary && (
          <motion.div
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-4 h-4" />
          </motion.div>
        )}
      </span>
    </motion.button>
  );
}
