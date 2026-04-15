import { motion } from "motion/react";
import { LucideIcon } from "lucide-react";

interface FacilityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FacilityCard({ icon: Icon, title, description }: FacilityCardProps) {
  return (
    <motion.div
      className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-[#FFD000] transition-colors"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="bg-[#FFD000] w-14 h-14 rounded-lg flex items-center justify-center mb-4">
        <Icon size={28} className="text-black" />
      </div>
      <h4
        className="text-white text-xl mb-2"
        style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
      >
        {title}
      </h4>
      <p
        className="text-zinc-400"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {description}
      </p>
    </motion.div>
  );
}
