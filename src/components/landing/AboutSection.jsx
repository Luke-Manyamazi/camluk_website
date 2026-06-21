import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Users } from "lucide-react";
import teamImg from "@/assets/team.webp";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const cards = [
  {
    Icon: Target,
    title: "Our Mission",
    body: "To drive digital transformation by delivering tailored IT solutions that enhance business growth, efficiency, and innovation.",
  },
  {
    Icon: Eye,
    title: "Our Vision",
    body: "To become a leading technology partner across South Africa and Africa, empowering businesses with cutting-edge digital solutions.",
  },
  {
    Icon: Lightbulb,
    title: "What We Do",
    body: "A one-stop shop for all IT and digital needs — IT support, software development, computer training and walk-in digital services.",
  },
  {
    Icon: Users,
    title: "Our Approach",
    body: "Customer-focused and solution-driven. Every service is tailored to meet the unique needs of our clients, ensuring maximum long-term value.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border/60">
      <div className="h-1 w-24 bg-primary ml-6 lg:ml-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* Left — image */}
          <motion.div {...fadeUp(0)} className="relative">
            <div className="relative overflow-hidden border border-border/40">
              <img
                src={teamImg}
                alt="Camluk Technologies team"
                className="w-full h-72 sm:h-96 lg:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            {/* caption tag */}
            <div className="absolute bottom-0 left-0 bg-primary px-5 py-3">
              <p className="text-xs font-mono font-semibold text-primary-foreground uppercase tracking-widest">
                Cape Town, South Africa
              </p>
            </div>
          </motion.div>

          {/* Right — content */}
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">About Us</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight mb-6">
                Who we are.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Camluk Technologies is a Cape Town-based IT company delivering end-to-end digital solutions — from on-site support and custom software to AI products and hands-on tech training.
              </p>
            </motion.div>

            {/* Mission/Vision rows */}
            <div className="divide-y divide-border/40 border-t border-border/40">
              {cards.map(({ Icon, title, body }, i) => (
                <motion.div
                  key={title}
                  {...fadeUp(i * 0.07)}
                  className="group flex gap-5 py-6 hover:bg-card/20 -mx-2 px-2 transition-colors"
                >
                  <div className="w-9 h-9 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-1">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
