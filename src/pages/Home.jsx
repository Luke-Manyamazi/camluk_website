import React, { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/landing/Navbar";
import Footer from "../components/landing/Footer";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import ServicesSection from "../components/landing/ServicesSection";
import ProcessSection from "../components/landing/ProcessSection";
import ClientsSection from "../components/landing/ClientsSection";
import WhyChooseSection from "../components/landing/WhyChooseSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import ContactSection from "../components/landing/ContactSection";

const SECTIONS = ["home", "services", "about", "clients", "contact"];

const sectionVariants = {
  enter: (direction) => ({
    y: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
  exit: (direction) => ({
    y: direction > 0 ? "-100%" : "100%",
    opacity: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
  }),
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

  const handleTouchStart = useCallback((event) => {
    touchStartY.current = event.touches[0].clientY;
  }, []);

  const handleTouchEnd = useCallback((event) => {
    if (touchStartY.current === null) return;
    const delta = touchStartY.current - event.changedTouches[0].clientY;
    if (Math.abs(delta) > 50) {
      if (delta > 0) handleNavigate(currentIndex + 1);
      else handleNavigate(currentIndex - 1);
    }
    touchStartY.current = null;
  }, [currentIndex, handleNavigate]);

  const currentSection = SECTIONS[currentIndex];
  const nextSection = SECTIONS[currentIndex + 1] || null;

  const renderSection = (sectionId) => {
    switch (sectionId) {
      case "home":
        return <HeroSection onNavigate={handleNavigate} nextSection={nextSection} />;
      case "services":
        return <ServicesSection onNavigate={handleNavigate} nextSection={nextSection} />;
      case "about":
        return <AboutSection onNavigate={handleNavigate} nextSection={nextSection} />;
      case "clients":
        return <ClientsSection onNavigate={handleNavigate} nextSection={nextSection} />;
      case "contact":
        return <ContactSection onNavigate={handleNavigate} nextSection={nextSection} />;
      default:
        return null;
    }
  };

  return (
    <div
      className="fixed inset-0 bg-[#0d0d0d] text-foreground font-inter overflow-hidden"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <Navbar onNavigate={handleNavigate} currentSection={currentSection} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentSection}
          custom={direction}
          variants={sectionVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 overflow-y-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {renderSection(currentSection)}
          {currentSection === "contact" && <Footer onNavigate={handleNavigate} />}
        </motion.div>
      </AnimatePresence>

      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2">
        {SECTIONS.map((section, index) => (
          <button
            key={section}
            onClick={() => handleNavigate(index)}
            title={section}
            className={`w-1.5 transition-all duration-300 ${index === currentIndex ? "h-8 bg-primary" : "h-2 bg-white/20 hover:bg-white/50"}`}
            aria-label={`Go to ${section} section`}
          />
        ))}
      </div>
    </div>
  );
}
