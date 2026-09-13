import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Users } from "lucide-react";
import teamImg from "@/assets/team.webp";

const fadeUp = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-40px" }, transition: { duration: 0.5, ease: "easeOut", delay } });

const cards = [
  { Icon: Target, title: "Our Mission", body: "To make useful technology accessible to businesses by turning manual processes, operational bottlenecks, and disconnected tools into simple working systems." },
  { Icon: Eye, title: "Our Vision", body: "To become a trusted technology partner across Southern Africa and for remote clients, helping growing businesses operate with better systems." },
  { Icon: Lightbulb, title: "What We Do", body: "IT support, business software, websites, WhatsApp Commerce, AI, automation, cloud deployment, and practical digital consulting." },
  { Icon: Users, title: "Our Approach", body: "We start with the business problem, recommend the simplest useful solution, deliver it, and stay available to support what we build." },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative border-t border-border/60">
      <div className="h-1 w-24 bg-primary ml-6 lg:ml-10" />
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <motion.div {...fadeUp(0)} className="relative">
            <div className="relative overflow-hidden border border-border/40">
              <img src={teamImg} alt="Camluk Technologies team" className="w-full h-72 sm:h-96 lg:h-[480px] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 bg-primary px-5 py-3"><p className="text-xs font-mono font-semibold text-primary-foreground uppercase tracking-widest">Southern Africa • Remote</p></div>
          </motion.div>
          <div>
            <motion.div {...fadeUp(0)}>
              <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">About Camluk</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight mb-6">Technology should make business easier.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">Camluk Technologies helps businesses replace manual work and disconnected tools with practical digital systems. From reliable IT support to custom software, WhatsApp Commerce, automation, and cloud deployment, we focus on solutions that improve the way your business actually operates.</p>
            </motion.div>
            <div className="divide-y divide-border/40 border-t border-border/40">
              {cards.map(({ Icon, title, body }, i) => (
                <motion.div key={title} {...fadeUp(i * 0.07)} className="group flex gap-5 py-6 hover:bg-card/20 -mx-2 px-2 transition-colors">
                  <div className="w-9 h-9 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 mt-0.5 transition-colors"><Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" /></div>
                  <div><h3 className="text-sm font-bold text-foreground mb-1">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{body}</p></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
