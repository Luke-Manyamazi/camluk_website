import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const STOCK_IMAGES = {
  business: "https://images.unsplash.com/photo-1758876202980-0a28b744fb24?auto=format&fit=crop&fm=jpg&q=75&w=2200",
  software: "https://images.unsplash.com/photo-1758873267964-66a045a75e25?auto=format&fit=crop&fm=jpg&q=75&w=2200",
  whatsapp: "https://images.unsplash.com/photo-1776797391265-01a0490d4c99?auto=format&fit=crop&fm=jpg&q=75&w=1800",
  retail: "https://images.unsplash.com/photo-1753161029695-f1d1e6881257?auto=format&fit=crop&fm=jpg&q=75&w=2200",
};

const slides = [
  { image: STOCK_IMAGES.business, alt: "Business team reviewing digital performance data", eyebrow: "Simply Automated", title: "Technology that works around your business — not the other way around.", ctas: [{ label: "Enquire", action: "contact" }, { label: "Explore Services", action: "services" }] },
  { image: STOCK_IMAGES.software, alt: "Professional working with technology in a modern workspace", eyebrow: "Business Software", title: "Run customers, sales, stock and operations from one clear system.", ctas: [{ label: "Enquire", action: "contact" }, { label: "See Business Software", action: "services" }] },
  { image: STOCK_IMAGES.whatsapp, alt: "Smartphone showing a business text conversation", eyebrow: "WhatsApp Commerce", title: "Turn everyday customer conversations into structured business workflows.", ctas: [{ label: "Enquire", action: "contact" }, { label: "Explore Services", action: "services" }] },
  { image: STOCK_IMAGES.retail, alt: "Business owner using a tablet in a retail store", eyebrow: "AI • Automation • Cloud", title: "Remove repetitive work and give your team better information.", ctas: [{ label: "Enquire", action: "contact" }, { label: "How We Work", action: "process" }] },
  { image: STOCK_IMAGES.business, alt: "Business professionals collaborating around digital information", eyebrow: "Web Development", title: "Build a digital presence that earns trust and creates opportunities.", ctas: [{ label: "Enquire", action: "contact" }, { label: "Why Camluk", action: "why-us" }] },
];

export default function HeroSection({ onNavigate }) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  const handleCTA = (action) => {
    if (onNavigate && ["contact", "services", "process", "why-us"].includes(action)) {
      onNavigate(action);
      return;
    }
    document.getElementById(action)?.scrollIntoView({ behavior: "smooth" });
  };

  const slide = slides[current];

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      {slides.map((s, i) => (
        <div key={i} className="absolute inset-0 transition-opacity duration-1000" style={{ opacity: i === current ? 1 : 0 }}>
          <img src={s.image} alt={s.alt} className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      ))}
      <div className="relative z-10 flex flex-col justify-end flex-1 max-w-6xl mx-auto w-full px-6 lg:px-10 pb-28 pt-32">
        <div key={`eyebrow-${current}`} className="inline-flex items-center gap-2 mb-6 w-fit px-3 py-1.5 border border-primary/40 bg-primary/10 backdrop-blur-sm text-primary animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.22em]">{slide.eyebrow}</span>
        </div>
        <h1 key={`h-${current}`} className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter leading-[0.95] mb-8 max-w-4xl text-foreground animate-fade-in">{slide.title}</h1>
        <div key={`cta-${current}`} className="flex flex-wrap gap-4 animate-fade-in">
          <button onClick={() => handleCTA(slide.ctas[0].action)} className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 text-base hover:bg-primary/90 hover:gap-3 transition-all">{slide.ctas[0].label}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></button>
          <button onClick={() => handleCTA(slide.ctas[1].action)} className="inline-flex items-center gap-2 border-2 border-border text-foreground font-semibold px-8 py-4 text-base hover:border-primary hover:text-primary transition-all">{slide.ctas[1].label}</button>
        </div>
        <div className="flex items-center gap-4 mt-10"><span className="text-xs font-mono text-muted-foreground tabular-nums">{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span><div className="flex gap-1.5">{slides.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`h-px transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"}`} aria-label={`Go to slide ${i + 1}`} />)}</div></div>
      </div>
      <button onClick={prev} className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-border/60 bg-background/40 backdrop-blur-sm flex items-center justify-center hover:border-primary/60 hover:bg-background/70 transition-all" aria-label="Previous hero slide"><ChevronLeft className="w-4 h-4 text-foreground" /></button>
      <button onClick={next} className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-border/60 bg-background/40 backdrop-blur-sm flex items-center justify-center hover:border-primary/60 hover:bg-background/70 transition-all" aria-label="Next hero slide"><ChevronRight className="w-4 h-4 text-foreground" /></button>
      <div className="absolute bottom-0 inset-x-0 h-px bg-border/40 z-10" />
    </section>
  );
}
