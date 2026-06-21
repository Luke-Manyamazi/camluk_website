import React from "react";
import { motion } from "framer-motion";
import { Heart, TrendingUp, UserCheck, Cpu, Layers, Sparkles, ShieldCheck, Handshake, Check } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const reasons = [
  { Icon: Heart,      label: "Customer-Centric Approach" },
  { Icon: TrendingUp, label: "Scalable & Reliable Solutions" },
  { Icon: UserCheck,  label: "Experienced IT Professionals" },
  { Icon: Cpu,        label: "Innovative Technology" },
  { Icon: Layers,     label: "End-to-End Digital Services" },
];

const values = [
  { Icon: Sparkles,   title: "Innovation & Excellence", body: "We deliver cutting-edge solutions that keep your business ahead of the curve." },
  { Icon: Heart,      title: "Customer First",          body: "Your success is our priority — every decision we make is guided by your goals." },
  { Icon: ShieldCheck,title: "Integrity & Reliability", body: "We operate with transparency and professionalism in everything we do." },
  { Icon: Handshake,  title: "Collaboration & Growth",  body: "We believe in teamwork, continuous learning, and growing alongside our clients." },
];

export default function WhyChooseSection() {
  return (
    <>
      {/* ─── Why Choose Us ─── */}
      <section className="relative border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">

            {/* Left */}
            <motion.div {...fadeUp(0)}>
              <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Why Choose Us</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
                The Camluk<br />Advantage.
              </h2>
            </motion.div>

            {/* Right — reasons list */}
            <div className="divide-y divide-border/40 border-t border-border/40">
              {reasons.map(({ Icon, label }, i) => (
                <motion.div
                  key={label}
                  {...fadeUp(i * 0.06)}
                  className="group flex items-center gap-4 py-5 hover:bg-card/20 -mx-2 px-2 transition-colors"
                >
                  <div className="w-8 h-8 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 transition-colors">
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span className="text-base font-semibold text-foreground">{label}</span>
                  <div className="ml-auto w-5 h-5 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Our Values ─── */}
      <section className="relative border-t border-border/60 bg-card/10">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-24">

          <motion.div {...fadeUp(0)} className="mb-14">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Our Values</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
              What drives us.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-px bg-border/40 border border-border/40">
            {values.map(({ Icon, title, body }, i) => (
              <motion.div
                key={title}
                {...fadeUp(i * 0.07)}
                className="group bg-background hover:bg-card/30 p-8 lg:p-10 transition-colors"
              >
                <div className="w-10 h-10 border border-border/60 group-hover:border-primary/40 flex items-center justify-center mb-6 transition-colors">
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-xl font-black text-foreground mb-3">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
