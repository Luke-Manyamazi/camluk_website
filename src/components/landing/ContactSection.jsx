import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Globe, ArrowUpRight, Loader2, Send, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const CONTACT_IMAGE = "https://images.unsplash.com/photo-1783061044343-69dc0c78ad87?auto=format&fit=crop&fm=jpg&q=75&w=2000";
const WHATSAPP_NUMBER = "263718604286";

const contactItems = [
  { Icon: MapPin, label: "Zimbabwe", value: "Serving businesses across Zimbabwe", href: null },
  { Icon: MapPin, label: "South Africa", value: "Serving businesses across South Africa", href: null },
  { Icon: Mail, label: "Email", value: "support@camluk.co.za", href: "mailto:support@camluk.co.za" },
  { Icon: Globe, label: "Website", value: "www.camluk.co.za", href: "https://www.camluk.co.za" },
];

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters"),
  email: z.string().trim().email("Please enter a valid email address"),
  subject: z.string().trim().min(3, "Subject is required"),
  message: z.string().trim().min(20, "Message must be at least 20 characters"),
});

const fadeUp = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-40px" }, transition: { duration: 0.5, ease: "easeOut", delay } });
const inputCls = "w-full bg-card/40 border border-border/60 focus:border-primary/60 text-foreground placeholder:text-muted-foreground/40 text-sm px-4 py-3 outline-none transition-colors";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(schema), defaultValues: { name: "", email: "", subject: "", message: "" } });

  const openWhatsApp = (data) => {
    const message = data ? `Hello Camluk, I'm ${data.name}.\n\nService: ${data.subject}\nEmail: ${data.email}\n\n${data.message}` : "Hello, I'm interested in Camluk Technologies services. I'd like to discuss a project.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const onSubmit = async (data) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) { toast.error("Online email is temporarily unavailable. Please use WhatsApp or email us directly."); return; }
    setIsSubmitting(true);
    try {
      await emailjs.send(serviceId, templateId, { from_name: data.name, from_email: data.email, subject: data.subject, message: data.message }, publicKey);
      toast.success("Message sent! We'll get back to you soon.");
      reset();
    } catch { toast.error("Email could not be sent. Please use WhatsApp or email us directly."); }
    finally { setIsSubmitting(false); }
  };

  return (
    <section id="contact" className="relative border-t border-border/60">
      <div className="h-1 w-24 bg-primary ml-6 lg:ml-10" />
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 sm:py-20 lg:py-24">
        <motion.div {...fadeUp(0)} className="grid lg:grid-cols-3 gap-8 mb-10 lg:mb-12">
          <div><span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Start a Project</span><h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">Tell us what needs fixing.</h2></div>
          <div className="lg:col-span-2 lg:pt-10"><p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">Have a business problem, a manual process, or a system that is holding your team back? Tell us what is happening. We will help you work out the right solution.</p></div>
        </motion.div>

        <motion.div {...fadeUp(0.05)} className="relative overflow-hidden border border-border/40 mb-12 min-h-[300px] sm:min-h-[340px] lg:min-h-[380px] shadow-2xl">
          <img src={CONTACT_IMAGE} alt="Business colleagues discussing a project and planning a solution" className="absolute inset-0 w-full h-full object-cover object-[58%_48%]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/15" />
          <div className="absolute inset-0 flex items-center">
            <div className="px-7 sm:px-10 lg:px-14 max-w-2xl">
              <p className="text-xs font-mono text-primary uppercase tracking-widest mb-4">Let's build something useful</p>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter text-foreground leading-[1.05]">Bring the problem.<br /><span className="text-primary">We'll work out the system.</span></p>
              <p className="mt-5 text-sm sm:text-base text-muted-foreground max-w-lg leading-relaxed">Business software, WhatsApp Commerce, automation, websites, cloud, or dependable IT support — start with a conversation.</p>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 bg-primary px-5 py-3"><p className="text-xs font-mono font-semibold text-primary-foreground uppercase tracking-widest">Zimbabwe • South Africa • Remote</p></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div {...fadeUp(0.05)}>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">Talk to Camluk</p>
            <div className="divide-y divide-border/40 border-t border-border/40">
              {contactItems.map(({ Icon, label, value, href }) => {
                const inner = <><div className="w-9 h-9 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 transition-colors"><Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" /></div><div className="flex-1 min-w-0"><p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-0.5">{label}</p><p className="text-sm font-medium text-foreground whitespace-pre-line">{value}</p></div>{href && <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />}</>;
                return href ? <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="group flex items-center gap-4 py-5 hover:bg-card/20 -mx-2 px-2 transition-colors">{inner}</a> : <div key={label} className="group flex items-center gap-4 py-5">{inner}</div>;
              })}
            </div>
            <div className="mt-8 rounded-none border border-border/60 bg-card/20 p-5">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">One team. One contact point.</p>
              <p className="text-sm text-foreground leading-relaxed">Camluk serves Zimbabwe, South Africa, the wider Southern African market, and remote clients through one shared contact channel.</p>
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.1)}>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">Request a Quote</p>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div><label htmlFor="contact-name" className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Your Name</label><input id="contact-name" {...register("name")} autoComplete="name" placeholder="Your name" className={inputCls} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} />{errors.name && <p id="contact-name-error" role="alert" className="mt-1 text-xs text-destructive">{errors.name.message}</p>}</div>
                <div><label htmlFor="contact-email" className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Email Address</label><input id="contact-email" {...register("email")} type="email" autoComplete="email" placeholder="you@company.com" className={inputCls} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "contact-email-error" : undefined} />{errors.email && <p id="contact-email-error" role="alert" className="mt-1 text-xs text-destructive">{errors.email.message}</p>}</div>
              </div>
              <div><label htmlFor="contact-subject" className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">What do you need?</label><input id="contact-subject" {...register("subject")} placeholder="Business software, WhatsApp Commerce, website, automation..." className={inputCls} aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? "contact-subject-error" : undefined} />{errors.subject && <p id="contact-subject-error" role="alert" className="mt-1 text-xs text-destructive">{errors.subject.message}</p>}</div>
              <div><label htmlFor="contact-message" className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Tell us about it</label><textarea id="contact-message" {...register("message")} rows={6} placeholder="What is the problem, and what would a better solution look like?" className={`${inputCls} resize-none`} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} />{errors.message && <p id="contact-message-error" role="alert" className="mt-1 text-xs text-destructive">{errors.message.message}</p>}</div>
              <button type="submit" disabled={isSubmitting} className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-sm px-8 py-4 hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-all" aria-busy={isSubmitting}>{isSubmitting ? <><Loader2 className="w-4 h-4 animate-spin" />Sending…</> : <><Send className="w-4 h-4" />Request a Quote</>}</button>
              <button type="button" onClick={() => openWhatsApp()} className="w-full inline-flex items-center justify-center gap-2 border border-border/60 text-foreground font-semibold text-sm px-8 py-3 hover:border-primary/50 hover:text-primary transition-colors"><MessageCircle className="w-4 h-4" />Chat with Camluk</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
