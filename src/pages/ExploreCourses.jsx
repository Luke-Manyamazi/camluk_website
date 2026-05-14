import React from "react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import teamImg from "@/assets/team.webp";
import { ExternalLink, BookOpen, Clock, BarChart2, GraduationCap } from "lucide-react";

const ACADEMY_URL = "/academy/"; // Update when academy is deployed

const shortCourses = [
  {
    icon: "💻",
    title: "Introduction to Computers",
    description:
      "Learn the fundamentals of computers, including hardware, software, and basic operations.",
    duration: "2–3 hours",
    level: "Beginner",
    delivery: "Online / In-person",
    courseId: "intro-to-computers",
  },
  {
    icon: "📊",
    title: "Microsoft Office Basics",
    description:
      "Hands-on training with Word, Excel, PowerPoint, and Outlook — essential skills for any office environment.",
    duration: "3–4 hours",
    level: "Beginner",
    delivery: "Online / In-person",
    courseId: "ms-office-basics",
  },
  {
    icon: "🔧",
    title: "PC Repairs Basics",
    description:
      "Learn basic troubleshooting, maintenance, and repair skills for personal computers.",
    duration: "2–3 hours",
    level: "Beginner",
    delivery: "Online / In-person",
    courseId: "pc-repairs-basics",
  },
  {
    icon: "🌐",
    title: "Introduction to Web Development",
    description:
      "Get started with web development using HTML, CSS, and JavaScript to build simple web pages.",
    duration: "4–5 hours",
    level: "Beginner",
    delivery: "Online / In-person",
    courseId: "intro-to-webdev",
  },
];

const levelColor = {
  Beginner: "text-green-400 bg-green-400/10",
  Intermediate: "text-yellow-400 bg-yellow-400/10",
  Advanced: "text-red-400 bg-red-400/10",
};

export default function ExploreCourses() {
  const googleFormLink = "https://forms.gle/syunzNAKYmkMo1Yd7";

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section
        className="relative text-center py-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${teamImg})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Explore Our Short Courses
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Short certificate courses designed to build practical IT and software skills.
            Delivered online or in-person.
          </p>
        </div>
      </section>

      {/* Academy CTA Banner */}
      <section className="py-10 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/20 via-primary/10 to-transparent border border-primary/20 rounded-2xl p-8 flex flex-col sm:flex-row items-center gap-6">
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 shrink-0">
            <GraduationCap className="text-primary" size={32} />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold">Learn online at your own pace</h2>
            <p className="text-muted-foreground text-sm mt-1">
              Access the Camluk Academy — our free self-paced learning platform with all four courses,
              quizzes, progress tracking, and a certificate on completion.
            </p>
          </div>
          <a
            href={ACADEMY_URL}
            className="shrink-0 flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-xl hover:bg-primary/90 transition-colors"
          >
            <BookOpen size={18} />
            Open Academy
          </a>
        </div>
      </section>

      {/* Courses */}
      <section className="section-padding py-8 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">Available Courses</h2>
        <p className="text-muted-foreground text-sm mb-8">
          Enroll in-person / online via our form, or start immediately on the Academy platform.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {shortCourses.map((course) => (
            <div
              key={course.courseId}
              className="bg-card border border-border rounded-xl p-6 flex flex-col gap-4 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-3xl">{course.icon}</span>
                <span className={`text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1 ${levelColor[course.level]}`}>
                  <BarChart2 size={11} /> {course.level}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-foreground">{course.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{course.description}</p>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock size={12} /> {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <BookOpen size={12} /> {course.delivery}
                </span>
              </div>

              <div className="mt-auto pt-3 border-t border-border flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
                  onClick={() => window.open(googleFormLink, "_blank")}
                >
                  Enroll (in-person)
                </Button>
                <a
                  href={`${ACADEMY_URL}courses/${course.courseId}`}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-md border border-border text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                  title="Start online"
                >
                  <ExternalLink size={14} />
                  Online
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
