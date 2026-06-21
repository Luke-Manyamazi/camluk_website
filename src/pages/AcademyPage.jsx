import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, Monitor, Users, Award, Clock,
  Check, MapPin, Wifi, BookOpen, ChevronRight
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
const stats = [
  { value: "200+", label: "Students Trained" },
  { value: "4",    label: "Courses Available" },
  { value: "95%",  label: "Completion Rate" },
  { value: "100%", label: "Certificate on Completion" },
];

const courses = [
  {
    id: "intro-computers",
    number: "01",
    emoji: "🖥️",
    title: "Introduction to Computers",
    tag: "Beginner",
    duration: "2 weeks · 10 hours",
    description:
      "Start from scratch — no experience needed. Learn what a computer is, how it works, and how to use Windows confidently for everyday tasks.",
    learns: [
      "Computer hardware: CPU, RAM, storage",
      "Windows navigation & file management",
      "Internet & browser basics",
      "Email setup (Gmail & Outlook)",
      "Basic typing and digital safety",
      "Introduction to cloud storage",
    ],
    price: "R199",
    priceNote: "per person",
    color: "blue",
  },
  {
    id: "ms-office",
    number: "02",
    emoji: "📊",
    title: "Microsoft Office Suite",
    tag: "Beginner–Intermediate",
    duration: "3 weeks · 15 hours",
    description:
      "Master the tools used in every office in South Africa. Word, Excel and PowerPoint — from formatting documents to building real spreadsheets.",
    learns: [
      "Word: formatting, tables & mail merge",
      "Excel: formulas, charts & pivot tables",
      "PowerPoint: slides, animations & presenting",
      "OneDrive & SharePoint collaboration",
      "Professional email etiquette in Outlook",
      "Real workplace assignments",
    ],
    price: "R249",
    priceNote: "per person",
    color: "green",
  },
  {
    id: "pc-repairs",
    number: "03",
    emoji: "🔧",
    title: "PC Repairs & Maintenance",
    tag: "Intermediate",
    duration: "4 weeks · 20 hours",
    description:
      "Hands-on training to diagnose, repair and maintain computers. Learn to assemble hardware, troubleshoot faults and clean up software — the practical skills employers want.",
    learns: [
      "Hardware components & assembly",
      "Installing Windows & drivers",
      "Diagnosing common faults",
      "Cleaning & optimising systems",
      "Malware removal & antivirus setup",
      "Basic networking (LAN/Wi-Fi setup)",
    ],
    price: "R299",
    priceNote: "per person",
    color: "orange",
  },
  {
    id: "web-dev",
    number: "04",
    emoji: "🌐",
    title: "Web Development Fundamentals",
    tag: "Beginner–Intermediate",
    duration: "6 weeks · 30 hours",
    description:
      "Build your first website from scratch. HTML, CSS and basic JavaScript — then deploy it live. The launchpad for a career in tech.",
    learns: [
      "HTML structure & semantic elements",
      "CSS styling, layout & flexbox",
      "Basic JavaScript & interactivity",
      "Responsive mobile-friendly design",
      "Git & GitHub version control",
      "Deploying a live website on Netlify",
    ],
    price: "R349",
    priceNote: "per person",
    color: "purple",
  },
];

const steps = [
  { n: "01", title: "Choose a course",      body: "Browse the catalogue and pick the course that fits your goals." },
  { n: "02", title: "Enrol online",         body: "Fill in the enrolment form and select online or in-person delivery." },
  { n: "03", title: "Start learning",       body: "Attend sessions, complete assignments and ask questions freely." },
  { n: "04", title: "Get your certificate", body: "Pass the final assessment and receive a Camluk Academy certificate." },
];

const colorMap = {
  blue:   { border: "border-blue-500/30",    bg: "bg-blue-500/8",    text: "text-blue-400",    badge: "bg-blue-500/15 text-blue-300 border-blue-500/30" },
  green:  { border: "border-emerald-500/30", bg: "bg-emerald-500/8", text: "text-emerald-400", badge: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30" },
  orange: { border: "border-orange-500/30",  bg: "bg-orange-500/8",  text: "text-orange-400",  badge: "bg-orange-500/15 text-orange-300 border-orange-500/30" },
  purple: { border: "border-violet-500/30",  bg: "bg-violet-500/8",  text: "text-violet-400",  badge: "bg-violet-500/15 text-violet-300 border-violet-500/30" },
};

/* ── component ──────────────────────────────────────────── */
export default function AcademyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* ════════════════════════════════════════
          HERO — editorial split layout
      ════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-24 pb-0">
        <div className="absolute -top-40 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-end py-20 lg:py-28">
            {/* left */}
            <div>
              <motion.span
                {...fadeUp(0)}
                className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-[0.2em] mb-6 block"
              >
                <span className="w-6 h-px bg-primary inline-block" />
                Camluk Academy · Cape Town
              </motion.span>

              <motion.h1
                {...fadeUp(0.06)}
                className="text-[clamp(3rem,8vw,5.5rem)] font-black tracking-tighter leading-[0.95] mb-8"
              >
                <span className="block">Skills that</span>
                <span className="block">get you</span>
                <span className="block text-primary">hired.</span>
              </motion.h1>

              <motion.p {...fadeUp(0.12)} className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-md">
                Practical IT training for beginners and professionals. In-person in Kensington, Cape Town — or online from anywhere.
              </motion.p>

              <motion.div {...fadeUp(0.16)} className="flex flex-wrap gap-4">
                <button
                  onClick={() => navigate("/academy/enrol")}
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 text-base hover:bg-primary/90 hover:gap-3 transition-all"
                >
                  Enrol Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="#courses"
                  className="inline-flex items-center gap-2 border-2 border-border text-foreground font-semibold px-8 py-4 text-base hover:border-primary hover:text-primary transition-all"
                >
                  View Courses
                </a>
              </motion.div>
            </div>

            {/* right — stat grid */}
            <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 gap-px bg-border/40 border border-border/40 self-end">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-background px-8 py-10 hover:bg-card/40 transition-colors">
                  <div className="text-4xl lg:text-5xl font-black text-primary mb-2 tracking-tighter">{value}</div>
                  <div className="text-sm text-muted-foreground font-mono">{label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* bottom stripe */}
        <div className="h-px bg-border/60" />
      </section>

      {/* ════════════════════════════════════════
          COURSES
      ════════════════════════════════════════ */}
      <section id="courses" className="relative">
        <div className="h-1 w-24 bg-primary ml-6 lg:ml-10 mt-0" />

        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div {...fadeUp(0)} className="grid lg:grid-cols-3 gap-8 mb-16">
            <div>
              <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Courses</span>
              <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
                Four courses. Real skills.
              </h2>
            </div>
            <div className="lg:col-span-2 lg:pt-14">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Every course is hands-on with real assignments. No fluff — just practical knowledge you can use on day one.
              </p>
            </div>
          </motion.div>

          <div className="space-y-px bg-border/30 border border-border/30 overflow-hidden">
            {courses.map((course, ci) => {
              const c = colorMap[course.color];
              return (
                <motion.div
                  key={course.id}
                  {...fadeUp(ci * 0.07)}
                  className="group grid lg:grid-cols-[1fr_1.4fr] bg-background hover:bg-card/30 transition-colors duration-300"
                >
                  {/* left */}
                  <div className="p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-border/30">
                    <div className="flex items-start gap-4 mb-6">
                      <span className="text-4xl select-none leading-none">{course.emoji}</span>
                      <div>
                        <span className={`inline-block text-[10px] font-mono px-2 py-0.5 border ${c.badge} mb-2`}>
                          {course.tag}
                        </span>
                        <p className="text-xs font-mono text-muted-foreground">{course.duration}</p>
                      </div>
                      <span className="ml-auto text-3xl font-black font-mono text-muted-foreground/20 leading-none select-none">
                        {course.number}
                      </span>
                    </div>

                    <h3 className="text-2xl font-black tracking-tight text-foreground mb-3">{course.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8">{course.description}</p>

                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <span className={`text-3xl font-black ${c.text}`}>{course.price}</span>
                        <span className="text-xs text-muted-foreground font-mono ml-2">{course.priceNote}</span>
                      </div>
                      <button
                        onClick={() => navigate(`/academy/enrol?course=${course.id}`)}
                        className={`group/btn inline-flex items-center gap-1.5 text-sm font-bold ${c.text} hover:gap-2.5 transition-all`}
                      >
                        Enrol <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>

                  {/* right — what you'll learn */}
                  <div className="p-8 lg:p-10">
                    <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-6">
                      What you'll learn
                    </p>
                    <ul className="grid sm:grid-cols-2 gap-3">
                      {course.learns.map((item, i) => (
                        <motion.li
                          key={item}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: i * 0.04 }}
                          className="flex items-start gap-3 text-sm"
                        >
                          <div className={`w-4 h-4 rounded-full border ${c.border} ${c.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                            <Check className={`w-2.5 h-2.5 ${c.text}`} />
                          </div>
                          <span className="text-muted-foreground leading-snug">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          HOW IT WORKS
      ════════════════════════════════════════ */}
      <section className="border-t border-border/60">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
          <motion.div {...fadeUp(0)} className="mb-14">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Process</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight">
              How it works.
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border/40 border border-border/40">
            {steps.map(({ n, title, body }, i) => (
              <motion.div
                key={n}
                {...fadeUp(i * 0.07)}
                className="group p-8 hover:bg-card/30 transition-colors"
              >
                <div className="text-[64px] font-black font-mono text-primary/10 leading-none mb-4 select-none group-hover:text-primary/20 transition-colors">
                  {n}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          DELIVERY MODES
      ════════════════════════════════════════ */}
      <section className="border-t border-border/60 bg-card/20">
        <div className="max-w-6xl mx-auto px-6 lg:px-10 py-20 lg:py-24">
          <motion.div {...fadeUp(0)} className="mb-10">
            <span className="text-xs font-mono text-primary uppercase tracking-widest block mb-4">Delivery</span>
            <h2 className="text-4xl font-black tracking-tighter">Learn your way.</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div {...fadeUp(0)} className="group border border-border/60 hover:border-primary/40 p-8 lg:p-10 transition-colors">
              <div className="w-12 h-12 border border-border/60 group-hover:border-primary/40 flex items-center justify-center mb-6 transition-colors">
                <Wifi className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-3">Online</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-6">
                Live sessions via Google Meet or Zoom. Learn from anywhere in South Africa at a flexible schedule that fits your life.
              </p>
              <ul className="space-y-2">
                {["Live instructor sessions", "Recordings to review after", "Chat support between sessions", "Digital certificate"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div {...fadeUp(0.08)} className="group border border-border/60 hover:border-primary/40 p-8 lg:p-10 transition-colors">
              <div className="w-12 h-12 border border-border/60 group-hover:border-primary/40 flex items-center justify-center mb-6 transition-colors">
                <MapPin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-3">In-Person</h3>
              <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                Hands-on training at our Kensington campus in Cape Town. Small class sizes, real equipment and direct instructor access.
              </p>
              <p className="text-xs font-mono text-muted-foreground mb-6">
                11th Street, Kensington, Cape Town 7405
              </p>
              <ul className="space-y-2">
                {["Small classes (max 10)", "Real hardware for PC Repairs", "Printed study material", "Physical certificate"].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-3.5 h-3.5 text-primary shrink-0" /> {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════
          CTA — full-bleed primary
      ════════════════════════════════════════ */}
      <section className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.15) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.15) 1px,transparent 1px)", backgroundSize: "48px 48px" }}
        />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeUp(0)}>
              <p className="text-primary-foreground/70 font-mono text-xs uppercase tracking-widest mb-6">Start Today</p>
              <h2 className="text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-primary-foreground mb-6">
                Your next skill is one click away.
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed">
                Enrol in any course today and take the first step toward a better career in tech. Courses start on a rolling basis — no need to wait.
              </p>
            </motion.div>
            <motion.div {...fadeUp(0.1)} className="flex flex-col gap-4 lg:items-end">
              <button
                onClick={() => navigate("/academy/enrol")}
                className="group inline-flex items-center gap-2 bg-primary-foreground text-primary font-black px-10 py-5 text-base hover:bg-primary-foreground/90 hover:gap-3 transition-all w-full sm:w-auto justify-center"
              >
                Enrol Now
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="mailto:info@camluk.co.za?subject=Academy Enquiry"
                className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground font-semibold px-10 py-5 text-base hover:border-primary-foreground hover:bg-primary-foreground/10 transition-all w-full sm:w-auto justify-center"
              >
                Email a Question
              </a>
              <p className="text-xs text-primary-foreground/50 font-mono text-center sm:text-right">
                Online & in-person · Starting from R199 · Certificate included
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
