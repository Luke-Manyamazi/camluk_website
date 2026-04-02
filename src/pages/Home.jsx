import React from "react";
import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import ServicesSection from "../components/landing/ServicesSection";
import ProcessSection from "../components/landing/ProcessSection";
import ClientsSection from "../components/landing/ClientsSection";
import WhyChooseSection from "../components/landing/WhyChooseSection";
import ContactSection from "../components/landing/ContactSection";
import Footer from "../components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-inter px-4 sm:px-8 lg:px-16">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <ClientsSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}