import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Programs", path: "/programs" },
    { name: "Talent Quest", path: "/the-ummah-star" },
    { name: "Impact", path: "/impact" },
    { name: "About", path: "/about" },
  ];

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border",
        isScrolled || isMobileMenuOpen
          ? "bg-[#0A0D0C]/90 backdrop-blur-md"
          : "bg-[#0A0D0C]"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
            <div className="w-6 h-6 border-2 border-white transform rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase text-white">
            <span className="text-emerald-500">ITQF</span> <span className="opacity-70 hidden sm:inline">| Ummah Star</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase opacity-70">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                "transition-colors hover:text-emerald-500",
                location.pathname === link.path ? "text-emerald-500 opacity-100" : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/the-ummah-star" className="px-5 py-2 text-sm font-bold border border-emerald-500/50 rounded-full text-white hover:bg-emerald-500/10 transition-colors uppercase">
            Portal Login
          </Link>
          <Link to="/donate" className="px-6 py-2 text-sm font-bold bg-emerald-600 rounded-full text-white hover:bg-emerald-500 transition-colors uppercase shadow-lg shadow-emerald-900/40">
            Donate Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-white hover:text-emerald-500 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D1210] border-t border-white/10"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={clsx(
                    "text-lg font-medium px-4 py-2 rounded-md uppercase tracking-wide",
                    location.pathname === link.path ? "bg-emerald-500/10 text-emerald-500" : "text-gray-400 hover:text-white"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <Link
                to="/the-ummah-star"
                className="text-lg font-medium px-4 py-2 rounded-md text-gray-400 hover:text-white uppercase tracking-wide"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portal Login
              </Link>
              <Link
                to="/donate"
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white px-5 py-3 rounded-md font-bold text-lg mt-2 uppercase shadow-lg shadow-emerald-900/40 hover:bg-emerald-500 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
