import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Home } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";

export default function PageNotFound() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const suggestions = [
    { label: "Home",         path: "/" },
    { label: "AI Solutions", path: "/ai-solutions" },
    { label: "Academy",      path: "/academy" },
    { label: "Portfolio",    path: "/portfolio" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center relative overflow-hidden">
        {/* bg glow */}
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-10 w-full py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — giant number */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="select-none"
            >
              <div className="text-[clamp(8rem,22vw,16rem)] font-black tracking-tighter leading-none text-primary/15 lg:text-primary/20">
                404
              </div>
            </motion.div>

            {/* Right — content */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono text-primary uppercase tracking-[0.2em] mb-6 block">
                <span className="w-6 h-px bg-primary inline-block" />
                Page Not Found
              </span>

              <h1 className="text-4xl sm:text-5xl font-black tracking-tighter leading-tight mb-4">
                This page doesn't exist.
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-2">
                <span className="font-mono text-sm text-border bg-card/60 px-2 py-1">{pathname}</span>
              </p>

              <p className="text-muted-foreground leading-relaxed mb-10">
                The page may have been moved, deleted, or the URL might be wrong. Try one of the links below.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 mb-12">
                <button
                  onClick={() => navigate("/")}
                  className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-4 text-base hover:bg-primary/90 hover:gap-3 transition-all"
                >
                  <Home className="w-4 h-4" />
                  Go Home
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => window.history.back()}
                  className="inline-flex items-center gap-2 border-2 border-border text-foreground font-semibold px-8 py-4 text-base hover:border-primary hover:text-primary transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Go Back
                </button>
              </div>

              {/* Suggestions */}
              <div>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
                  Or go to
                </p>
                <div className="divide-y divide-border/40 border-t border-border/40">
                  {suggestions.map(({ label, path }) => (
                    <button
                      key={path}
                      onClick={() => navigate(path)}
                      className="group w-full flex items-center justify-between py-3.5 hover:bg-card/30 -mx-2 px-2 transition-colors text-left"
                    >
                      <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{label}</span>
                      <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function ChevronRight({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
