import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    n: "01",
    Icon: MessageSquare,
    title: "Consultation",
    body: "We assess your business needs and develop a tailored strategy for your goals.",
  },
  {
    n: "02",
    Icon: Rocket,
    title: "Implementation",
    body: "We design, develop, and deploy solutions with precision and speed.",
  },
  {
    n: "03",
    Icon: HeartHandshake,
    title: "Ongoing Support",
    body: "We provide continuous support, maintenance, and system monitoring.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">How We Work</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
            Our process.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/40 border border-border/40">
          {steps.map(({ n, Icon, title, body }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group p-8 lg:p-10 hover:bg-card/30 transition-colors"
            >
              <div className="text-[64px] font-black font-mono text-primary/10 leading-none mb-6 select-none group-hover:text-primary/20 transition-colors">
                {n}
              </div>
              <div className="w-10 h-10 border border-border/60 group-hover:border-primary/40 flex items-center justify-center mb-5 transition-colors">
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-3">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
