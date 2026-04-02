import React from "react";
import { motion } from "framer-motion";
import { MessageSquare, Rocket, HeartHandshake } from "lucide-react";

const steps = [
  {
    Icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description: "We assess your business needs and develop a tailored strategy.",
  },
  {
    Icon: Rocket,
    step: "02",
    title: "Implementation",
    description: "We design, develop, and deploy solutions with precision.",
  },
  {
    Icon: HeartHandshake,
    step: "03",
    title: "Support",
    description: "We provide ongoing support, maintenance, and system monitoring.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-medium text-primary tracking-wider uppercase mb-4">
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Our Process
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-base sm:text-lg">
            A streamlined approach to delivering exceptional results.
          </p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-8">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30" />

          {steps.map(({ Icon, step, title, description }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative text-center"
            >
              {/* Step number */}
              <div className="relative mx-auto mb-6">
                <div className="w-20 h-20 mx-auto border border-border/60 flex items-center justify-center relative z-10">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <span className="absolute -top-3 -right-3 w-8 h-8 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center text-xs font-mono font-bold text-primary z-20">
                  {step}
                </span>
              </div>

              <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}