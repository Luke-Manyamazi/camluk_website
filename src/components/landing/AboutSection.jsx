import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Lightbulb, Users } from "lucide-react";
import teamImg from "@/assets/team.webp";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6 },
};

const cards = [
  {
    Icon: Target,
    title: "Our Mission",
    text: "To drive digital transformation by delivering tailored IT solutions that enhance business growth, efficiency, and innovation.",
  },
  {
    Icon: Eye,
    title: "Our Vision",
    text: "To become a leading technology partner across South Africa and Africa, empowering businesses with cutting-edge digital solutions.",
  },
  {
    Icon: Lightbulb,
    title: "What We Do",
    text: "We provide a one-stop solution for all IT and digital needs — from IT support and software development to computer training and walk-in digital services.",
  },
  {
    Icon: Users,
    title: "Our Approach",
    text: "We are customer-focused and solution-driven. Every service we offer is tailored to meet the unique needs of our clients, ensuring maximum value and long-term success.",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div {...fadeInUp} className="text-center mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-medium text-primary tracking-wider uppercase mb-4">
            About Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Who We Are
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-base sm:text-lg leading-relaxed">
            Camluk Technologies is a forward-thinking IT solutions company based
            in Cape Town, South Africa. We specialize in delivering innovative,
            reliable, and scalable technology services tailored to businesses
            and individuals.
          </p>
        </motion.div>

        {/* Team image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden mb-12 border border-border/30"
        >
          <img
            src={
              typeof teamImg === "string" ? teamImg : teamImg.default || teamImg
            }
            alt="Camluk Technologies team"
            className="w-full h-64 sm:h-80 lg:h-96 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/60 backdrop-blur-sm border border-border/60">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-mono font-medium text-primary">
                Based in Cape Town, South Africa
              </span>
            </div>
          </div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="group relative h-full p-6 lg:p-8 border-l-2 border-border/40 hover:border-primary/60 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
