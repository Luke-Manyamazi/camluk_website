import React from "react";
import { motion } from "framer-motion";
import { Heart, TrendingUp, UserCheck, Cpu, Layers, Sparkles, ShieldCheck, Handshake } from "lucide-react";

const reasons = [
  { Icon: Heart, label: "Customer-Centric Approach" },
  { Icon: TrendingUp, label: "Scalable & Reliable Solutions" },
  { Icon: UserCheck, label: "Experienced IT Professionals" },
  { Icon: Cpu, label: "Innovative Technology" },
  { Icon: Layers, label: "End-to-End Digital Services" },
];

const values = [
  {
    Icon: Sparkles,
    title: "Innovation & Excellence",
    text: "We deliver cutting-edge solutions",
  },
  {
    Icon: Heart,
    title: "Customer First",
    text: "Your success is our priority",
  },
  {
    Icon: ShieldCheck,
    title: "Integrity & Reliability",
    text: "We operate with transparency and professionalism",
  },
  {
    Icon: Handshake,
    title: "Collaboration & Growth",
    text: "We believe in teamwork and continuous learning",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-medium text-primary tracking-wider uppercase mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            The Camluk Advantage
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {reasons.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-2.5 px-5 py-3 border border-border/40 hover:border-primary/40 transition-all duration-300"
            >
              <Icon className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">{label}</span>
            </motion.div>
          ))}
        </div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono font-medium text-accent tracking-wider uppercase mb-4">
            Our Values
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What Drives Us
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-6 border-l-2 border-border/40 hover:border-accent/60 transition-all duration-500 text-center"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}