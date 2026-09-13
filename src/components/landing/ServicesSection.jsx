import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Code, MessageCircle, Settings, Headphones, ChevronRight, Check, Plus, Minus } from "lucide-react";

const WHATSAPP_NUMBER = "263718604286";
const SERVICE_IMAGE = "https://images.pexels.com/photos/30677714/pexels-photo-30677714.jpeg?auto=compress&cs=tinysrgb&w=2200";

const fadeUp = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-40px" }, transition: { duration: 0.5, ease: "easeOut", delay } });

const services = [
  { n: "01", Icon: Code, title: "Business Software", tag: "Run the business from one system", description: "We build practical business software around the way your team actually works. Manage customers, orders, stock, balances, operations, and reporting in one system instead of relying on paper, spreadsheets, and disconnected WhatsApp messages.", details: ["Customer, sales, order, stock, and reporting systems", "Dashboards for owners and managers", "Workflow tools that reduce manual administration", "Role-based access and business process controls", "Integrations with existing tools and services", "Scalable systems that can grow with your business"], message: "Hello, I want to enquire about custom business software for my business." },
  { n: "02", Icon: Settings, title: "AI, Automation & Cloud", tag: "Remove repetitive work", description: "We combine AI, automation, and cloud technology to remove repetitive work and make digital systems easier to operate. The focus is practical: save time, reduce errors, and give your team better information.", details: ["AI-assisted business workflows and internal tools", "Automated notifications, reports, and repetitive tasks", "Cloud hosting, deployment, and environment setup", "Secure integrations and API-based workflows", "Monitoring, maintenance, and technical improvements", "Practical automation selected around measurable business value"], message: "Hello, I'd like to enquire about AI, automation, or cloud services from Camluk." },
  { n: "03", Icon: MessageCircle, title: "WhatsApp Commerce", tag: "Turn conversations into business workflows", description: "Go beyond chatting with customers. Camluk is building WhatsApp-connected business tools that help businesses manage enquiries, orders, customer conversations, follow-ups, and sales from a more structured workflow.", details: ["Business enquiries and lead capture through WhatsApp", "Structured customer conversations and follow-ups", "Order and sales workflows connected to WhatsApp", "Automation for repetitive customer interactions", "Business dashboards and visibility beyond the chat window", "Designed for businesses already using WhatsApp every day"], message: "Hello, I'd like to enquire about Camluk WhatsApp Commerce." },
  { n: "04", Icon: Globe, title: "Web Development", tag: "Turn your website into a business asset", description: "We design and build fast, professional websites and web applications that help businesses look credible, capture enquiries, and turn online attention into real conversations and sales.", details: ["Business websites and landing pages built around clear goals", "Responsive web applications for modern workflows", "Mobile-first design and strong user experience", "SEO-conscious structure and technical foundations", "Performance-focused builds and reliable deployment", "Ongoing improvements, maintenance, and feature expansion"], message: "Hello, I'd like to enquire about a Camluk website or web application." },
  { n: "05", Icon: Headphones, title: "IT Support & Systems", tag: "Keep your business running", description: "Reliable remote and on-site technical support for businesses that depend on their systems every day. We troubleshoot users, devices, applications, networks, Microsoft 365, backups, security, and business systems so your team can keep working.", details: ["Remote troubleshooting and day-to-day technical support", "Microsoft 365, user accounts, devices, printers, and connectivity", "Business application and systems support", "Backup, security, maintenance, and continuity checks", "Deployment, upgrades, and technical problem resolution", "Project-based IT support without the cost of a full-time specialist"], message: "Hello, I'd like to enquire about Camluk IT Support & Systems." },
];

export default function ServicesSection({ onNavigate }) {
  const [open, setOpen] = useState("01");
  const toggle = (n) => setOpen(prev => prev === n ? null : n);
  const openWhatsApp = (message) => window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");

  return (
    <section id="services" className="relative border-t border-border/60">
      <div className="h-1 w-24 bg-primary ml-6 lg:ml-10" />
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
        <motion.div {...fadeUp(0)} className="grid lg:grid-cols-3 gap-8 mb-14">
          <div><span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">What We Do</span><h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">Technology that solves real business problems.</h2></div>
          <div className="lg:col-span-2 lg:pt-14"><p className="text-xl text-muted-foreground leading-relaxed">From business software and automation to WhatsApp commerce, web development and IT support, we help businesses replace manual processes with practical systems that save time and make work easier.</p></div>
        </motion.div>

        <motion.div {...fadeUp(0.05)} className="relative overflow-hidden border border-border/40 mb-10 h-52 sm:h-64 lg:h-72 shadow-2xl">
          <img src={SERVICE_IMAGE} alt="African business team collaborating in a modern office" className="w-full h-full object-cover object-[62%_center]" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/45 to-background/15" />
          <div className="absolute inset-y-0 left-0 flex items-center px-8 lg:px-12 max-w-xl"><div><p className="text-xs font-mono text-primary uppercase tracking-widest mb-3">Camluk Technologies</p><p className="text-2xl sm:text-3xl font-black tracking-tighter text-foreground leading-tight">Simply Automated.<br />Built for Business.</p></div></div>
        </motion.div>

        <div className="divide-y divide-border/40 border-t border-border/40">
          {services.map(({ n, Icon, title, tag, description, details, message }, i) => (
            <motion.div key={n} {...fadeUp(i * 0.04)}>
              <button onClick={() => toggle(n)} aria-expanded={open === n} className="group w-full grid sm:grid-cols-[60px_1fr_auto] gap-4 sm:gap-8 items-center py-6 hover:bg-card/30 -mx-2 px-2 transition-colors text-left">
                <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">{n}</span>
                <div className="flex items-center gap-3"><div className="w-9 h-9 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 transition-colors"><Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" /></div><div><h3 className="text-lg font-bold text-foreground leading-tight">{title}</h3><p className="text-xs font-mono text-muted-foreground mt-0.5">{tag}</p></div></div>
                <div className="w-7 h-7 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 transition-colors ml-auto">{open === n ? <Minus className="w-3.5 h-3.5 text-primary" /> : <Plus className="w-3.5 h-3.5 text-muted-foreground group-hover:text-primary transition-colors" />}</div>
              </button>
              <AnimatePresence initial={false}>{open === n && <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="overflow-hidden"><div className="grid lg:grid-cols-2 gap-8 lg:gap-12 pb-8 pt-2 pl-2 sm:pl-[88px]"><div><p className="text-base text-muted-foreground leading-relaxed mb-6">{description}</p><div className="flex flex-wrap gap-3"><button onClick={() => onNavigate?.("contact")} className="inline-flex items-center gap-2 border-2 border-primary text-primary px-5 py-3 text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all">Enquire<ChevronRight className="w-4 h-4" /></button><button onClick={() => openWhatsApp(message)} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 text-sm font-bold hover:bg-primary/90 transition-all">WhatsApp<ChevronRight className="w-4 h-4" /></button></div></div><ul className="space-y-3">{details.map((item) => <li key={item} className="flex items-start gap-3 text-sm"><div className="w-4 h-4 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5"><Check className="w-2.5 h-2.5 text-primary" /></div><span className="text-muted-foreground leading-snug">{item}</span></li>)}</ul></div></motion.div>}</AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
