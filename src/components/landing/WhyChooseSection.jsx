import React from "react";
import { motion } from "framer-motion";
import { Heart, Target, UserCheck, Cpu, Layers, Handshake, Check, ArrowRight, Globe2 } from "lucide-react";

const fadeUp = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-40px" }, transition: { duration: 0.5, ease: "easeOut", delay } });

const reasons = [
  { Icon: Target, label: "Business-first thinking — we start with the problem, not the technology." },
  { Icon: Cpu, label: "Practical technology — useful systems without unnecessary complexity." },
  { Icon: Layers, label: "One technology partner — software, automation, web, cloud, and IT support." },
  { Icon: Globe2, label: "Southern Africa + remote — built for businesses beyond one location." },
  { Icon: Handshake, label: "Long-term support — we can keep improving what we build with you." },
];

const values = [
  { Icon: Heart, title: "Customer First", body: "We measure the solution by whether it makes the customer's work clearer, faster, or easier." },
  { Icon: Target, title: "Simple Where Possible", body: "We choose the simplest useful approach before adding more tools, features, or complexity." },
  { Icon: UserCheck, title: "Practical Expertise", body: "Our work combines real IT operations experience with modern software and cloud development." },
  { Icon: Handshake, title: "Built to Grow", body: "We aim for solutions that can start small and expand as the business gains confidence and demand." },
];

export default function WhyChooseSection({ onNavigate }) {
  return (
    <>
      <section className="relative border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <motion.div {...fadeUp(0)}>
              <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Why Camluk</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">Technology that earns its place in your business.</h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-xl">You do not need more technology for the sake of it. You need the right system to solve the work that is costing you time, visibility, or opportunities.</p>
              <div className="mt-8 flex flex-wrap gap-4"><button onClick={() => onNavigate?.("contact")} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3.5 hover:bg-primary/90 transition-all">Talk to Camluk<ArrowRight className="w-4 h-4" /></button><button onClick={() => onNavigate?.("services")} className="inline-flex items-center gap-2 border border-border/60 text-foreground font-semibold px-6 py-3.5 hover:border-primary/50 hover:text-primary transition-colors">Explore Services</button></div>
            </motion.div>

            <div className="divide-y divide-border/40 border-t border-border/40">
              {reasons.map(({ Icon, label }, i) => <motion.div key={label} {...fadeUp(i * 0.06)} className="group flex items-center gap-4 py-5 hover:bg-card/20 -mx-2 px-2 transition-colors"><div className="w-9 h-9 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 transition-colors"><Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" /></div><span className="text-base font-semibold text-foreground leading-relaxed">{label}</span><div className="ml-auto w-5 h-5 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shrink-0"><Check className="w-3 h-3 text-primary" /></div></motion.div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-border/60 bg-card/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <motion.div {...fadeUp(0)} className="mb-14"><span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Our Values</span><h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">How we work with clients.</h2></motion.div>
          <div className="grid sm:grid-cols-2 gap-px bg-border/40 border border-border/40">
            {values.map(({ Icon, title, body }, i) => <motion.div key={title} {...fadeUp(i * 0.07)} className="group bg-background hover:bg-card/30 p-8 lg:p-10 transition-colors"><div className="w-10 h-10 border border-border/60 group-hover:border-primary/40 flex items-center justify-center mb-6 transition-colors"><Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" /></div><h3 className="text-xl font-black text-foreground mb-3">{title}</h3><p className="text-sm text-muted-foreground leading-relaxed">{body}</p></motion.div>)}
          </div>
        </div>
      </section>
    </>
  );
}
