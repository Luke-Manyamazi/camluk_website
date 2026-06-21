import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Workflow, Bot, Database, BarChart3, Code2, Shield,
  ArrowRight, Check, Zap, Layers, AlertCircle, Server,
  GraduationCap, ChevronRight, X, Loader2, Send,
  User, Mail, Phone, MessageSquare
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

/* ── Enquiry Modal ───────────────────────────────────────── */
function EnquiryModal({ open, onClose, subject }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [done, setDone] = useState(false);

  const handle = (e) => setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    subject,
          message:    `Enquiry: ${subject}\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || "Not provided"}\n\nMessage:\n${form.message || "No message provided"}`,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setDone(true);
    } catch {
      toast.error("Failed to send. Please email info@camluk.co.za directly.");
    } finally {
      setSending(false);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => { setDone(false); setForm({ name: "", email: "", phone: "", message: "" }); }, 300);
  };

  const inputCls = "w-full bg-card/40 border border-border/60 focus:border-primary/60 text-foreground placeholder:text-muted-foreground/40 text-sm px-4 py-3 outline-none transition-colors";

  return (
    <AnimatePresence>
      {open && (
        /* Backdrop doubles as the centering container so the panel
           is always anchored to the viewport, not a transformed ancestor */
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-end sm:items-center justify-center p-0 sm:p-4"
          onClick={handleClose}
        >
          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-lg bg-background border border-border/60 z-50 p-8 max-h-[92vh] overflow-y-auto"
          >
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-1">Camluk Technologies</span>
                <h3 className="text-xl font-black tracking-tight text-foreground">{subject}</h3>
              </div>
              <button onClick={handleClose} className="w-8 h-8 border border-border/60 flex items-center justify-center hover:border-primary/40 transition-colors shrink-0 ml-4">
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            <AnimatePresence mode="wait">
              {done ? (
                <motion.div key="done" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8">
                  <div className="w-14 h-14 border border-primary/30 bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-black text-foreground mb-2">Message sent!</h4>
                  <p className="text-sm text-muted-foreground mb-6">We'll get back to you within 24 hours.</p>
                  <button onClick={handleClose} className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 text-sm hover:bg-primary/90 transition-colors">
                    Close
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Full Name <span className="text-primary">*</span></label>
                      <input name="name" value={form.name} onChange={handle} placeholder="Your name" required className={inputCls} />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Email <span className="text-primary">*</span></label>
                      <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@company.com" required className={inputCls} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Phone</label>
                    <input name="phone" value={form.phone} onChange={handle} placeholder="+27 XX XXX XXXX" className={inputCls} />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Message</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Tell us about your business and what you're looking for..." className={`${inputCls} resize-none`} />
                  </div>
                  <button type="submit" disabled={sending} className="group w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-4 text-sm hover:bg-primary/90 hover:gap-3 disabled:opacity-60 disabled:cursor-not-allowed transition-all">
                    {sending ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending…</> : <><Send className="w-4 h-4" /> Send Enquiry</>}
                  </button>
                  <p className="text-xs text-center text-muted-foreground font-mono">We reply within 24 hours · info@camluk.co.za</p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ── Data ────────────────────────────────────────────────── */
const products = [
  {
    id: "nusite",
    number: "01",
    name: "NuSite",
    tag: "AI Website Transformation Engine",
    status: "Launching Q4 2026",
    pitch: "Old code in. New site out.",
    description:
      "Paste HTML, drop a URL, upload a ZIP, or connect a GitHub repo. NuSite uses AI to transform any outdated website into something modern, responsive and ready to deploy — in seconds, not days.",
    pricing: [
      { tier: "Starter", price: "Free",    note: "5 transforms/month" },
      { tier: "Pro",     price: "$10/mo",  note: "50 transforms + deployment guide", highlight: true },
      { tier: "Premium", price: "$20/mo",  note: "Unlimited + GitHub repo input" },
    ],
    features: [
      "Paste, ZIP, URL or GitHub repo input",
      "HTML → React conversion",
      "Static → Responsive",
      "Dark Mode & CSS Motion",
      "Performance & Accessibility fixes",
      "Tailwind CSS conversion",
      "Custom AI transform prompt",
      "Deployment guide included",
    ],
    ctaLabel: "Join Waitlist",
    ctaHref: "https://nusitereimagined.netlify.app/",
    ctaExternal: true,
  },
  {
    id: "chenesa",
    number: "02",
    name: "Chenesa",
    tag: "AI Email Cleaner",
    status: "Early Access",
    pitch: "Your inbox, finally clean.",
    description:
      "Chenesa connects to Gmail, Outlook, Yahoo, iCloud and any IMAP inbox. It uses AI to classify and permanently delete spam, marketing noise, social clutter and old read mail — while keeping every email that matters safe.",
    pricing: [
      { tier: "Free",  price: "$0",     note: "3 lifetime runs, 50 emails" },
      { tier: "Basic", price: "$7/mo",  note: "Unlimited runs, 500 emails/run", highlight: true },
      { tier: "Pro",   price: "$15/mo", note: "Unlimited everything, 4 accounts" },
    ],
    features: [
      "Gmail, Outlook, Yahoo, iCloud & IMAP",
      "AI classifies spam, marketing & social",
      "Auto-deletes on a schedule",
      "Dry-run mode — preview first",
      "Never deletes payslips or receipts",
      "Never deletes security alerts",
      "Batch processing for large inboxes",
      "Multi-account support",
    ],
    ctaLabel: "Join Waitlist",
    ctaHref: null,
    ctaExternal: false,
  },
];

const solutions = [
  {
    icon: Layers,
    name: "Optical Lab Fitter Boards",
    tag: "Optical Retail",
    badge: "Production System",
    description:
      "Real-time digital production boards for optical laboratory environments. Track job throughput, fitter workloads and production status live — replacing manual whiteboards and spreadsheets with a single dashboard every team member can see.",
    details: [
      "Live job queue per fitter station",
      "Throughput metrics — jobs in, jobs out, WIP",
      "Production bottleneck detection",
      "Status flags: In Progress, Completed, On Hold",
      "Shift and daily summary reports",
      "Role-based views for floor staff and managers",
    ],
  },
  {
    icon: AlertCircle,
    name: "Lab Late Jobs Tracking System",
    tag: "Optical Retail",
    badge: "Operations",
    description:
      "Automated tracking and escalation of overdue laboratory jobs. Know exactly which jobs are late, by how long, and who is responsible — before the customer calls. Keeps SLA compliance visible and accountable.",
    details: [
      "Real-time late job dashboard",
      "Configurable SLA thresholds per job type",
      "Automatic escalation alerts to supervisors",
      "Root cause tagging (supplier, lab, prescription error)",
      "Daily late job reports via email",
      "Integration with existing lab management systems",
    ],
  },
  {
    icon: Server,
    name: "AI Maintenance Platform",
    tag: "Manufacturing / Industrial",
    badge: "Available Now",
    description:
      "An on-premise AI platform for industrial equipment maintenance. Track machine health, log faults, run AI-powered diagnostics from a local LLM, monitor IoT sensors and manage spare parts — all on your own hardware, with no data leaving your premises.",
    details: [
      "Equipment register with real-time health scores",
      "AI fault diagnosis with confidence scoring and root cause ranking",
      "Local LLM inference — no cloud, no API costs, no data exposure",
      "IoT sensor monitoring via MQTT (temperature, vibration, vacuum, pressure)",
      "Knowledge base with semantic search (RAG over manuals, fault reports, emails)",
      "Laser alignment diagnostics and drift trend tracking",
      "Spare parts inventory with low-stock alerts",
      "Fault trend analytics and MTTR reporting",
    ],
  },
  {
    icon: GraduationCap,
    name: "Preschool & Daycare Manager",
    tag: "Education",
    badge: "Available Now",
    description:
      "A complete offline management system for preschools and daycare centres. Attendance via barcode card scanning, automated billing, payroll, parent records and monthly reports — all in one desktop app. No internet required. No subscription.",
    details: [
      "Barcode card clock-in / clock-out for children and staff",
      "Live attendance dashboard with gender and presence stats",
      "Automated monthly billing with overtime calculations",
      "Printable invoices per child with invoice numbers",
      "Staff payroll tracking based on hours worked",
      "Monthly attendance reports — export to Excel or CSV",
      "Full child and parent profile management",
      "Offline-first Windows desktop app",
    ],
  },
];

const services = [
  { n: "01", icon: Workflow,  title: "Process Automation",        body: "Replace manual, repetitive tasks with AI — from invoice processing to customer onboarding flows." },
  { n: "02", icon: Bot,       title: "Custom AI Assistants",      body: "Chatbots and virtual assistants trained on your business data, integrated into your existing systems." },
  { n: "03", icon: Database,  title: "Data Pipeline Engineering",  body: "Clean, real-time data pipelines that feed your AI models from any source or legacy system." },
  { n: "04", icon: BarChart3, title: "AI Analytics",              body: "Replace static reports with AI dashboards that surface insights and predict trends automatically." },
  { n: "05", icon: Code2,     title: "Custom AI Development",     body: "End-to-end bespoke AI solutions — concept, model selection, deployment and maintenance." },
  { n: "06", icon: Shield,    title: "AI Strategy Consulting",    body: "We audit your processes, find high-ROI automation opportunities, and build your AI roadmap." },
];

/* ── Page ────────────────────────────────────────────────── */
export default function AISolutionsPage() {
  const [modal, setModal] = useState({ open: false, subject: "" });

  const openModal = (subject) => setModal({ open: true, subject });
  const closeModal = () => setModal(m => ({ ...m, open: false }));

  const handleProductCTA = (p) => {
    if (p.ctaExternal && p.ctaHref) {
      window.open(p.ctaHref, "_blank", "noopener noreferrer");
    } else {
      openModal(`Waitlist — ${p.name}`);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <EnquiryModal open={modal.open} onClose={closeModal} subject={modal.subject} />

      {/* ════════════ HERO ════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-24 pb-16">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-primary/6 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 w-full">
          <motion.div {...fadeUp(0)} className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-[0.2em]">
              <span className="w-6 h-px bg-primary inline-block" />
              Camluk AI Solutions
            </span>
          </motion.div>

          <motion.h1 {...fadeUp(0.06)} className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter leading-[0.95] mb-8">
            <span className="block">Automate</span>
            <span className="block">your business</span>
            <span className="block text-primary">with AI.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.12)} className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
            AI products, industry solutions and automation services — built by a Cape Town team for real business problems.
          </motion.p>

          <motion.div {...fadeUp(0.16)} className="flex flex-wrap gap-4">
            <a href="#products" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 text-base hover:bg-primary/90 hover:gap-3 transition-all">
              Explore Products <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <button
              onClick={() => openModal("Free Consultation Request")}
              className="inline-flex items-center gap-2 border-2 border-border text-foreground font-semibold px-8 py-4 text-base hover:border-primary hover:text-primary transition-all"
            >
              Free Consultation
            </button>
          </motion.div>
        </div>
      </section>

      {/* ════════════ AI PRODUCTS ════════════ */}
      <section id="products" className="relative border-t border-border/60">
        <div className="h-1 w-24 bg-primary ml-6 lg:ml-10" />

        {products.map((product, pi) => (
          <div key={product.id} className={pi > 0 ? "border-t border-border/40" : ""}>
            <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">

                <motion.div {...fadeUp(0)}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[80px] font-black font-mono text-primary/10 leading-none select-none">{product.number}</span>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{product.tag}</p>
                      <span className="inline-block mt-1 text-xs font-mono font-semibold px-3 py-1 border border-primary/30 bg-primary/10 text-primary">{product.status}</span>
                    </div>
                  </div>

                  <h2 className="text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-3">{product.name}</h2>
                  <p className="text-xl font-semibold text-primary mb-6">{product.pitch}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">{product.description}</p>

                  <div className="space-y-2 mb-10">
                    {product.pricing.map(({ tier, price, note, highlight }) => (
                      <div key={tier} className={`flex items-center gap-4 px-4 py-3 border ${highlight ? "border-primary/50 bg-primary/8 text-foreground" : "border-border/40 text-muted-foreground"}`}>
                        <span className="text-xs font-mono w-16 shrink-0">{tier}</span>
                        <span className={`font-bold text-lg ${highlight ? "text-primary" : ""}`}>{price}</span>
                        <span className="text-sm ml-auto text-right">{note}</span>
                        {highlight && <Zap className="w-4 h-4 text-primary shrink-0" />}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleProductCTA(product)}
                    className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 text-base hover:bg-primary/90 hover:gap-3 transition-all"
                  >
                    {product.ctaLabel}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>

                <motion.div {...fadeUp(0.1)} className="lg:border-l lg:border-border/40 lg:pl-20">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">What's included</p>
                  <ul className="space-y-4">
                    {product.features.map((f, i) => (
                      <motion.li key={f} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: i * 0.05 }} className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-base text-foreground">{f}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ════════════ INDUSTRY SOLUTIONS ════════════ */}
      <section id="solutions" className="relative border-t border-border/60">
        <div className="h-1 w-24 bg-primary ml-6 lg:ml-10" />

        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div {...fadeUp(0)} className="grid lg:grid-cols-3 gap-8 mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Industry Solutions</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
                Built for specific industries.
              </h2>
            </div>
            <div className="lg:col-span-2 lg:pt-14">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Purpose-built software systems for industries that need more than generic tools. Each solution is available as a white-label or custom deployment for your business.
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-px bg-border/30 border border-border/30 overflow-hidden">
            {solutions.map((sol, i) => (
              <motion.div
                key={sol.name}
                {...fadeUp(i * 0.07)}
                className="group bg-background hover:bg-card/30 p-8 lg:p-10 transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-10 h-10 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 transition-colors">
                    <sol.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 ml-auto flex-wrap justify-end">
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-border/60 text-muted-foreground">{sol.tag}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 border ${sol.badge === "Available Now" ? "border-primary/30 bg-primary/10 text-primary" : "border-border/60 text-muted-foreground"}`}>
                      {sol.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-black tracking-tight text-foreground mb-3">{sol.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{sol.description}</p>

                <ul className="space-y-2 mb-8 flex-1">
                  {sol.details.map((d) => (
                    <li key={d} className="flex items-start gap-2.5 text-sm">
                      <div className="w-4 h-4 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-muted-foreground leading-snug">{d}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => openModal(`Demo Request — ${sol.name}`)}
                  className="group/btn self-start inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2.5 transition-all"
                >
                  Request Demo
                  <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ SERVICES ════════════ */}
      <section id="ai-services" className="relative border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div {...fadeUp(0)} className="grid lg:grid-cols-3 gap-10 mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Services</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
                We automate what slows you down.
              </h2>
            </div>
            <div className="lg:col-span-2 lg:pt-14">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Custom AI services delivered end-to-end — strategy, development, integration and ongoing support.
              </p>
            </div>
          </motion.div>

          <div className="divide-y divide-border/40">
            {services.map(({ n, icon: Icon, title, body }, i) => (
              <motion.div
                key={n}
                {...fadeUp(i * 0.05)}
                className="group grid sm:grid-cols-[80px_1fr_1fr] gap-4 sm:gap-8 py-7 hover:bg-card/30 px-2 -mx-2 transition-colors"
              >
                <span className="text-xs font-mono text-muted-foreground pt-1 group-hover:text-primary transition-colors">{n}</span>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 border border-border/60 group-hover:border-primary/40 flex items-center justify-center transition-colors shrink-0">
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed sm:text-sm">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════ CTA ════════════ */}
      <section id="contact-ai" className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <p className="text-primary-foreground/70 font-mono text-xs uppercase tracking-widest mb-6">Free Consultation</p>
              <h2 className="text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-primary-foreground mb-6">
                Start your AI journey today.
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Book a free 30-minute consultation. We'll map your processes and show exactly where AI saves time and money — no commitment.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="flex flex-col gap-4 lg:items-end">
              <button
                onClick={() => openModal("Free Consultation Request")}
                className="group inline-flex items-center gap-2 bg-primary-foreground text-primary font-black px-10 py-5 text-base hover:bg-primary-foreground/90 hover:gap-3 transition-all w-full sm:w-auto justify-center"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={`https://wa.me/27621071140?text=${encodeURIComponent("Hi! I'm interested in AI automation services.")}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-semibold px-10 py-5 text-base hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all w-full sm:w-auto justify-center"
              >
                Chat on WhatsApp
              </a>
              <p className="text-xs text-primary-foreground/50 font-mono text-center sm:text-right">
                Free · No commitment · Reply within 24 hours
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
