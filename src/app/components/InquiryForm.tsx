import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    objective: "90 Days Transformation",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "919000000000"; // Dummy Indian number; easily replaceable
    const text = `Hello Doctor Gym! My name is ${formData.name}. I am interested in the ${formData.objective} program. ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, "_blank");
  };

  return (
    <motion.div
      className="bg-zinc-900 p-8 rounded-2xl border border-zinc-800 w-full max-w-md mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: "'Montserrat', sans-serif" }}>
        Start Your Health Journey
      </h3>
      <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-1" htmlFor="name">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full bg-black border border-zinc-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#FFD000] transition-colors"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-1" htmlFor="objective">Primary Objective</label>
          <select
            id="objective"
            name="objective"
            className="w-full bg-black border border-zinc-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#FFD000] transition-colors"
            value={formData.objective}
            onChange={handleChange}
          >
            <option value="90 Days Transformation">90 Days Transformation</option>
            <option value="Nutrition & Diet Consultation">Nutrition & Diet Consultation</option>
            <option value="Disease Reversal (Diabetes, PCOS, etc.)">Disease Reversal Program</option>
            <option value="General Fitness">General Fitness</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-400 mb-1" htmlFor="message">Medical History / Message</label>
          <textarea
            id="message"
            name="message"
            rows={3}
            className="w-full bg-black border border-zinc-800 rounded-lg py-3 px-4 text-white focus:outline-none focus:border-[#FFD000] transition-colors"
            placeholder="Any past medical history, diseases, or goals..."
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <motion.button
          type="submit"
          className="w-full bg-[#25D366] text-white py-4 rounded-lg font-bold text-lg hover:bg-[#20ba5a] transition-colors flex items-center justify-center gap-2"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <MessageCircle size={24} />
          Inquire via WhatsApp
        </motion.button>
      </form>
    </motion.div>
  );
}
