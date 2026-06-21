import React from "react";
import { motion } from "framer-motion";
import {
  Globe, Brain, Cpu, GraduationCap,
  Workflow, Bot, Database, BarChart3, Code2, Shield,
  ArrowRight, Check, Zap, Layers, ClipboardList,
  AlertCircle, Server, ChevronRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

/* ── AI Products ─────────────────────────────────────────── */
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
    cta: { label: "Join Waitlist", href: "https://nusitereimagined.netlify.app/", external: true },
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
    cta: { label: "Join Waitlist", href: null, external: false },
  },
];

/* ── Industry Solutions ──────────────────────────────────── */
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
    cta: "Request Demo",
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
    cta: "Request Demo",
  },
  {
    icon: Server,
    name: "AI Machine Platform",
    tag: "Platform",
    badge: "Live",
    description:
      "A unified platform to deploy, monitor and manage AI models across your infrastructure. Connect data sources, run models, track outputs and manage users — from a single operational dashboard.",
    details: [
      "Model deployment and version management",
      "Real-time monitoring and health checks",
      "Data source connections and pipeline triggers",
      "User and role management",
      "API endpoints for external integrations",
      "Audit logs and usage analytics",
    ],
    cta: "View Demo",
    demoHref: "https://torga-hub.netlify.app/",
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
      "Offline-first Windows desktop app — runs without internet",
    ],
    cta: "Request Demo",
  },
];

/* ── Services ────────────────────────────────────────────── */
const services = [
  { n: "01", icon: Workflow,  title: "Process Automation",        body: "Replace manual, repetitive tasks with AI — from invoice processing to customer onboarding flows." },
  { n: "02", icon: Bot,       title: "Custom AI Assistants",      body: "Chatbots and virtual assistants trained on your business data, integrated into your existing systems." },
  { n: "03", icon: Database,  title: "Data Pipeline Engineering",  body: "Clean, real-time data pipelines that feed your AI models from any source or legacy system." },
  { n: "04", icon: BarChart3, title: "AI Analytics",              body: "Replace static reports with AI dashboards that surface insights and predict trends automatically." },
  { n: "05", icon: Code2,     title: "Custom AI Development",     body: "End-to-end bespoke AI solutions — concept, model selection, deployment and maintenance." },
  { n: "06", icon: Shield,    title: "AI Strategy Consulting",    body: "We audit your processes, find high-ROI automation opportunities, and build your AI roadmap." },
];

export default function AISolutionsPage() {
  const navigate = useNavigate();

  const handleProductCTA = (cta) => {
    if (cta.external && cta.href) {
      window.open(cta.href, "_blank", "noopener noreferrer");
    } else {
      document.getElementById("contact-ai")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSolutionCTA = (sol) => {
    if (sol.demoHref) {
      window.open(sol.demoHref, "_blank", "noopener noreferrer");
    } else {
      document.getElementById("contact-ai")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

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
            <span className="block text-foreground">Automate</span>
            <span className="block text-foreground">your business</span>
            <span className="block text-primary">with AI.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.12)} className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
            AI products, industry solutions and automation services — built by a Cape Town team for real business problems.
          </motion.p>

          <motion.div {...fadeUp(0.16)} className="flex flex-wrap gap-4">
            <a href="#products" className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 text-base hover:bg-primary/90 hover:gap-3 transition-all">
              Explore Products <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact-ai" className="inline-flex items-center gap-2 border-2 border-border text-foreground font-semibold px-8 py-4 text-base hover:border-primary hover:text-primary transition-all">
              Free Consultation
            </a>
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

                {/* Left */}
                <motion.div {...fadeUp(0)}>
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[80px] font-black font-mono text-primary/10 leading-none select-none">{product.number}</span>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{product.tag}</p>
                      <span className="inline-block mt-1 text-xs font-mono font-semibold px-3 py-1 border border-primary/30 bg-primary/10 text-primary">
                        {product.status}
                      </span>
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
                    onClick={() => handleProductCTA(product.cta)}
                    className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 text-base hover:bg-primary/90 hover:gap-3 transition-all"
                  >
                    {product.cta.label}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>

                {/* Right */}
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
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-10 h-10 border border-border/60 group-hover:border-primary/40 flex items-center justify-center shrink-0 transition-colors">
                    <sol.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <span className="text-[10px] font-mono px-2 py-0.5 border border-border/60 text-muted-foreground">{sol.tag}</span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 border ${sol.badge === "Live" || sol.badge === "Available Now" ? "border-primary/30 bg-primary/10 text-primary" : "border-border/60 text-muted-foreground"}`}>
                      {sol.badge}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-black tracking-tight text-foreground mb-3">{sol.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{sol.description}</p>

                {/* Details */}
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

                {/* CTA */}
                <button
                  onClick={() => handleSolutionCTA(sol)}
                  className="group/btn self-start inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:gap-2.5 transition-all"
                >
                  {sol.cta}
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
                Custom AI services delivered end-to-end — strategy, development, integration and ongoing support. Built for businesses that want results, not complexity.
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
              <a
                href="mailto:info@camluk.co.za?subject=AI Solutions Consultation"
                className="group inline-flex items-center gap-2 bg-primary-foreground text-primary font-black px-10 py-5 text-base hover:bg-primary-foreground/90 hover:gap-3 transition-all w-full sm:w-auto justify-center"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
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
