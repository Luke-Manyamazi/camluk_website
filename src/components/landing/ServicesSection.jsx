import React from "react";
import { motion } from "framer-motion";
import { Headphones, Globe, Code, GraduationCap, Printer, ArrowUpRight, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";
import serviceImg from "@/assets/service.png";

const services = [
  {
    Icon: Headphones,
    title: "IT Support",
    subtitle: "On-Site & Remote",
    description:
      "We provide fast, reliable technical support to keep your systems running smoothly with minimal downtime.",
  },
  {
    Icon: Globe,
    title: "Web Development",
    subtitle: "Modern & Responsive",
    description:
      "We design and build modern, responsive, and SEO-optimized websites that help businesses grow their online presence.",
    button: { label: "Learn More", to: "/portfolio" },
  },
  {
    Icon: Code,
    title: "Software Development",
    subtitle: "Custom Solutions",
    description:
      "We develop custom software solutions that streamline operations, improve efficiency, and scale with your business.",
    button: { label: "Explore Software", to: "/portfolio" },
  },
  {
    Icon: GraduationCap,
    title: "Computer Academy",
    subtitle: "Training Programs",
    description:
      "We offer practical, industry-relevant training programs designed to equip individuals with in-demand tech skills.",
    button: { label: "View Courses", to: "/courses" },
  },
  {
    Icon: Settings,
    title: "IT Installations",
    subtitle: "Setup & Deployment",
    description:
      "Professional setup of computers, printers, networks, and office tech — reliable and efficient installations for homes or businesses.",
  },
  {
    Icon: Printer,
    title: "Quick Office & Digital Services",
    subtitle: "Walk-in Services",
    description:
      "Printing, copying, scanning, emailing, and graphic design — fast, affordable walk-in digital services.",
  },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  const handleButtonClick = (button) => {
    if (button.to) {
      navigate(button.to);
    } else if (button.sectionId) {
      const el = document.getElementById(button.sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono font-medium text-accent tracking-wider uppercase mb-4">
            Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What We Offer
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-base sm:text-lg">
            End-to-end digital services designed to power your business forward.
          </p>
        </motion.div>

        {/* Services image banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden mb-10 border border-border/30"
        >
          <img
            src={serviceImg}
            alt="IT Support Services"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-transparent" />
          <div className="absolute inset-0 flex items-center px-8">
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">End-to-End</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Digital Services</h3>
              <p className="text-sm text-muted-foreground mt-1 max-w-xs">From support to software — we've got you covered.</p>
            </div>
          </div>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ Icon, title, subtitle, description, button }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
            >
              <div className="group relative h-full p-6 lg:p-8 border-l-2 border-border/40 hover:border-primary/60 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  <p className="text-xs font-mono text-primary/70 uppercase tracking-wider mb-1">
                    {subtitle}
                  </p>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{description}</p>

                  {button && (
                    <button
                      onClick={() => handleButtonClick(button)}
                      className="mt-4 inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                    >
                      {button.label}
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}