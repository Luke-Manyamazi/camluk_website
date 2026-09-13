import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import ServicesSection from "../components/landing/ServicesSection";
import ProcessSection from "../components/landing/ProcessSection";
import ClientsSection from "../components/landing/ClientsSection";
import WhyChooseSection from "../components/landing/WhyChooseSection";
import ContactSection from "../components/landing/ContactSection";

const SECTIONS = ["home", "services", "process", "about", "clients", "why-us", "contact"];
const SECTION_LABELS = { home: "Home", services: "Services", process: "How We Work", about: "About", clients: "Who We Serve", "why-us": "Why Camluk", contact: "Contact" };

const sectionVariants = {
  enter: (direction) => ({ y: direction > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { y: 0, opacity: 1, transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] } },
  exit: (direction) => ({ y: direction > 0 ? "-100%" : "100%", opacity: 0, transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }),
};

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const touchStartY = React.useRef(null);
  const isAnimating = React.useRef(false);

  const navigateTo = useCallback((indexOrId) => {
    const targetIndex = typeof indexOrId === "string" ? SECTIONS.indexOf(indexOrId) : indexOrId;
    if (targetIndex === currentIndex || targetIndex < 0 || targetIndex >= SECTIONS.length) return;
    setDirection(targetIndex > currentIndex ? 1 : -1);
    setCurrentIndex(targetIndex);
  }, [currentIndex]);

  const handleNavigate = useCallback((indexOrId) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    navigateTo(indexOrId);
    setTimeout(() => { isAnimating.current = false; }, 850);
  }, [navigateTo]);

  const handleTouchStart = useCallback((event) => { touchStartY.current = event.touches[0].clientY; }, []);
  const handleTouchEnd = useCallback((event) => {
    if (touchStartY.current === null) return;
    const delta = touchStartY.current - event.changedTouches[0].clientY;
    if (Math.abs(delta) > 50) handleNavigate(currentIndex + (delta > 0 ? 1 : -1));
    touchStartY.current = null;
  }, [currentIndex, handleNavigate]);

  const currentSection = SECTIONS[currentIndex];
  const previousSection = SECTIONS[currentIndex - 1] || null;
  const nextSection = SECTIONS[currentIndex + 1] || null;

  const renderSection = (sectionId) => {
    switch (sectionId) {
      case "home": return <HeroSection onNavigate={handleNavigate} nextSection={nextSection} />;
      case "services": return <ServicesSection onNavigate={handleNavigate} nextSection={nextSection} />;
      case "process": return <ProcessSection onNavigate={handleNavigate} nextSection={nextSection} />;
      case "about": return <AboutSection onNavigate={handleNavigate} nextSection={nextSection} />;
      case "clients": return <ClientsSection onNavigate={handleNavigate} nextSection={nextSection} />;
      case "why-us": return <WhyChooseSection onNavigate={handleNavigate} nextSection={nextSection} />;
      case "contact": return <ContactSection onNavigate={handleNavigate} nextSection={nextSection} />;
      default: return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-[#0d0d0d] text-foreground font-inter overflow-hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <Navbar onNavigate={handleNavigate} currentSection={currentSection} />
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div key={currentSection} custom={direction} variants={sectionVariants} initial="enter" animate="center" exit="exit" className="absolute inset-0 overflow-y-auto pb-16" style={{ scrollbarWidth: "none" }}>
          {renderSection(currentSection)}
        </motion.div>
      </AnimatePresence>

      <div className="fixed left-4 right-4 bottom-16 z-40 flex items-center justify-between pointer-events-none">
        {previousSection ? (
          <button onClick={() => handleNavigate(currentIndex - 1)} className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-2.5 border border-border/60 bg-background/80 backdrop-blur-md text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all shadow-lg" aria-label={`Go to ${SECTION_LABELS[previousSection]}`}>
            <ChevronLeft className="w-4 h-4 text-primary" />
            <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider">{SECTION_LABELS[previousSection]}</span>
          </button>
        ) : <span />}
        {nextSection ? (
          <button onClick={() => handleNavigate(currentIndex + 1)} className="pointer-events-auto inline-flex items-center gap-2 px-3.5 py-2.5 border border-border/60 bg-background/80 backdrop-blur-md text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all shadow-lg" aria-label={`Go to ${SECTION_LABELS[nextSection]}`}>
            <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider">{SECTION_LABELS[nextSection]}</span>
            <ChevronRight className="w-4 h-4 text-primary" />
          </button>
        ) : <span />}
      </div>

      <div className="fixed bottom-0 inset-x-0 z-30 border-t border-border/40 bg-background/90 backdrop-blur-md px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1.5 text-[10px] sm:text-xs text-muted-foreground">
          <span>© 2026 Camluk Technologies. All rights reserved.</span>
          <div className="flex items-center gap-3"><a href="mailto:support@camluk.co.za" className="hover:text-foreground transition-colors">support@camluk.co.za</a><span className="text-border">|</span><a href="tel:+27621071140" className="hover:text-foreground transition-colors">+27 62 107 1140</a></div>
        </div>
      </div>

      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2" aria-label="Section navigation">
        {SECTIONS.map((section, index) => <button key={section} onClick={() => handleNavigate(index)} title={SECTION_LABELS[section]} className={`w-1.5 transition-all duration-300 ${index === currentIndex ? "h-8 bg-primary" : "h-2 bg-white/20 hover:bg-white/50"}`} aria-label={`Go to ${SECTION_LABELS[section]} section`} />)}
      </div>
    </div>
  );
}
