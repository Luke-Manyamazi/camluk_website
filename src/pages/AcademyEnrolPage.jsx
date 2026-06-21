import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  GraduationCap, ArrowRight, CheckCircle2, ArrowLeft,
  User, Mail, Phone, BookOpen, MessageSquare, Loader2,
  Monitor, MapPin
} from "lucide-react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

const courses = [
  { id: "intro-computers", label: "Introduction to Computers",      price: "R199" },
  { id: "ms-office",       label: "Microsoft Office Suite",         price: "R249" },
  { id: "pc-repairs",      label: "PC Repairs & Maintenance",       price: "R299" },
  { id: "web-dev",         label: "Web Development Fundamentals",   price: "R349" },
];

const modes = [
  { value: "online",     label: "Online",     desc: "Self-paced, any device", Icon: Monitor },
  { value: "in-person",  label: "In-Person",  desc: "Cape Town training centre", Icon: MapPin },
];

export default function AcademyEnrolPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const prefillCourse = searchParams.get("course") || "";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    course: prefillCourse,
    mode: "online",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const selectedCourse = courses.find((c) => c.id === form.course);

  const handleChange = (e) => {
    setError("");
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.course) {
      setError("Please fill in your name, email, and select a course.");
      return;
    }
    setSubmitting(true);
    setError("");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          phone:      form.phone || "Not provided",
          subject:    `Academy Enrolment — ${selectedCourse?.label}`,
          message: `
Course: ${selectedCourse?.label} (${selectedCourse?.price})
Mode: ${form.mode === "online" ? "Online (Self-Paced)" : "In-Person (Cape Town)"}
Phone: ${form.phone || "Not provided"}

Additional notes:
${form.message || "None"}
          `.trim(),
          to_email: "info@camluk.co.za",
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong. Please try again or email us directly at info@camluk.co.za"
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        {/* Back */}
        <button
          onClick={() => navigate("/academy")}
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Academy
        </button>

        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Header */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-medium text-primary tracking-wider uppercase mb-4">
                  <GraduationCap className="w-3.5 h-3.5" />
                  Course Enrolment
                </span>
                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
                  Enrol in a Course
                </h1>
                <p className="text-muted-foreground">
                  Fill in your details and we'll get you set up within 24 hours.
                </p>
              </div>

              {/* Selected course summary */}
              {selectedCourse && (
                <div className="mb-6 p-4 border border-primary/20 bg-primary/5">
                  <p className="text-xs font-mono text-primary/70 uppercase tracking-wider mb-1">Selected Course</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{selectedCourse.label}</span>
                    <span className="text-primary font-bold text-lg">{selectedCourse.price}</span>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-secondary/40 border border-border/60 focus:border-primary/60 focus:outline-none text-foreground placeholder:text-muted-foreground/50 text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full pl-10 pr-4 py-3 bg-secondary/40 border border-border/60 focus:border-primary/60 focus:outline-none text-foreground placeholder:text-muted-foreground/50 text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+27 XX XXX XXXX"
                      className="w-full pl-10 pr-4 py-3 bg-secondary/40 border border-border/60 focus:border-primary/60 focus:outline-none text-foreground placeholder:text-muted-foreground/50 text-sm transition-colors"
                    />
                  </div>
                </div>

                {/* Course */}
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Course <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                    <select
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-secondary/40 border border-border/60 focus:border-primary/60 focus:outline-none text-foreground text-sm transition-colors appearance-none cursor-pointer"
                    >
                      <option value="">Select a course…</option>
                      {courses.map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.label} — {c.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Mode */}
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Learning Mode
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {modes.map(({ value, label, desc, Icon }) => (
                      <label key={value} className="cursor-pointer">
                        <input
                          type="radio"
                          name="mode"
                          value={value}
                          checked={form.mode === value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div
                          className={`flex items-start gap-3 p-4 border transition-all ${
                            form.mode === value
                              ? "border-primary bg-primary/10 text-foreground"
                              : "border-border/60 text-muted-foreground hover:border-primary/40"
                          }`}
                        >
                          <Icon className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
                          <div>
                            <p className="text-sm font-medium">{label}</p>
                            <p className="text-xs text-muted-foreground">{desc}</p>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-muted-foreground uppercase tracking-wider mb-2">
                    Additional Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Any questions or special requirements?"
                      rows={3}
                      className="w-full pl-10 pr-4 py-3 bg-secondary/40 border border-border/60 focus:border-primary/60 focus:outline-none text-foreground placeholder:text-muted-foreground/50 text-sm resize-none transition-colors"
                    />
                  </div>
                </div>

                {error && (
                  <div className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 px-4 py-3">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-4 hover:bg-primary/90 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Submitting…
                    </>
                  ) : (
                    <>
                      <GraduationCap className="w-4 h-4" />
                      Submit Enrolment
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-muted-foreground">
                  We'll contact you within 24 hours to confirm your access and next steps.
                </p>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-16"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Enrolment Submitted!</h2>
              <p className="text-muted-foreground mb-1 max-w-md mx-auto">
                Thank you, <span className="text-foreground font-medium">{form.name}</span>! We've received your enrolment for{" "}
                <span className="text-foreground font-medium">{selectedCourse?.label}</span>.
              </p>
              <p className="text-muted-foreground text-sm mb-8">
                We'll contact you at{" "}
                <span className="text-foreground">{form.email}</span> within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={() => navigate("/academy")}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-6 py-3 hover:bg-primary/90 transition-colors"
                >
                  Back to Academy
                </button>
                <button
                  onClick={() => navigate("/")}
                  className="inline-flex items-center gap-2 border border-border text-foreground font-medium px-6 py-3 hover:border-primary/40 transition-colors"
                >
                  Go Home
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}
