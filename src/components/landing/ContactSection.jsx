import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from "lucide-react";

const contactItems = [
  {
    Icon: MapPin,
    label: "Address",
    value: "11th Street, Kensington\nCape Town, South Africa, 7405",
    href: null,
  },
  {
    Icon: Phone,
    label: "Phone",
    value: "+27 62 107 1140",
    href: "tel:+27621071140",
  },
  {
    Icon: Mail,
    label: "Email",
    value: "support@camluk.co.za",
    href: "mailto:support@camluk.co.za",
  },
  {
    Icon: Globe,
    label: "Website",
    value: "www.camluk.co.za",
    href: "https://www.camluk.co.za",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
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
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Let's Build Something Great
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-base sm:text-lg">
            Ready to transform your business? Get in touch with us today.
          </p>
        </motion.div>

        {/* Cape Town image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden mb-10 border border-border/30"
        >
          <img
            src="./src/assets/cpt.png"
            alt="Cape Town South Africa"
            className="w-full h-56 sm:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-xs font-mono text-primary uppercase tracking-widest">📍 Cape Town, South Africa</p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactItems.map(({ Icon, label, value, href }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {href ? (
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block h-full p-6 border-l-2 border-border/40 hover:border-primary/60 transition-all duration-500"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground whitespace-pre-line">
                    {value}
                  </p>
                </a>
              ) : (
                <div className="h-full p-6 border-l-2 border-border/40">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">
                    {label}
                  </p>
                  <p className="text-sm font-medium text-foreground whitespace-pre-line">
                    {value}
                  </p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}