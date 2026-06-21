import React from "react";
import { motion } from "framer-motion";
import {
  Globe, Brain, Cpu, FlaskConical,
  Workflow, Bot, Database, BarChart3, Code2, Shield,
  ArrowRight, Check, Zap, ArrowUpRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

/* ── animation helper ───────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: "easeOut", delay },
});

/* ── data ───────────────────────────────────────────────── */
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
      { tier: "Starter", price: "Free", note: "5 transforms/month" },
      { tier: "Pro",     price: "$10/mo", note: "50 transforms + deployment guide", highlight: true },
      { tier: "Premium", price: "$20/mo", note: "Unlimited + GitHub repo input" },
    ],
    features: [
      "Paste, ZIP, URL or GitHub repo",
      "HTML → React conversion",
      "Static → Responsive",
      "Dark Mode & CSS Motion",
      "Performance & Accessibility fixes",
      "Tailwind CSS conversion",
      "Custom AI transform prompt",
      "Deployment guide included",
    ],
    cta: { label: "Join the Waitlist", href: "https://nusitereimagined.netlify.app/", external: true },
    accent: "hsl(var(--primary))",
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
      { tier: "Free",  price: "$0",    note: "3 lifetime runs, 50 emails" },
      { tier: "Basic", price: "$7/mo", note: "Unlimited runs, 500 emails/run", highlight: true },
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
    cta: { label: "Request Early Access", href: null, external: false },
    accent: "hsl(var(--accent))",
  },
];

const comingSoon = [
  {
    name: "Torga Lab Dashboard",
    tag: "Enterprise",
    icon: FlaskConical,
    description: "Real-time operational dashboard for Torga Optical's laboratory — lens orders, quality checks, technician assignments.",
  },
  {
    name: "AI Machine Platform",
    tag: "Platform",
    icon: Cpu,
    description: "Deploy, manage and monitor AI models across your infrastructure. Bring your own or use ours.",
  },
];

const services = [
  { n: "01", icon: Workflow,  title: "Process Automation",       body: "Replace manual, repetitive tasks with AI — from invoice processing to customer onboarding flows." },
  { n: "02", icon: Bot,       title: "Custom AI Assistants",     body: "Chatbots and virtual assistants trained on your business data, integrated into your existing systems." },
  { n: "03", icon: Database,  title: "Data Pipeline Engineering", body: "Clean, real-time data pipelines that feed your AI models from any source or legacy system." },
  { n: "04", icon: BarChart3, title: "AI Analytics",             body: "Replace static reports with AI dashboards that surface insights and predict trends automatically." },
  { n: "05", icon: Code2,     title: "Custom AI Development",    body: "End-to-end bespoke AI solutions — concept, model selection, deployment and maintenance." },
  { n: "06", icon: Shield,    title: "AI Strategy Consulting",   body: "We audit your processes, find high-ROI automation opportunities, and build your AI roadmap." },
];

/* ── component ──────────────────────────────────────────── */
export default function AISolutionsPage() {
  const navigate = useNavigate();

  const handleCTA = (cta) => {
    if (cta.external && cta.href) {
      window.open(cta.href, "_blank", "noopener noreferrer");
    } else {
      document.getElementById("contact-ai")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ════════════════════════════════════════
          HERO — full bleed, editorial
      ════════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-24 pb-16">
        {/* bg glow */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 w-full">
          <motion.div {...fadeUp(0)} className="mb-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-[0.2em]">
              <span className="w-6 h-px bg-primary inline-block" />
              Camluk AI Solutions
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.06)}
            className="text-[clamp(3rem,8vw,6rem)] font-black tracking-tighter leading-[0.95] mb-8"
          >
            <span className="block text-foreground">Automate</span>
            <span className="block text-foreground">your business</span>
            <span className="block text-primary">with AI.</span>
          </motion.h1>

          <motion.p {...fadeUp(0.12)} className="text-xl text-muted-foreground max-w-xl leading-relaxed mb-10">
            Two AI products. Six automation services. One team in Cape Town building the future of South African business tech.
          </motion.p>

          <motion.div {...fadeUp(0.16)} className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 text-base transition-all hover:bg-primary/90 hover:gap-3"
            >
              Explore Products <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact-ai"
              className="inline-flex items-center gap-2 border-2 border-border text-foreground font-semibold px-8 py-4 text-base hover:border-primary hover:text-primary transition-all"
            >
              Free Consultation
            </a>
          </motion.div>

          {/* scroll indicator */}
          <motion.div {...fadeUp(0.3)} className="absolute bottom-0 right-10 hidden lg:flex flex-col items-center gap-2 pb-8">
            <span className="text-xs font-mono text-muted-foreground tracking-widest uppercase rotate-90 origin-bottom mb-6">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-border to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          PRODUCTS
      ════════════════════════════════════════ */}
      <section id="products" className="relative">
        <div className="absolute top-0 inset-x-0 h-px bg-border/60" />

        {products.map((product, pi) => (
          <div key={product.id} className="relative">
            <div className={`absolute top-0 inset-x-0 h-px ${pi > 0 ? "bg-border/40" : "hidden"}`} />

            <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
              <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">

                {/* LEFT — product identity */}
                <motion.div {...fadeUp(0)}>
                  {/* number + status */}
                  <div className="flex items-center gap-4 mb-8">
                    <span className="text-[80px] font-black font-mono text-primary/10 leading-none select-none">
                      {product.number}
                    </span>
                    <div>
                      <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">{product.tag}</p>
                      <span className="inline-block mt-1 text-xs font-mono font-semibold px-3 py-1 border border-primary/30 bg-primary/10 text-primary">
                        {product.status}
                      </span>
                    </div>
                  </div>

                  <h2 className="text-6xl lg:text-7xl font-black tracking-tighter leading-none mb-3 text-foreground">
                    {product.name}
                  </h2>
                  <p className="text-xl font-semibold text-primary mb-6">{product.pitch}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-10">{product.description}</p>

                  {/* pricing tiers */}
                  <div className="space-y-2 mb-10">
                    {product.pricing.map(({ tier, price, note, highlight }) => (
                      <div
                        key={tier}
                        className={`flex items-center gap-4 px-4 py-3 border ${
                          highlight
                            ? "border-primary/50 bg-primary/8 text-foreground"
                            : "border-border/40 text-muted-foreground"
                        }`}
                      >
                        <span className="text-xs font-mono w-16 shrink-0">{tier}</span>
                        <span className={`font-bold text-lg ${highlight ? "text-primary" : ""}`}>{price}</span>
                        <span className="text-sm ml-auto text-right">{note}</span>
                        {highlight && <Zap className="w-4 h-4 text-primary shrink-0" />}
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => handleCTA(product.cta)}
                    className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 text-base hover:bg-primary/90 hover:gap-3 transition-all"
                  >
                    {product.cta.label}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </motion.div>

                {/* RIGHT — features */}
                <motion.div {...fadeUp(0.1)} className="lg:border-l lg:border-border/40 lg:pl-20">
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-8">
                    What's included
                  </p>
                  <ul className="space-y-4">
                    {product.features.map((f, i) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: -12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.05 }}
                        className="flex items-start gap-4"
                      >
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

        {/* coming soon strip */}
        <div className="border-t border-border/40 bg-card/20">
          <div className="max-w-6xl mx-auto px-6 lg:px-10 py-12">
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">In Development</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {comingSoon.map(({ name, tag, icon: Icon, description }) => (
                <motion.div
                  key={name}
                  {...fadeUp(0)}
                  className="flex gap-4 p-5 border border-dashed border-border/40 hover:border-border transition-colors"
                >
                  <div className="w-10 h-10 border border-border/60 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">{name}</span>
                      <span className="text-[10px] font-mono px-2 py-0.5 border border-border/60 text-muted-foreground">{tag}</span>
                      <span className="text-[10px] font-mono text-muted-foreground">Coming Soon</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          SERVICES
      ════════════════════════════════════════ */}
      <section id="ai-services" className="relative border-t border-border/60">
        {/* accent bar */}
        <div className="h-1 w-24 bg-primary ml-6 lg:ml-10" />

        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div {...fadeUp(0)} className="grid lg:grid-cols-3 gap-10 mb-16">
            <div className="lg:col-span-1">
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

      {/* ════════════════════════════════════════
          CTA — full-bleed primary
      ════════════════════════════════════════ */}
      <section id="contact-ai" className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)", backgroundSize: "48px 48px" }}
        />
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
