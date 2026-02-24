import { motion } from "motion/react";
import { Check } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  discount?: string;
  onJoinNow?: () => void;
}

export function PricingCard({
  title,
  price,
  period,
  features,
  isPopular = false,
  discount,
  onJoinNow,
}: PricingCardProps) {
  return (
    <motion.div
      className={`relative bg-zinc-900 rounded-2xl p-6 md:p-8 border-2 ${isPopular ? "border-[#FFD000]" : "border-zinc-800"
        }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, borderColor: isPopular ? "#FFD000" : "#52525b" }}
      transition={{ duration: 0.3 }}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD000] text-black px-4 py-1 rounded-full text-sm font-bold">
          MOST POPULAR
        </div>
      )}

      {discount && (
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
          {discount}
        </div>
      )}

      <div className="mb-6">
        <h3
          className="text-2xl md:text-3xl text-white mb-2"
          style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
        >
          {title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span
            className={`text-4xl md:text-5xl font-black ${isPopular ? "text-[#FFD000]" : "text-white"
              }`}
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            ${price}
          </span>
          <span className="text-zinc-400 text-lg">/{period}</span>
        </div>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="bg-[#FFD000] rounded-full p-1 mt-0.5">
              <Check size={14} className="text-black" />
            </div>
            <span
              className="text-zinc-300"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <motion.button
        onClick={onJoinNow}
        className={`w-full py-4 rounded-lg font-bold text-lg transition-colors ${isPopular
            ? "bg-[#FFD000] text-black hover:bg-[#ffdb33]"
            : "bg-white text-black hover:bg-zinc-200"
          }`}
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        Join Now
      </motion.button>
    </motion.div>
  );
}
