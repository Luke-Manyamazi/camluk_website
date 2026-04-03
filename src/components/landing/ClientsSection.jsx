import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Rocket,
  Building,
  Building2,
  ShoppingBag,
  HeartPulse,
  BookOpen,
  Landmark,
  Truck,
  Factory,
} from "lucide-react";
import clientImg from "@/assets/client.webp";

const clientTypes = [
  { Icon: User, label: "Individuals" },
  { Icon: Rocket, label: "Startups" },
  { Icon: Building, label: "SMBs" },
  { Icon: Building2, label: "Enterprises" },
];

const industries = [
  { Icon: ShoppingBag, label: "Retail" },
  { Icon: HeartPulse, label: "Healthcare" },
  { Icon: BookOpen, label: "Education" },
  { Icon: Landmark, label: "Finance" },
  { Icon: Truck, label: "Logistics" },
  { Icon: Factory, label: "Manufacturing" },
];

export default function ClientsSection() {
  return (
    <section className="relative py-24 lg:py-32">
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
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-xs font-mono font-medium text-accent tracking-wider uppercase mb-4">
            Our Clients
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Who We Serve
          </h2>
        </motion.div>

        {/* Client Types */}
        {/* Network globe image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden mb-12 border border-border/30"
        >
          <img
            src={clientImg}
            alt="Global network"
            className="w-full h-48 sm:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/80" />
          <motion.div className="absolute inset-0 overflow-hidden flex items-center">
            <motion.div
              className="flex whitespace-nowrap"
              animate={{ x: ["100%", "-50%"] }}
              transition={{
                duration: 10,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {/* Content duplicated */}
              <p className="text-lg sm:text-4xl font-bold px-8">
                Serving businesses{" "}
                <span className="text-primary">across South Africa</span> and
                beyond.
              </p>
              
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {clientTypes.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group p-6 border border-border/40 hover:border-primary/40 text-center transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-sm font-medium text-foreground">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-lg font-semibold text-foreground">
            Industries We Serve
          </h3>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {industries.map(({ Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group p-4 border border-border/40 hover:border-primary/40 text-center transition-all duration-300"
            >
              <Icon className="w-5 h-5 mx-auto mb-2 text-muted-foreground group-hover:text-primary transition-colors" />
              <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
