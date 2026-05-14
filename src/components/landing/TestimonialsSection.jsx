import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sipho Mokoena",
    title: "Owner, Kasi Retail Co.",
    quote:
      "Camluk completely transformed our online presence. The team was fast, professional, and delivered exactly what we needed. Our site traffic doubled within a month of going live.",
    initials: "SM",
  },
  {
    name: "Dr. Thandiwe Nkosi",
    title: "Practice Manager, City Health Clinic",
    quote:
      "Their IT support keeps our medical systems running around the clock. Response times are incredible and we've had zero unplanned downtime since partnering with Camluk.",
    initials: "TN",
  },
  {
    name: "Luca Pietersen",
    title: "Junior Developer, TechStart Cape Town",
    quote:
      "I joined the Computer Academy with zero coding experience. Six months later I landed my first developer role. The hands-on curriculum and mentorship made all the difference.",
    initials: "LP",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-medium text-primary tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            What Our Clients Say
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-muted-foreground text-base sm:text-lg">
            Real results from real businesses across South Africa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, title, quote, initials }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group relative p-8 border-l-2 border-border/40 hover:border-primary/50 transition-all duration-500 flex flex-col"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative flex flex-col flex-1">
                <Quote className="w-7 h-7 text-primary/40 mb-5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-8">
                  "{quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs font-bold text-primary">{initials}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{name}</p>
                    <p className="text-xs text-muted-foreground font-mono">{title}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
