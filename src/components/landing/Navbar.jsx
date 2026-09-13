import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "@/assets/camluk_logo.jpg";

const navLinks = [
  { label: "Home", sectionId: "home" },
  { label: "Services", sectionId: "services" },
  { label: "How We Work", sectionId: "process" },
  { label: "About", sectionId: "about" },
  { label: "Who We Serve", sectionId: "clients" },
  { label: "Why Camluk", sectionId: "why-us" },
  { label: "Contact", sectionId: "contact" },
];

export default function Navbar({ onNavigate, currentSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onWindowScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onWindowScroll);
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);

  const handleNavClick = (link) => {
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate(link.sectionId || "home");
      return;
    }
    const { sectionId } = link;
    if (sectionId === "home") {
      if (location.pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
      else {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      }
    } else if (location.pathname === "/") {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: sectionId } });
    }
  };

  return (
    <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-primary/5" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <motion.div className="flex items-center gap-2.5 cursor-pointer" whileHover={{ scale: 1.02 }} onClick={() => handleNavClick({ sectionId: "home" })}>
            <div className="w-9 h-9 rounded-lg overflow-hidden"><img src={logo} alt="Camluk Technologies Logo" className="w-full h-full object-cover" /></div>
            <div><span className="text-lg font-bold tracking-tight text-foreground">Camluk</span><span className="text-lg font-light text-primary ml-0.5">Tech</span></div>
          </motion.div>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Button aria-label="Open navigation menu" className="bg-white/5 text-white border border-white/10 px-5 py-2 rounded-full text-[10px] font-semibold uppercase tracking-[0.24em] hover:bg-white/10" onClick={() => setMobileOpen(!mobileOpen)}>Navigate</Button>
          </div>
          <div className="w-[140px]" />
        </div>
      </div>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] bg-[#0a0a0a]/95 backdrop-blur-md">
            <div className="absolute right-5 top-5 z-10"><button onClick={() => setMobileOpen(false)} className="w-11 h-11 rounded-full border border-white/10 text-white/80 hover:text-white hover:border-white/25 transition-colors flex items-center justify-center" aria-label="Close navigation"><X className="w-5 h-5" /></button></div>
            <div className="flex h-full w-full items-center justify-center px-6"><div className="space-y-4 text-center">
              {navLinks.map((link, index) => (
                <motion.button key={link.sectionId} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} onClick={() => handleNavClick(link)} className="block w-full text-2xl sm:text-4xl font-black uppercase tracking-[-0.05em] text-white/80 hover:text-white transition-colors">{link.label}</motion.button>
              ))}
            </div></div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
