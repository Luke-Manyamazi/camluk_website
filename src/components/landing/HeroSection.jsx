import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import hero1 from "@/assets/hero1.webp";
import hero2 from "@/assets/hero2.webp";
import hero3 from "@/assets/hero3.webp";
import hero4 from "@/assets/hero4.webp";
import hero5 from "@/assets/hero5.webp";

const slides = [
  { image: hero1, eyebrow: "Simply Automated", title: "Stop letting manual work slow your business down.", ctas: [{ label: "Talk to Camluk", action: "contact" }, { label: "See What We Solve", action: "services" }] },
  { image: hero2, eyebrow: "Web • Software • IT", title: "Technology that works around your business — not the other way around.", ctas: [{ label: "Start a Project", action: "contact" }, { label: "Explore Services", action: "services" }] },
  { image: hero3, eyebrow: "WhatsApp Commerce", title: "Turn WhatsApp conversations into a real business system.", ctas: [{ label: "Ask About WhatsApp Commerce", action: "contact" }, { label: "See Our Services", action: "services" }] },
  { image: hero4, eyebrow: "Business Software", title: "Replace spreadsheets, paper and disconnected tools with one clear workflow.", ctas: [{ label: "Discuss Your Workflow", action: "contact" }, { label: "How We Work", action: "process" }] },
  { image: hero5, eyebrow: "IT • Cloud • Automation", title: "Reliable technical support and digital systems built for growth.", ctas: [{ label: "Get Technical Help", action: "contact" }, { label: "Why Camluk", action: "why-us" }] },
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
          <img src={s.image} alt="" className="w-full h-full object-cover" loading={i === 0 ? "eager" : "lazy"} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      ))}
      <div className="relative z-10 flex flex-col justify-end flex-1 max-w-6xl mx-auto w-full px-6 lg:px-10 pb-24 pt-32">
        <div className="flex items-center gap-3 mb-5"><span className="w-8 h-px bg-primary" /><span className="text-xs font-mono text-primary uppercase tracking-[0.25em]">{slide.eyebrow}</span></div>
        <h1 key={`h-${current}`} className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter leading-[0.95] mb-8 max-w-3xl text-foreground animate-fade-in">{slide.title}</h1>
        <div key={`cta-${current}`} className="flex flex-wrap gap-4 animate-fade-in">
          <button onClick={() => handleCTA(slide.ctas[0].action)} className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 text-base hover:bg-primary/90 hover:gap-3 transition-all">{slide.ctas[0].label}<ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></button>
          <button onClick={() => handleCTA(slide.ctas[1].action)} className="inline-flex items-center gap-2 border-2 border-border text-foreground font-semibold px-8 py-4 text-base hover:border-primary hover:text-primary transition-all">{slide.ctas[1].label}</button>
        </div>
        <div className="flex items-center gap-4 mt-10"><span className="text-xs font-mono text-muted-foreground tabular-nums">{String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span><div className="flex gap-1.5">{slides.map((_, i) => <button key={i} onClick={() => setCurrent(i)} className={`h-px transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"}`} aria-label={`Go to slide ${i + 1}`} />)}</div></div>
      </div>
      <button onClick={prev} className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-border/60 bg-background/40 backdrop-blur-sm flex items-center justify-center hover:border-primary/60 hover:bg-background/70 transition-all" aria-label="Previous slide"><ChevronLeft className="w-4 h-4 text-foreground" /></button>
      <button onClick={next} className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-border/60 bg-background/40 backdrop-blur-sm flex items-center justify-center hover:border-primary/60 hover:bg-background/70 transition-all" aria-label="Next slide"><ChevronRight className="w-4 h-4 text-foreground" /></button>
      <div className="absolute bottom-0 inset-x-0 h-px bg-border/40 z-10" />
    </section>
  );
}
