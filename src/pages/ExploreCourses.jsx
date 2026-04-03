import React from "react";
import { Button } from "@/components/ui/Button";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import teamImg from "@/assets/team.webp";

// Short courses
const shortCourses = [
  {
    title: "Introduction to Computers",
    description:
      "Learn the fundamentals of computers, including hardware, software, and basic operations.",
    delivery: "Online / In-person",
  },
  {
    title: "Microsoft Office Basics",
    description:
      "Hands-on training with Word, Excel, PowerPoint, and Outlook — essential skills for any office environment.",
    delivery: "Online / In-person",
  },
  {
    title: "PC Repairs Basics",
    description:
      "Learn basic troubleshooting, maintenance, and repair skills for personal computers.",
    delivery: "Online / In-person",
  },
  {
    title: "Introduction to Web Development",
    description:
      "Get started with web development using HTML, CSS, and JavaScript to build simple web pages.",
    delivery: "Online / In-person",
  },
];

export default function ExploreCourses() {
  const googleFormLink = "https://forms.gle/syunzNAKYmkMo1Yd7";

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative text-center py-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${teamImg})` }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white">
            Explore Our Short Courses
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Short certificate courses designed to build practical IT and
            software skills. Delivered online or in-person.
          </p>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding py-16 px-6 max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 gap-8">
          {shortCourses.map((course, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 flex flex-col justify-between"
            >
              <div>
                <h2 className="text-xl font-bold text-foreground">
                  {course.title}
                </h2>
                <p className="mt-2 text-muted-foreground">
                  {course.description}
                </p>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-medium text-primary">
                  {course.delivery}
                </span>
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md"
                  onClick={() => window.open(googleFormLink, "_blank")}
                >
                  Enroll
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
