import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/camluk_logo.png";
import { Button } from "../ui/Button";
import { FaLinkedinIn, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const navigate = useNavigate();

  const handleScroll = (section) => {
    if (section === "home") {
      // Always go to top of page
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const el = document.querySelector(`#${section}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        // Navigate to home first, then scroll
        navigate("/");
        setTimeout(() => {
          const target = document.querySelector(`#${section}`);
          if (target) target.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  };

  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Footer Logo + Text */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleScroll("home")}>
            <div className="w-9 h-9 rounded-lg overflow-hidden">
              <img
                src={logo}
                alt="Camluk Technologies Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex items-baseline gap-0.5">
              <span className="text-lg font-bold tracking-tight text-foreground">
                Camluk
              </span>
              <span className="text-lg font-light text-primary">Tech</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["home", "about", "services", "contact"].map((section) => (
              <Button
                key={section}
                onClick={() => handleScroll(section)}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                ariaLabel={`Go to ${section}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/company/camluk-technologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-8 h-8 flex items-center justify-center border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
            <a
              href="https://facebook.com/camluk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 flex items-center justify-center border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <FaFacebookF className="text-sm" />
            </a>
            <a
              href="https://instagram.com/camluk_tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-8 h-8 flex items-center justify-center border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <FaInstagram className="text-sm" />
            </a>
            <a
              href="https://x.com/camluk_tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X / Twitter"
              className="w-8 h-8 flex items-center justify-center border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <FaXTwitter className="text-sm" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground text-center md:text-right">
            © {new Date().getFullYear()} Camluk Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}