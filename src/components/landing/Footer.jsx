import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/camluk_logo.png";
import { Button } from "../ui/Button";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";

const footerSections = [
  {
    heading: "Company",
    links: [
      { label: "Home",      action: "scroll", target: "home" },
      { label: "About Us",  action: "scroll", target: "about" },
      { label: "Services",  action: "scroll", target: "services" },
      { label: "Contact",   action: "scroll", target: "contact" },
    ],
  },
  {
    heading: "Solutions",
    links: [
      { label: "AI Solutions", action: "route", target: "/ai-solutions" },
      { label: "Academy",      action: "route", target: "/academy" },
      { label: "Portfolio",    action: "route", target: "/portfolio" },
    ],
  },
  {
    heading: "AI Products",
    links: [
      { label: "NuSite",              action: "external", target: "https://nusitereimagined.netlify.app/" },
      { label: "Chenesa",             action: "route",    target: "/ai-solutions#ai-products" },
      { label: "Torga Lab Dashboard", action: "route",    target: "/ai-solutions#ai-products" },
    ],
  },
];

export default function Footer() {
  const navigate = useNavigate();

  const handleLink = (action, target) => {
    if (action === "external") {
      window.open(target, "_blank", "noopener noreferrer");
      return;
    }
    if (action === "route") {
      navigate(target);
      return;
    }
    // scroll
    if (target === "home") {
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      const el = document.querySelector(`#${target}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          document.querySelector(`#${target}`)?.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  };

  return (
    <footer className="relative border-t border-border/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div
              className="flex items-center gap-2 cursor-pointer mb-4"
              onClick={() => handleLink("scroll", "home")}
            >
              <div className="w-9 h-9 rounded-lg overflow-hidden">
                <img src={logo} alt="Camluk Technologies Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex items-baseline gap-0.5">
                <span className="text-lg font-bold tracking-tight text-foreground">Camluk</span>
                <span className="text-lg font-light text-primary">Tech</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
              Forward-thinking IT solutions and AI products. Based in Cape Town, South Africa.
            </p>
            {/* Social */}
            <div className="flex items-center gap-2.5 mt-5">
              {[
                { href: "https://www.linkedin.com/company/camluk/", label: "LinkedIn", Icon: FaLinkedinIn },
                { href: "https://www.facebook.com/camluktech/", label: "Facebook", Icon: FaFacebookF },
                { href: "https://www.instagram.com/camluktechnologies/", label: "Instagram", Icon: FaInstagram },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 flex items-center justify-center border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
                >
                  <Icon className="text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerSections.map(({ heading, links }) => (
            <div key={heading}>
              <h4 className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider mb-4">
                {heading}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, action, target }) => (
                  <li key={label}>
                    <button
                      onClick={() => handleLink(action, target)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left"
                    >
                      {label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/40">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Camluk Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <a href="mailto:info@camluk.co.za" className="hover:text-foreground transition-colors">
              info@camluk.co.za
            </a>
            <span className="text-border">|</span>
            <a href="tel:+27621071140" className="hover:text-foreground transition-colors">
              +27 62 107 1140
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}