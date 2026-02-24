import { motion } from "motion/react";
import { Phone, MessageCircle } from "lucide-react";

export function FloatingButtons() {
  return (
    <>
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20ba5a] transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle size={28} />
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+1234567890"
        className="fixed bottom-24 right-6 z-50 bg-[#FFD000] text-black p-4 rounded-full shadow-2xl hover:bg-[#ffdb33] transition-colors"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Phone size={28} />
      </motion.a>
    </>
  );
}
