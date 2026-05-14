import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Globe, ArrowUpRight, Loader2, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import capeTownImg from "@/assets/cpt.webp";

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

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  data.name,
          from_email: data.email,
          subject:    data.subject,
          message:    data.message,
          to_email:   "info@camluk.co.za",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      toast.success("Message sent! We'll get back to you soon.");
      reset();
    } catch {
      toast.error("Failed to send. Please email us directly at support@camluk.co.za");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          className="relative overflow-hidden mb-12 border border-border/30"
        >
          <img
            src={capeTownImg}
            alt="Cape Town South Africa"
            className="w-full h-56 sm:h-72 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-xs font-mono text-primary uppercase tracking-widest">📍 Cape Town, South Africa</p>
          </div>
        </motion.div>

        {/* Contact info + form */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — contact info cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-2 gap-6 content-start"
          >
            {contactItems.map(({ Icon, label, value, href }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {href ? (
                  <a
                    href={href}
                    aria-label={`Contact via ${label}`}
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
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-sm font-medium text-foreground whitespace-pre-line">{value}</p>
                  </a>
                ) : (
                  <div className="h-full p-6 border-l-2 border-border/40">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-sm font-medium text-foreground whitespace-pre-line">{value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right — contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    placeholder="John Smith"
                    className="w-full bg-secondary/50 border border-border/60 focus:border-primary/60 text-foreground placeholder:text-muted-foreground/50 text-sm px-4 py-3 outline-none transition-colors"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="you@company.com"
                    className="w-full bg-secondary/50 border border-border/60 focus:border-primary/60 text-foreground placeholder:text-muted-foreground/50 text-sm px-4 py-3 outline-none transition-colors"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  {...register("subject")}
                  placeholder="I need a website for my business"
                  className="w-full bg-secondary/50 border border-border/60 focus:border-primary/60 text-foreground placeholder:text-muted-foreground/50 text-sm px-4 py-3 outline-none transition-colors"
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  rows={6}
                  placeholder="Tell us about your project or how we can help..."
                  className="w-full bg-secondary/50 border border-border/60 focus:border-primary/60 text-foreground placeholder:text-muted-foreground/50 text-sm px-4 py-3 outline-none transition-colors resize-none"
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold text-sm px-8 py-4 hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
