import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  onJoinNow?: () => void;
}

export function Navigation({ onJoinNow }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Plans", href: "#plans" },
    { label: "Facilities", href: "#facilities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-10 h-10 bg-[#FFD000] rounded-lg flex items-center justify-center">
              <span className="text-black text-xl font-black">FG</span>
            </div>
            <span
              className="text-white text-xl md:text-2xl tracking-tight"
              style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
            >
              FIT<span className="text-[#FFD000]">GYM</span>
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-white hover:text-[#FFD000] transition-colors duration-300 font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <motion.button
              onClick={onJoinNow}
              className="bg-[#FFD000] text-black px-6 py-2 rounded-lg font-bold hover:bg-[#ffdb33] transition-colors"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-black/95 backdrop-blur-lg pb-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-white hover:text-[#FFD000] px-4 py-3 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={onJoinNow}
              className="w-full bg-[#FFD000] text-black px-4 py-3 mt-2 mx-4 rounded-lg font-bold"
              style={{ fontFamily: "'Montserrat', sans-serif", width: "calc(100% - 2rem)" }}
            >
              Join Now
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
