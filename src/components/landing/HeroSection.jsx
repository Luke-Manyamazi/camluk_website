import React, { useState, useEffect, useCallback } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import hero1 from "@/assets/hero1.webp";
import hero2 from "@/assets/hero2.webp";
import hero3 from "@/assets/hero3.webp";
import hero4 from "@/assets/hero4.webp";
import hero5 from "@/assets/hero5.webp";

const slides = [
  {
    image: hero1,
    eyebrow: "IT Solutions",
    title: "Empowering businesses with smart tech.",
    ctas: [
      { label: "Get Started",   action: "contact" },
      { label: "Our Services",  action: "services" },
    ],
  },
  {
    image: hero2,
    eyebrow: "Software Development",
    title: "Custom software built to perform.",
    ctas: [
      { label: "View Portfolio", action: "portfolio" },
      { label: "Learn More",     action: "services" },
    ],
  },
  {
    image: hero3,
    eyebrow: "IT Installations",
    title: "Seamless networks. Reliable infrastructure.",
    ctas: [
      { label: "Contact Us",  action: "contact" },
      { label: "Learn More",  action: "services" },
    ],
  },
  {
    image: hero4,
    eyebrow: "Camluk Academy",
    title: "Learn IT. Upskill. Get hired.",
    ctas: [
      { label: "Enrol Now",       action: "academy" },
      { label: "Explore Courses", action: "courses" },
    ],
  },
  {
    image: hero5,
    eyebrow: "Quick Office Services",
    title: "Fast, reliable office support when you need it.",
    ctas: [
      { label: "Get Started",  action: "contact" },
      { label: "Our Services", action: "services" },
    ],
  },
];

export default function HeroSection() {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused]   = useState(false);

  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [paused, next]);

  const handleCTA = (action) => {
    switch (action) {
      case "contact":   document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" }); break;
      case "services":  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" }); break;
      case "portfolio": navigate("/portfolio"); break;
      case "academy":   navigate("/academy"); break;
      case "courses":   navigate("/academy"); break;
      default: break;
    }
  };

  const slide = slides[current];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background images — crossfade */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt=""
            className="w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
          {/* strong gradient so text is always legible */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        </div>
      ))}

      {/* Content — bottom-left anchored */}
      <div className="relative z-10 flex flex-col justify-end flex-1 max-w-6xl mx-auto w-full px-6 lg:px-10 pb-24 pt-32">

        {/* eyebrow */}
        <div className="flex items-center gap-3 mb-5 transition-all duration-500" key={`ey-${current}`}>
          <span className="w-8 h-px bg-primary" />
          <span className="text-xs font-mono text-primary uppercase tracking-[0.25em]">
            {slide.eyebrow}
          </span>
        </div>

        {/* heading */}
        <h1
          key={`h-${current}`}
          className="text-[clamp(2.5rem,6vw,5rem)] font-black tracking-tighter leading-[0.95] mb-8 max-w-2xl text-foreground animate-fade-in"
        >
          {slide.title}
        </h1>

        {/* CTAs */}
        <div key={`cta-${current}`} className="flex flex-wrap gap-4 animate-fade-in">
          <button
            onClick={() => handleCTA(slide.ctas[0].action)}
            className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 text-base hover:bg-primary/90 hover:gap-3 transition-all"
          >
            {slide.ctas[0].label}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => handleCTA(slide.ctas[1].action)}
            className="inline-flex items-center gap-2 border-2 border-border text-foreground font-semibold px-8 py-4 text-base hover:border-primary hover:text-primary transition-all"
          >
            {slide.ctas[1].label}
          </button>
        </div>

        {/* slide counter */}
        <div className="flex items-center gap-4 mt-10">
          <span className="text-xs font-mono text-muted-foreground tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-px transition-all duration-300 ${i === current ? "w-8 bg-primary" : "w-4 bg-border hover:bg-muted-foreground"}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Prev/Next arrows */}
      <button
        onClick={prev}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-border/60 bg-background/40 backdrop-blur-sm flex items-center justify-center hover:border-primary/60 hover:bg-background/70 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-4 h-4 text-foreground" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 border border-border/60 bg-background/40 backdrop-blur-sm flex items-center justify-center hover:border-primary/60 hover:bg-background/70 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-4 h-4 text-foreground" />
      </button>

      {/* Bottom border */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-border/40 z-10" />
    </section>
  );
}
