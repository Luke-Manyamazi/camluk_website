import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Users, ArrowUpRight } from "lucide-react";

const ABOUT_IMAGE = "https://images.pexels.com/photos/12911253/pexels-photo-12911253.jpeg?auto=compress&cs=tinysrgb&w=2000";

const fadeUp = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-40px" }, transition: { duration: 0.5, ease: "easeOut", delay } });

const cards = [
  { Icon: Target, title: "Our Mission", body: "To make useful technology accessible to businesses by turning manual processes, operational bottlenecks, and disconnected tools into simple working systems." },
  { Icon: Eye, title: "Our Vision", body: "To become a trusted technology partner across Southern Africa and for remote clients, helping growing businesses operate with better systems." },
  { Icon: Lightbulb, title: "What We Do", body: "IT support, business software, websites, WhatsApp Commerce, AI, automation, cloud deployment, and practical digital consulting." },
  { Icon: Users, title: "Our Approach", body: "We start with the business problem, recommend the simplest useful solution, deliver it, and stay available to support what we build." },
];

export default function AboutSection({ onNavigate, nextSection }) {
  return (
    <section id="about" className="relative border-t border-border/60">
      <div className="h-1 w-24 bg-primary ml-6 lg:ml-10" />
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <motion.div {...fadeUp(0)} className="relative order-2 lg:order-1 lg:-translate-y-2">
            <div className="relative overflow-hidden border border-border/40 bg-card/20 shadow-2xl aspect-[4/3] lg:aspect-[5/6]">
              <img src={ABOUT_IMAGE} alt="African businesswoman working on a laptop in a modern office" className="w-full h-full object-cover object-[48%_42%]" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/10 to-transparent" />
              <div className="absolute top-5 left-5 px-3 py-1.5 border border-primary/40 bg-background/75 backdrop-blur-sm">
                <p className="text-[10px] font-mono font-semibold text-primary uppercase tracking-[0.2em]">Business-first technology</p>
              </div>
              <div className="absolute bottom-5 right-5 max-w-[210px] border border-white/15 bg-background/75 backdrop-blur-md px-4 py-3">
                <p className="text-sm font-semibold text-foreground leading-snug">Technology that helps your team get more done.</p>
              </div>
            </div>
            <div className="absolute -bottom-3 left-5 sm:left-8 bg-primary px-5 py-3 shadow-xl">
              <p className="text-xs font-mono font-semibold text-primary-foreground uppercase tracking-widest">Southern Africa • Remote</p>
            </div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div {...fadeUp(0)}>
              <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">About Camluk</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight mb-6">Technology should make business easier.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">Camluk Technologies helps businesses replace manual work and disconnected tools with practical digital systems. From reliable IT support to custom software, WhatsApp Commerce, automation, and cloud deployment, we focus on solutions that improve the way your business actually operates.</p>
              {nextSection && (
                <button type="button" onClick={() => onNavigate?.(nextSection)} className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-primary transition-colors mb-8">
                  See who we serve <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
            </motion.div>
            <div className="divide-y divide-border/40 border-t border-border/40">
              {cards.map(({ Icon, title, body }, i) => <motion.div key={title} {...fadeUp(i * 0.07)} className="group flex gap-5 py-5 hover:bg-card/20 -mx-2 px-2 transition-colors"><div className="w-9 h-9 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 mt-0.5 transition-colors"><Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" /></div><div><h3 className="text-sm font-bold text-foreground mb-1">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{body}</p></div></motion.div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
