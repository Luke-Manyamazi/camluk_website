import { motion } from "framer-motion";

const testimonials = [
  {
    initials: "SM",
    name:     "Sipho Mokoena",
    title:    "Owner, Kasi Retail Co.",
    quote:    "Camluk transformed our online presence completely. Within 3 months of launching the new website, our site traffic doubled and online orders increased by 40%.",
  },
  {
    initials: "TN",
    name:     "Dr. Thandiwe Nkosi",
    title:    "Practice Manager, City Health Clinic",
    quote:    "The IT support team is incredibly responsive. Since partnering with Camluk, we've had zero downtime on our critical systems, which is vital for a healthcare facility.",
  },
  {
    initials: "LP",
    name:     "Luca Pietersen",
    title:    "Junior Developer, TechStart Cape Town",
    quote:    "The Computer Academy gave me the foundation I needed. Three months after completing the Web Development course, I landed my first developer role.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative border-t border-border/60">
      <div className="h-1 w-24 bg-primary ml-6 lg:ml-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-3 gap-8 mb-14"
        >
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Testimonials</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
              What clients say.
            </h2>
          </div>
          <div className="lg:col-span-2 lg:pt-14">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real results from real businesses across South Africa.
            </p>
          </div>
        </motion.div>

        <div className="divide-y divide-border/40 border-t border-border/40">
          {testimonials.map(({ initials, name, title, quote }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group grid lg:grid-cols-[200px_1fr] gap-6 lg:gap-12 py-8 hover:bg-card/20 -mx-2 px-2 transition-colors items-start"
            >
              {/* Identity */}
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-2">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="text-xs font-black font-mono text-primary">{initials}</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground leading-tight">{name}</p>
                  <p className="text-xs font-mono text-muted-foreground leading-tight">{title}</p>
                </div>
              </div>

              {/* Quote */}
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed italic group-hover:text-foreground transition-colors">
                "{quote}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
