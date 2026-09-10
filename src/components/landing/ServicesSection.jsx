import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Headphones, Globe, Code, GraduationCap, Printer, Settings, ChevronRight, Check, Plus, Minus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import serviceImg from "@/assets/service.webp";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const services = [
  {
    n: "01",
    Icon: Globe,
    title: "Web Development",
    tag: "Modern websites and web applications",
    description:
      "We design and build websites and web apps that help businesses look credible, convert more leads, and operate more professionally online. From landing pages to full business platforms, we build for clarity, speed, and trust.",
    details: [
      "High-converting business websites built to sell and inform",
      "Responsive web apps designed for modern business workflows",
      "Clear messaging, polished design, and better user experience",
      "Fast performance, mobile-first layouts, and easy-to-manage content",
      "SEO-conscious structure to improve visibility and discovery",
      "Support for growth, upgrades, and future feature expansion",
    ],
    cta: null,
  },
  {
    n: "02",
    Icon: Code,
    title: "Business Software",
    tag: "Custom systems for daily operations",
    description:
      "We build practical software that helps businesses manage operations, sales, stock, customers, and reporting without unnecessary complexity. The result is better visibility, less admin, and smoother daily execution.",
    details: [
      "Workflow tools built around how your business actually works",
      "Customer, order, stock, and reporting dashboards",
      "Back-office systems that reduce manual admin and errors",
      "Streamlined processes for sales, operations, and team coordination",
      "Integrations with your current tools and business systems",
      "Scalable software that grows with your business",
    ],
    cta: null,
  },
  {
    n: "03",
    Icon: Settings,
    title: "AI & Automation",
    tag: "Smarter operations with less repetitive work",
    description:
      "We help businesses use AI and automation to remove repetitive work, speed up decision-making, and free up teams to focus on higher-value tasks. Our approach stays practical, useful, and aligned with your real business goals.",
    details: [
      "Automated workflows that reduce manual admin and follow-ups",
      "AI tools for content, support, lead handling, and internal productivity",
      "Smarter processing for repetitive business tasks",
      "Workflow improvements that reduce delays and human error",
      "Simple, useful automation that fits your operations",
      "Solutions designed to save time and improve consistency",
    ],
    cta: null,
  },
  {
    n: "04",
    Icon: Headphones,
    title: "Cloud & Deployment",
    tag: "Reliable hosting and secure delivery",
    description:
      "We handle the technical side of getting your systems online and keeping them running reliably. From cloud hosting to deployment and ongoing support, we make sure your digital tools are stable, secure, and ready for use.",
    details: [
      "Cloud hosting and deployment for websites and business apps",
      "Reliable setup designed for uptime, performance, and security",
      "Environment configuration and launch support",
      "Maintenance planning for long-term business continuity",
      "Smooth deployment with minimal business disruption",
      "Technical support to keep operations moving without friction",
    ],
    cta: null,
  },
];

export default function ServicesSection({ onNavigate }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(null);

  const toggle = (n) => setOpen(prev => prev === n ? null : n);

  return (
    <section id="services" className="relative border-t border-border/60">
      <div className="h-1 w-24 bg-primary ml-6 lg:ml-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="grid lg:grid-cols-3 gap-8 mb-14">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Services</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
              Business systems, simplified.
            </h2>
          </div>
          <div className="lg:col-span-2 lg:pt-14">
            <p className="text-xl text-muted-foreground leading-relaxed">
              We build digital solutions that remove bottlenecks, automate routine work, and help businesses run smoother, faster, and smarter.
            </p>
          </div>
        </motion.div>

        {/* Banner image */}
        <motion.div {...fadeUp(0.05)} className="relative overflow-hidden border border-border/40 mb-10 h-44 sm:h-56">
          <img src={serviceImg} alt="Camluk services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/85 to-background/20" />
          <div className="absolute inset-0 flex items-center px-8 lg:px-12">
            <div>
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-2">Camluk Technologies</p>
              <p className="text-2xl sm:text-3xl font-black tracking-tighter text-foreground leading-tight">
                End-to-End<br />Digital Services
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services accordion */}
        <div className="divide-y divide-border/40 border-t border-border/40">
          {services.map(({ n, Icon, title, tag, description, details, cta }, i) => (
            <motion.div key={n} {...fadeUp(i * 0.04)}>

              {/* Row header — always visible */}
              <button
                onClick={() => toggle(n)}
                className="group w-full grid sm:grid-cols-[60px_1fr_auto] gap-4 sm:gap-8 items-center py-6 hover:bg-card/30 -mx-2 px-2 transition-colors text-left"
              >
                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">{n}</span>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground leading-tight">{title}</h3>
                    <p className="text-xs font-mono text-muted-foreground mt-0.5">{tag}</p>
                  </div>
                </div>
                <div className="w-7 h-7 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 transition-colors ml-auto">
                  {open === n
                    ? <Minus className="w-3.5 h-3.5 text-primary" />
                    : <Plus className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />
                  }
                </div>
              </button>

              {/* Expanded content */}
              <AnimatePresence initial={false}>
                {open === n && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 pb-8 pt-2 pl-2 sm:pl-[88px]">

                      {/* Description */}
                      <div>
                        <p className="text-base text-muted-foreground leading-relaxed mb-6">{description}</p>
                        {cta && (
                          <button
                            onClick={() => navigate(cta.route)}
                            className="group/btn inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2.5 transition-all"
                          >
                            {cta.label}
                            <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                          </button>
                        )}
                      </div>

                      {/* Details list */}
                      <ul className="space-y-3">
                        {details.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm">
                            <div className="w-4 h-4 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                              <Check className="w-2.5 h-2.5 text-primary" />
                            </div>
                            <span className="text-muted-foreground leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
