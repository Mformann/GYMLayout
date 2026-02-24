import { motion } from "motion/react";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export function TestimonialCard({
  name,
  role,
  content,
  rating,
  image,
}: TestimonialCardProps) {
  return (
    <motion.div
      className="bg-zinc-900 rounded-xl p-6 border border-zinc-800"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ borderColor: "#FFD000" }}
    >
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? "fill-[#FFD000] text-[#FFD000]" : "text-zinc-700"}
          />
        ))}
      </div>

      <p
        className="text-zinc-300 mb-6 leading-relaxed"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        "{content}"
      </p>

      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h5
            className="text-white font-bold"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {name}
          </h5>
          <p
            className="text-zinc-500 text-sm"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {role}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
