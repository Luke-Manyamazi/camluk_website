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
  { Icon: MapPin, label: "Address", value: "11th Street, Kensington\nCape Town, South Africa, 7405", href: null },
  { Icon: Phone,  label: "Phone",   value: "+27 62 107 1140",    href: "tel:+27621071140" },
  { Icon: Mail,   label: "Email",   value: "support@camluk.co.za", href: "mailto:support@camluk.co.za" },
  { Icon: Globe,  label: "Website", value: "www.camluk.co.za",   href: "https://www.camluk.co.za" },
];

const schema = z.object({
  name:    z.string().min(2, "Name must be at least 2 characters"),
  email:   z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(20, "Message must be at least 20 characters"),
});

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

const inputCls = "w-full bg-card/40 border border-border/60 focus:border-primary/60 text-foreground placeholder:text-muted-foreground/40 text-sm px-4 py-3 outline-none transition-colors";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { from_name: data.name, from_email: data.email, subject: data.subject, message: data.message, to_email: "info@camluk.co.za" },
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
    <section id="contact" className="relative border-t border-border/60">
      <div className="h-1 w-24 bg-primary ml-6 lg:ml-10" />

      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">

        {/* Header */}
        <motion.div {...fadeUp(0)} className="grid lg:grid-cols-3 gap-8 mb-14">
          <div>
            <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Contact Us</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
              Let's build something great.
            </h2>
          </div>
          <div className="lg:col-span-2 lg:pt-14">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your business? Reach out and we'll get back to you within 24 hours.
            </p>
          </div>
        </motion.div>

        {/* Cape Town image */}
        <motion.div {...fadeUp(0.05)} className="relative overflow-hidden border border-border/40 mb-12 h-44 sm:h-60">
          <img src={capeTownImg} alt="Cape Town, South Africa" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
          <div className="absolute bottom-0 left-0 bg-primary px-5 py-3">
            <p className="text-xs font-mono font-semibold text-primary-foreground uppercase tracking-widest">
              📍 Cape Town, South Africa
            </p>
          </div>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left — contact info */}
          <motion.div {...fadeUp(0.05)}>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">Get in Touch</p>
            <div className="divide-y divide-border/40 border-t border-border/40">
              {contactItems.map(({ Icon, label, value, href }, i) => {
                const inner = (
                  <>
                    <div className="w-9 h-9 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 transition-colors">
                      <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-foreground whitespace-pre-line">{value}</p>
                    </div>
                    {href && <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />}
                  </>
                );
                return href ? (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 py-5 hover:bg-card/20 -mx-2 px-2 transition-colors"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={label} className="group flex items-center gap-4 py-5">
                    {inner}
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div {...fadeUp(0.1)}>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">Send a Message</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Your Name</label>
                  <input {...register("name")} placeholder="John Smith" className={inputCls} />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Email Address</label>
                  <input {...register("email")} type="email" placeholder="you@company.com" className={inputCls} />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Subject</label>
                <input {...register("subject")} placeholder="I need a website for my business" className={inputCls} />
                {errors.subject && <p className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Message</label>
                <textarea
                  {...register("message")}
                  rows={6}
                  placeholder="Tell us about your project or how we can help..."
                  className={`${inputCls} resize-none`}
                />
                {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-8 py-4 hover:bg-primary/90 hover:gap-3 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</>
                ) : (
                  <><Send className="w-4 h-4" /> Send Message</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
