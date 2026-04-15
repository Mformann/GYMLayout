import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { InquiryForm } from "./InquiryForm";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/", isRoute: true },
    { label: "About", href: "/about", isRoute: true },
    { label: "Facilities", href: "/facilities", isRoute: true },
    { label: "Blog", href: "/blog", isRoute: true },
    { label: "Diet Finder", href: "/diet-finder", isRoute: true },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? "bg-black/95 backdrop-blur-lg shadow-lg border-b border-zinc-900" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-[#FFD000] rounded-lg flex items-center justify-center">
                <span className="text-black text-xl font-black">DG</span>
              </div>
              <span
                className="text-white text-xl md:text-2xl tracking-tight"
                style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 800 }}
              >
                DOCTOR<span className="text-[#FFD000]">GYM</span>
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-white hover:text-[#FFD000] transition-colors duration-300 font-medium"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
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
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left text-white hover:text-[#FFD000] px-4 py-3 transition-colors"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
