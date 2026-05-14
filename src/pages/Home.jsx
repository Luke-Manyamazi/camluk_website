import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import StatsSection from "../components/landing/StatsSection";
import ServicesSection from "../components/landing/ServicesSection";
import NuSiteSection from "../components/landing/NuSiteSection";
import ProcessSection from "../components/landing/ProcessSection";
import ClientsSection from "../components/landing/ClientsSection";
import WhyChooseSection from "../components/landing/WhyChooseSection";
import TestimonialsSection from "../components/landing/TestimonialsSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const el = document.getElementById(target);
    if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 150);
  }, [location.state]);

  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <NuSiteSection />
      <ProcessSection />
      <ClientsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
