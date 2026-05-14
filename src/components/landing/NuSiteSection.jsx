import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Link, Archive, Zap, Sparkles } from "lucide-react";

const LAUNCH_DATE = new Date("2026-06-01T00:00:00");

function getTimeLeft() {
  const diff = LAUNCH_DATE - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

const inputMethods = [
  {
    Icon: Code2,
    label: "Paste Code",
    description: "Drop in your HTML, CSS, or any existing web code and let NuSite handle the rest.",
  },
  {
    Icon: Link,
    label: "Drop a URL",
    description: "Give us your live site URL and we'll analyse, redesign, and rebuild it from scratch.",
  },
  {
    Icon: Archive,
    label: "Upload a ZIP",
    description: "Upload your existing project folder and get a fully modern rebuild in seconds.",
  },
];

const features = [
  "Static → Responsive",
  "HTML → React",
  "Modernise Design",
  "Add Dark Mode",
  "Performance Fix",
  "Accessibility Audit",
  "Convert to Tailwind",
  "Add CSS Motion",
];

const pad = (n) => String(n).padStart(2, "0");

export default function NuSiteSection() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="ai-solutions" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-xs font-mono font-semibold text-primary tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            New AI Product — Launching June 1, 2026
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center mb-6"
        >
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05]">
            <span className="text-foreground">Your site.</span>
            <br />
            <span className="text-primary">Reimagined.</span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-16 leading-relaxed"
        >
          Paste old code. Drop a URL. Upload a ZIP.{" "}
          <span className="text-foreground font-semibold">NuSite</span> transforms
          any website into something modern, responsive and ready to ship —{" "}
          <span className="text-primary font-medium">in seconds.</span>
        </motion.p>

        {/* Input method cards */}
        <div className="grid md:grid-cols-3 gap-px bg-border/30 border border-border/30 mb-12">
          {inputMethods.map(({ Icon, label, description }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative p-8 bg-background hover:bg-card/60 transition-colors duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{label}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature chips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-20"
        >
          {features.map((feature, i) => (
            <motion.span
              key={feature}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="px-4 py-2 border border-border/50 hover:border-primary/40 text-xs font-mono text-muted-foreground hover:text-primary transition-all duration-300 cursor-default"
            >
              {feature}
            </motion.span>
          ))}
        </motion.div>

        {/* Countdown + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
            Launching in
          </p>

          {/* Timer */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 mb-12">
            {[
              { value: timeLeft.days,    label: "Days"  },
              { value: timeLeft.hours,   label: "Hours" },
              { value: timeLeft.minutes, label: "Min"   },
              { value: timeLeft.seconds, label: "Sec"   },
            ].map(({ value, label }, i) => (
              <React.Fragment key={label}>
                {i > 0 && (
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-primary/30 mb-5 select-none">
                    :
                  </span>
                )}
                <div className="flex flex-col items-center min-w-[64px] sm:min-w-[80px]">
                  <div className="text-4xl sm:text-6xl font-bold font-mono text-foreground tabular-nums leading-none mb-1">
                    {pad(value)}
                  </div>
                  <div className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                    {label}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://nusitereimagined.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-10 py-4 hover:bg-primary/90 transition-colors"
          >
            <Zap className="w-4 h-4" />
            Join the Waitlist
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="mt-4 text-xs text-muted-foreground font-mono">
            Free tier available. Plans from $10/month. Launching June 1, 2026.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
