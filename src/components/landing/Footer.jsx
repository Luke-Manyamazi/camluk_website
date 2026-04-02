import React from "react";
import { Terminal } from "lucide-react";
import logo from "@/assets/camluk_logo.png";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Footer Logo + Text */}
          <div className="flex items-center gap-2">
            {/* Logo Image */}
            <div className="w-9 h-9 rounded-lg overflow-hidden">
              <img
                src={logo} 
                alt="Camluk Technologies Logo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex items-baseline gap-0.5">
              <span className="text-lg font-bold tracking-tight text-foreground">
                Camluk
              </span>
              <span className="text-lg font-light text-primary">Tech</span>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <button
                key={link}
                onClick={() => {
                  const el = document.querySelector(`#${link.toLowerCase()}`);
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {link}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Camluk Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
