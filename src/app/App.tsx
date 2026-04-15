import { Routes, Route } from "react-router";
import { Facebook, Instagram, Twitter, X } from "lucide-react";
import { useState } from "react";
import { Navigation } from "./components/Navigation";
import { FloatingButtons } from "./components/FloatingButtons";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { DietFinder } from "./pages/DietFinder";
import { About } from "./pages/About";
import { Facilities } from "./pages/Facilities";
import { motion, AnimatePresence } from "motion/react";

function App() {
  const [isCareerDialogOpen, setIsCareerDialogOpen] = useState(false);

  const handleCareerApply = (role: string) => {
    const text = `Hello Doctor Gym! I am looking to apply for the ${role} position. Here are my details: `;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/919000000000?text=${encoded}`, "_blank");
  };

  return (
    <div className="bg-black text-white overflow-x-hidden min-h-screen flex flex-col">
      <Navigation />
      <FloatingButtons />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/diet-finder" element={<DietFinder />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-900 py-12 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#FFD000] rounded-lg flex items-center justify-center">
                  <span className="text-black text-xl font-black">DG</span>
                </div>
                <span
                  className="text-white text-2xl tracking-tight"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
                >
                  DOCTOR<span className="text-[#FFD000]">GYM</span>
                </span>
              </div>
              <p
                className="text-zinc-400 mb-4 max-w-md"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                Your journey to a healthier, disease-free, and stronger body starts here. 
                Experience medical-grade fitness in Gota, Ahmedabad today.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="bg-zinc-900 p-3 rounded-lg hover:bg-[#FFD000] hover:text-black transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="bg-zinc-900 p-3 rounded-lg hover:bg-[#FFD000] hover:text-black transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="bg-zinc-900 p-3 rounded-lg hover:bg-[#FFD000] hover:text-black transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4
                className="text-white text-lg mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
              >
                Quick Links
              </h4>
              <ul className="space-y-2">
                {["About Clinic", "90 Days Plan", "Medical Nutrition", "Contact"].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-zinc-400 hover:text-[#FFD000] transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4
                className="text-white text-lg mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 700 }}
              >
                Support
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-zinc-400 hover:text-[#FFD000] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => setIsCareerDialogOpen(true)}
                    className="text-zinc-400 hover:text-[#FFD000] transition-colors"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Careers
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-900 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
            <p
              className="text-zinc-500"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              © 2026 Doctor Gym (Gota, Ahmedabad). All rights reserved.
            </p>
            <p className="text-zinc-500 text-sm">Empowering health through guided medical fitness.</p>
          </div>
        </div>
      </footer>

      {/* Career WhatsApp Dialog Box */}
      <AnimatePresence>
        {isCareerDialogOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-md relative"
            >
              <button 
                onClick={() => setIsCareerDialogOpen(false)} 
                className="absolute top-4 right-4 text-zinc-400 hover:text-white"
              >
                <X size={24} />
              </button>
              
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Montserrat', sans-serif" }}>Join Our Team</h3>
              <p className="text-zinc-400 mb-6 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Select the role you're applying for to inquire with our HR over WhatsApp.</p>

              <div className="space-y-3">
                <button 
                  onClick={() => handleCareerApply("Receptionist")}
                  className="w-full bg-black border border-zinc-800 text-left px-4 py-3 rounded-lg hover:border-[#FFD000] hover:text-[#FFD000] transition-colors"
                >
                  <span className="font-bold block">Receptionist</span>
                  <span className="text-xs text-zinc-500 line-clamp-1 mt-1">Manage front desk operations & patient coordination.</span>
                </button>
                <button 
                  onClick={() => handleCareerApply("Physiotherapist")}
                  className="w-full bg-black border border-zinc-800 text-left px-4 py-3 rounded-lg hover:border-[#FFD000] hover:text-[#FFD000] transition-colors"
                >
                  <span className="font-bold block">Physiotherapist</span>
                  <span className="text-xs text-zinc-500 line-clamp-1 mt-1">Provide clinical alignment & injury prevention care.</span>
                </button>
                <button 
                  onClick={() => handleCareerApply("Trainer")}
                  className="w-full bg-black border border-zinc-800 text-left px-4 py-3 rounded-lg hover:border-[#FFD000] hover:text-[#FFD000] transition-colors"
                >
                  <span className="font-bold block">Fitness Trainer</span>
                  <span className="text-xs text-zinc-500 line-clamp-1 mt-1">Execute medical-grade exercise protocols for our clients.</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
