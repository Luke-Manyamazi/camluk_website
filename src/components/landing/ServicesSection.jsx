import React from "react";
import { motion } from "framer-motion";
import { Headphones, Globe, Code, GraduationCap, Printer, Settings, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import serviceImg from "@/assets/service.webp";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const services = [
  { n: "01", Icon: Headphones,    title: "IT Support",                    tag: "On-Site & Remote",     cta: null },
  { n: "02", Icon: Globe,         title: "Web Development",               tag: "Modern & Responsive",  cta: { label: "See Portfolio", route: "/portfolio" } },
  { n: "03", Icon: Code,          title: "Software Development",          tag: "Custom Solutions",     cta: { label: "See Portfolio", route: "/portfolio" } },
  { n: "04", Icon: GraduationCap, title: "Computer Academy",              tag: "Training Programs",    cta: { label: "View Courses",  route: "/academy" } },
  { n: "05", Icon: Settings,      title: "IT Installations",              tag: "Setup & Deployment",   cta: null },
  { n: "06", Icon: Printer,       title: "Quick Office & Digital Services", tag: "Walk-in Services",   cta: null },
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section id="services" className="relative border-t border-border/60">
      <div className="h-1 w-24 bg-primary ml-6 lg:ml-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="grid lg:grid-cols-3 gap-8 mb-14">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Services</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
              What we offer.
            </h2>
          </div>
          <div className="lg:col-span-2 lg:pt-14">
            <p className="text-xl text-muted-foreground leading-relaxed">
              End-to-end IT services for individuals, small businesses and enterprises across South Africa.
            </p>
          </div>
        </motion.div>

        {/* Banner image */}
        <motion.div {...fadeUp(0.05)} className="relative overflow-hidden border border-border/40 mb-10 h-44 sm:h-56">
          <img src={serviceImg} alt="Camluk services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/20" />
          <div className="absolute inset-0 flex items-center px-8 lg:px-12">
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Camluk Technologies</p>
              <p className="text-2xl sm:text-3xl font-black tracking-tighter text-foreground leading-tight">
                End-to-End<br />Digital Services
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services list */}
        <div className="divide-y divide-border/40 border-t border-border/40">
          {services.map(({ n, Icon, title, tag, cta }, i) => (
            <motion.div
              key={n}
              {...fadeUp(i * 0.05)}
              className="group grid sm:grid-cols-[60px_1fr_1fr_auto] gap-4 sm:gap-8 items-center py-6 hover:bg-card/30 -mx-2 px-2 transition-colors"
            >
              <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">{n}</span>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 transition-colors">
                  <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground font-mono hidden sm:block">{tag}</p>
              {cta ? (
                <button
                  onClick={() => navigate(cta.route)}
                  className="group/btn inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all whitespace-nowrap"
                >
                  {cta.label} <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              ) : (
                <span />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
