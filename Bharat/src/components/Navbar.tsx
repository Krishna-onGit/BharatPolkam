import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/50 backdrop-blur-xl border-b border-white/10 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-[120px] py-6">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-white font-['PP_Neue_Montreal:Book',sans-serif] text-2xl hover:opacity-80 transition-opacity"
          >
            Bharat Polkam
          </button>

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-white/70 hover:text-white transition-colors font-['PP_Neue_Montreal:Book',sans-serif] text-lg"
            >
              Home
            </button>

            {/* Portfolio with Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="text-white/70 hover:text-white transition-colors font-['PP_Neue_Montreal:Book',sans-serif] text-lg">
                Portfolio
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden min-w-[180px]"
                  >
                    <button
                      onClick={() => scrollToSection("direction")}
                      className="w-full px-6 py-3 text-left text-white/80 hover:text-white hover:bg-white/10 transition-all font-['PP_Neue_Montreal:Book',sans-serif]"
                    >
                      Direction
                    </button>
                    <button
                      onClick={() => scrollToSection("performance")}
                      className="w-full px-6 py-3 text-left text-white/80 hover:text-white hover:bg-white/10 transition-all font-['PP_Neue_Montreal:Book',sans-serif]"
                    >
                      Performance
                    </button>
                    <button
                      onClick={() => scrollToSection("production")}
                      className="w-full px-6 py-3 text-left text-white/80 hover:text-white hover:bg-white/10 transition-all font-['PP_Neue_Montreal:Book',sans-serif]"
                    >
                      Production
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="text-white/70 hover:text-white transition-colors font-['PP_Neue_Montreal:Book',sans-serif] text-lg"
            >
              About
            </button>
          </div>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="px-8 py-3 bg-gradient-to-r from-white/10 to-white/5 hover:from-white/20 hover:to-white/10 border border-white/20 rounded-full text-white font-['PP_Museum:Regular',sans-serif] transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
          >
            Contact
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-white font-['PP_Neue_Montreal:Book',sans-serif] text-xl hover:opacity-80 transition-opacity"
          >
            Bharat Polkam
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-6 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg overflow-hidden"
            >
              <div className="flex flex-col p-4 space-y-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-white/80 hover:text-white transition-colors font-['PP_Neue_Montreal:Book',sans-serif] text-left py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("direction")}
                  className="text-white/80 hover:text-white transition-colors font-['PP_Neue_Montreal:Book',sans-serif] text-left py-2 pl-4"
                >
                  Direction
                </button>
                <button
                  onClick={() => scrollToSection("performance")}
                  className="text-white/80 hover:text-white transition-colors font-['PP_Neue_Montreal:Book',sans-serif] text-left py-2 pl-4"
                >
                  Performance
                </button>
                <button
                  onClick={() => scrollToSection("production")}
                  className="text-white/80 hover:text-white transition-colors font-['PP_Neue_Montreal:Book',sans-serif] text-left py-2 pl-4"
                >
                  Production
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white/80 hover:text-white transition-colors font-['PP_Neue_Montreal:Book',sans-serif] text-left py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 border border-white/20 rounded-full text-white font-['PP_Museum:Regular',sans-serif] text-center"
                >
                  Contact
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}