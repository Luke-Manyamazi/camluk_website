import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Map, Rocket, HeartHandshake, ArrowRight } from "lucide-react";

const steps = [
  { n: "01", Icon: MessageSquare, title: "Tell us the problem", body: "We start with your business, current process, pain points, and what you want to improve." },
  { n: "02", Icon: Map, title: "Map the right solution", body: "We simplify the workflow and recommend the technology that fits the job — without overbuilding." },
  { n: "03", Icon: Rocket, title: "Build & launch", body: "We design, develop, configure, test, and deploy a practical system your team can actually use." },
  { n: "04", Icon: HeartHandshake, title: "Support & improve", body: "After launch, we stay available for fixes, improvements, maintenance, and the next stage of growth." },
];

const fadeUp = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-40px" }, transition: { duration: 0.5, ease: "easeOut", delay } });

export default function ProcessSection({ onNavigate }) {
  return (
    <section id="process" className="relative border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <motion.div {...fadeUp(0)} className="grid lg:grid-cols-3 gap-8 mb-14">
          <div><span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">How We Work</span><h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">From business problem to working technology.</h2></div>
          <div className="lg:col-span-2 lg:pt-14"><p className="text-xl text-muted-foreground leading-relaxed">No unnecessary complexity. We understand the work first, build around it, and keep the solution useful after launch.</p></div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 border border-border/40">
          {steps.map(({ n, Icon, title, body }, i) => <motion.div key={n} {...fadeUp(i * 0.07)} className="group bg-background p-7 lg:p-8 hover:bg-card/30 transition-colors"><div className="flex items-start justify-between mb-7"><span className="text-5xl font-black font-mono text-primary/15 leading-none group-hover:text-primary/25 transition-colors">{n}</span><div className="w-10 h-10 border border-border/60 group-hover:border-primary/40 flex items-center justify-center transition-colors"><Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" /></div></div><h3 className="text-lg font-black text-foreground mb-3">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{body}</p></motion.div>)}
        </div>

        <motion.div {...fadeUp(0.2)} className="mt-10 flex flex-wrap items-center gap-4">
          <button onClick={() => onNavigate?.("contact")} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3.5 hover:bg-primary/90 transition-all">Start a Project<ArrowRight className="w-4 h-4" /></button>
          <button onClick={() => onNavigate?.("services")} className="inline-flex items-center gap-2 border border-border/60 text-foreground font-semibold px-6 py-3.5 hover:border-primary/50 hover:text-primary transition-colors">See Our Services</button>
        </motion.div>
      </div>
    </section>
  );
}
