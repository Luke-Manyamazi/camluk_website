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
    Icon: Headphones,
    title: "IT Support",
    tag: "On-Site & Remote",
    description:
      "Fast, reliable IT support for businesses and individuals. Whether it's a crashed system, a network problem or a slow PC — we fix it remotely or come to you.",
    details: [
      "Remote desktop support — same-day response",
      "On-site visits for hardware and network issues",
      "Virus, malware and ransomware removal",
      "System setup, configuration and optimisation",
      "Monthly and annual support contracts available",
      "Support for Windows, Mac and Linux",
    ],
    cta: null,
  },
  {
    n: "02",
    Icon: Globe,
    title: "Web Development",
    tag: "Modern & Responsive",
    description:
      "We build fast, professional websites that look great on every device. From simple business sites to full e-commerce platforms — designed to convert visitors into customers.",
    details: [
      "Custom design — no templates, built for your brand",
      "React, Next.js and WordPress development",
      "Mobile-first, fully responsive layouts",
      "SEO-optimised for Google visibility",
      "E-commerce, booking and contact form integration",
      "Hosting setup and ongoing maintenance",
    ],
    cta: { label: "View Portfolio", route: "/portfolio" },
  },
  {
    n: "03",
    Icon: Code,
    title: "Software Development",
    tag: "Custom Solutions",
    description:
      "Bespoke software built around your exact business processes. We turn complex workflows into clean, reliable applications — web-based, desktop or integrated with your existing systems.",
    details: [
      "Web applications and internal dashboards",
      "Business process automation tools",
      "REST API design, development and integration",
      "Database architecture and management",
      "Third-party system integrations (CRM, ERP, POS)",
      "Ongoing maintenance, updates and support",
    ],
    cta: { label: "View Portfolio", route: "/portfolio" },
  },
  {
    n: "04",
    Icon: GraduationCap,
    title: "Computer Academy",
    tag: "Training Programs",
    description:
      "Practical IT training for beginners and professionals. Four hands-on courses taught in-person in Cape Town or online — with a certificate on completion.",
    details: [
      "Introduction to Computers — R199",
      "Microsoft Office Suite — R249",
      "PC Repairs & Maintenance — R299",
      "Web Development Fundamentals — R349",
      "Online (live sessions) and in-person delivery",
      "Certificate issued on successful completion",
    ],
    cta: { label: "View Courses", route: "/academy" },
  },
  {
    n: "05",
    Icon: Settings,
    title: "IT Installations",
    tag: "Setup & Deployment",
    description:
      "Professional IT infrastructure setup for homes and businesses. From network cabling to full office deployments — we install it right the first time.",
    details: [
      "Network cabling, Wi-Fi and router configuration",
      "Server and workstation installation",
      "CCTV and access control system setup",
      "Printer, scanner and peripheral deployment",
      "Full office IT infrastructure rollouts",
      "Post-installation support and handover",
    ],
    cta: null,
  },
  {
    n: "06",
    Icon: Printer,
    title: "Quick Office & Digital Services",
    tag: "Walk-in Services",
    description:
      "Fast walk-in digital services at our Kensington office. Printing, scanning, document help and more — no appointment needed.",
    details: [
      "Black & white and colour printing",
      "Scanning, photocopying and laminating",
      "Document binding and finishing",
      "CV typing and document formatting",
      "Email setup and digital form assistance",
      "Flash drive and file transfer services",
    ],
    cta: null,
  },
];

export default function ServicesSection() {
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
              What we offer.
            </h2>
          </div>
          <div className="lg:col-span-2 lg:pt-14">
            <p className="text-xl text-muted-foreground leading-relaxed">
              End-to-end IT services for individuals, small businesses and enterprises across South Africa. Click any service to see what's included.
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
