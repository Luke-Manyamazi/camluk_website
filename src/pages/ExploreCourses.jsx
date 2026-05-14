import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import teamImg from "@/assets/team.webp";
import { BookOpen, Clock, BarChart2, GraduationCap, ArrowRight, CheckCircle2, ExternalLink } from "lucide-react";

const ACADEMY_URL = "https://academy.camluk.co.za/";

const shortCourses = [
  {
    icon: "💻",
    title: "Introduction to Computers",
    description: "Learn the fundamentals of computers from the ground up — hardware, software, and basic operations.",
    duration: "3 Weeks",
    level: "Beginner",
    price: "R199",
    courseId: "intro-to-computers",
    learns: [
      "How hardware components work together",
      "Difference between software & operating systems",
      "File management and basic troubleshooting",
    ],
  },
  {
    icon: "📊",
    title: "Microsoft Office Basics",
    description: "Hands-on training with Word, Excel, and PowerPoint — essential skills for any office environment.",
    duration: "4 Weeks",
    level: "Beginner",
    price: "R249",
    courseId: "ms-office-basics",
    learns: [
      "Create professional documents in Word",
      "Build and format spreadsheets in Excel",
      "Design presentations in PowerPoint",
    ],
  },
  {
    icon: "🔧",
    title: "PC Repairs Basics",
    description: "Learn to diagnose, repair, and maintain personal computers — from hardware to software issues.",
    duration: "4 Weeks",
    level: "Beginner",
    price: "R299",
    courseId: "pc-repairs-basics",
    learns: [
      "ESD safety and workshop best practices",
      "Diagnose common hardware faults",
      "Reinstall operating systems and drivers",
    ],
  },
  {
    icon: "🌐",
    title: "Introduction to Web Development",
    description: "Get started with HTML, CSS, and JavaScript — build your first web pages from scratch.",
    duration: "6 Weeks",
    level: "Beginner",
    price: "R349",
    courseId: "intro-to-webdev",
    learns: [
      "Structure pages with HTML",
      "Style layouts with CSS",
      "Add interactivity with JavaScript",
    ],
  },
];

const levelColor = {
  Beginner:     "text-green-400 bg-green-400/10",
  Intermediate: "text-yellow-400 bg-yellow-400/10",
  Advanced:     "text-red-400 bg-red-400/10",
};

export default function ExploreCourses() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section
        className="relative text-center py-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${teamImg})` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-block bg-primary/20 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-5 uppercase tracking-wider">
            Short Certificate Courses
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Build Real Skills.<br />Earn a Certificate.
          </h1>
          <p className="mt-4 text-lg text-white/85 max-w-xl mx-auto">
            Practical IT and software courses delivered online at your own pace,
            or in-person at our training centre.
          </p>
          <a
            href={ACADEMY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            <GraduationCap size={18} /> Open Academy <ExternalLink size={14} />
          </a>
        </div>
      </section>

      {/* Academy CTA Banner */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/20 rounded-2xl p-7 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 shrink-0">
            <GraduationCap className="text-primary" size={28} />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-lg font-bold">Learn online at your own pace</h2>
            <p className="text-muted-foreground text-sm mt-1">
              The Camluk Academy gives you all four courses, module quizzes, progress tracking,
              and a certificate on completion — accessible from any device.
            </p>
          </div>
          <a
            href={ACADEMY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm"
          >
            <BookOpen size={16} /> Open Academy
          </a>
        </div>
      </section>

      {/* Course cards */}
      <section className="section-padding py-6 px-6 max-w-5xl mx-auto pb-20">
        <h2 className="text-2xl font-bold mb-1">Available Courses</h2>
        <p className="text-muted-foreground text-sm mb-8">
          Once-off payment · Lifetime access · Certificate included
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {shortCourses.map((course) => (
            <div
              key={course.courseId}
              className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <span className="text-3xl">{course.icon}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 ${levelColor[course.level]}`}>
                    <BarChart2 size={11} /> {course.level}
                  </span>
                  <span className="text-lg font-bold text-primary">{course.price}</span>
                </div>
              </div>

              {/* Title + description */}
              <div>
                <h3 className="text-lg font-bold text-foreground">{course.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{course.description}</p>
              </div>

              {/* What you'll learn */}
              <ul className="flex flex-col gap-1.5">
                {course.learns.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 size={13} className="text-green-400 shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Meta */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                <span className="flex items-center gap-1"><BookOpen size={12} /> Online / In-person</span>
              </div>

              {/* CTA */}
              <div className="mt-auto pt-3 border-t border-border">
                <a
                  href={`${ACADEMY_URL}courses/${course.courseId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-4 py-2.5 rounded-lg hover:bg-primary/90 transition-colors text-sm"
                >
                  Start Learning — {course.price} <ArrowRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
