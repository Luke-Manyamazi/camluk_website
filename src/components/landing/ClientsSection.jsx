import React from "react";
import { motion } from "framer-motion";
import { Rocket, Building, Building2, ShoppingBag, HeartPulse, BookOpen, Landmark, Truck, Factory, Utensils, Beef, Scissors, Wheat } from "lucide-react";

const clientTypes = [
  { Icon: Rocket, label: "Startups" },
  { Icon: Building, label: "Small Business" },
  { Icon: Building2, label: "Growing Companies" },
];

const industries = [
  { Icon: ShoppingBag, label: "Retail & Shops" },
  { Icon: Utensils, label: "Restaurants" },
  { Icon: Beef, label: "Butcheries" },
  { Icon: BookOpen, label: "Schools" },
  { Icon: Scissors, label: "Salons & Services" },
  { Icon: Wheat, label: "Farms & Agriculture" },
  { Icon: HeartPulse, label: "Healthcare" },
  { Icon: Landmark, label: "Professional Services" },
  { Icon: Truck, label: "Logistics" },
  { Icon: Factory, label: "Manufacturing" },
];

const fadeUp = (delay = 0) => ({ initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.4, delay } });

export default function ClientsSection() {
  return (
    <section id="clients" className="relative border-t border-border/60 bg-card/10">
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
        <motion.div {...fadeUp(0)} className="grid lg:grid-cols-3 gap-8 mb-14">
          <div><span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Who We Serve</span><h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">Built for businesses that want to work smarter.</h2></div>
          <div className="lg:col-span-2 lg:pt-14"><p className="text-xl text-muted-foreground leading-relaxed">We work with entrepreneurs, small businesses, and growing teams across Southern Africa and remotely. If your business still relies heavily on paper, spreadsheets, or scattered WhatsApp conversations, we can help turn that work into a system.</p></div>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-border/40 border border-border/40 mb-10">
          {clientTypes.map(({ Icon, label }, i) => <motion.div key={label} {...fadeUp(i * 0.06)} className="group bg-background hover:bg-card/40 px-8 py-8 flex flex-col items-center gap-3 transition-colors"><div className="w-10 h-10 border border-border/60 group-hover:border-primary/40 flex items-center justify-center transition-colors"><Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" /></div><span className="text-sm font-semibold text-foreground">{label}</span></motion.div>)}
        </div>
        <motion.div {...fadeUp(0.1)} className="mb-5"><p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Industries We Understand</p></motion.div>
        <div className="flex flex-wrap gap-2">{industries.map(({ Icon, label }, i) => <motion.div key={label} {...fadeUp(i * 0.04)} className="group inline-flex items-center gap-2 px-4 py-2.5 border border-border/60 hover:border-primary/40 hover:bg-primary/5 transition-all"><Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" /><span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors font-medium">{label}</span></motion.div>)}</div>
      </div>
    </section>
  );
}
