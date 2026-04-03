import React, { useState, useEffect } from "react";
import { ArrowRight, ChevronDown, Zap, Shield, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useNavigate } from "react-router-dom";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import hero4 from "@/assets/hero4.jpg";
import hero5 from "@/assets/hero5.jpg";

// Floating icons
const floatingIcons = [
  { Icon: Zap, x: "10%", y: "20%", delay: 0 },
  { Icon: Shield, x: "85%", y: "15%", delay: 0.5 },
  { Icon: Code2, x: "75%", y: "70%", delay: 1 },
];

// Slides content
const slides = [
  {
    image: hero1,
    badge: "Digital Experts",
    headline: [
      { text: "Empowering Businesses", className: "text-primary" },
      { text: " with Smart IT Solutions" },
    ],
    subtext:
      "We deliver cutting-edge IT support, custom software, and digital services that help businesses grow, innovate, and succeed in a fast-changing digital world.",
    cta: ["Get Started", "Our Services"],
  },
  {
    image: hero2,
    badge: "Software Developers",
    headline: [
      { text: "Building", className: "text-primary" },
      { text: " High-Quality Custom Software" },
    ],
    subtext:
      "Our software development team creates tailored applications that meet your business needs, ensuring efficiency, scalability, and innovation.",
    cta: ["View Portfolio", "Learn More"],
  },
  {
    image: hero3,
    badge: "IT Installations",
    headline: [
      { text: "Seamless IT", className: "text-primary" },
      { text: " Installations & Networking" },
    ],
    subtext:
      "From office setups to advanced IT infrastructure, our experts ensure smooth installations and reliable network solutions.",
    cta: ["Contact Us", "Learn More"],
  },
  {
    image: hero4,
    badge: "IT Academy",
    headline: [
      { text: "Learn and Upskill", className: "text-primary" },
      { text: " in IT & Software" }
    ],
    subtext:
      "Our IT Academy provides hands-on training and mentorship for aspiring IT professionals, covering software development, networking, and digital services.",
    cta: ["Enroll Now", "Explore Courses"],
  },
  {
    image: hero5,
    badge: "Quick Office & Digital Services",
    headline: [
      { text: "Fast & Reliable" },
      { text: " Office Support Services", className: "text-primary" }
    ],
    subtext:
      "Printing, copying, scanning, graphic design, and other digital services — affordable, walk-in support for your office needs.",
    cta: ["Get Started", "Our Services"],
  },
];

// Available Tailwind text animation classes
const textAnimations = [
  "animate-fade-in",
  "animate-slide-in-left",
  "animate-slide-in-right",
  "animate-zoom-in",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [headlineAnim, setHeadlineAnim] = useState("");
  const [subtextAnim, setSubtextAnim] = useState("");
  const navigate = useNavigate();

  // Scroll function
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // CTA handler
  const handleCTA = (text) => {
    switch (text) {
      case "View Portfolio":
        navigate("/portfolio");
        break;
      case "Learn More":
        scrollTo("#services");
        break;
      case "Enroll Now":
        window.open("https://forms.gle/syunzNAKYmkMo1Yd7", "_blank");
        break;
      case "Explore Courses":
        navigate("/courses");
        break;
      case "Contact Us":
        scrollTo("#contact");
        break;
      case "Get Started":
      case "Our Services":
        scrollTo("#services");
        break;
      default:
        break;
    }
  };

  // Auto-slide with random text animations
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => {
        const next = (prev + 1) % slides.length;
        // Random animations for headline & subtext
        setHeadlineAnim(
          textAnimations[Math.floor(Math.random() * textAnimations.length)]
        );
        setSubtextAnim(
          textAnimations[Math.floor(Math.random() * textAnimations.length)]
        );
        return next;
      });
    }, 6000);

    // Set initial random animations
    setHeadlineAnim(
      textAnimations[Math.floor(Math.random() * textAnimations.length)]
    );
    setSubtextAnim(
      textAnimations[Math.floor(Math.random() * textAnimations.length)]
    );

    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 animate-grid-pulse"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, x, y, delay }, i) => (
        <div key={i} className="absolute hidden lg:block" style={{ left: x, top: y }}>
          <div
            className="w-14 h-14 rounded-xl bg-card/60 border border-border/50 backdrop-blur-sm flex items-center justify-center"
            style={{ animation: `bounce 3s ${i + delay}s infinite` }}
          >
            <Icon className="w-6 h-6 text-primary/70" />
          </div>
        </div>
      ))}

      {/* Background Image */}
      <img
        src={slide.image}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        {/* Badge */}
        <span className="mb-6 inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs uppercase">
          {slide.badge}
        </span>

        {/* Headline */}
        <h1 className={`text-4xl md:text-6xl font-bold ${headlineAnim}`}>
          {slide.headline.map((part, idx) => (
            <span key={idx} className={part.className || ""}>
              {part.text}
            </span>
          ))}
        </h1>

        {/* Subtext */}
        <p className={`mt-6 text-muted-foreground max-w-2xl mx-auto ${subtextAnim}`}>
          {slide.subtext}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          {slide.cta.map((text, idx) => (
            <Button
              key={idx}
              size="lg"
              className={`${
                idx === 0
                  ? "bg-primary text-white"
                  : "border border-border text-foreground"
              } px-10 py-2 rounded-xl flex items-center gap-2`}
              onClick={() => handleCTA(text)}
            >
              {text}
              {idx === 0 && <ArrowRight className="w-4 h-4 flex-shrink-0" />}
            </Button>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => scrollTo("#about")}
      >
        <ChevronDown />
      </div>
    </section>
  );
}