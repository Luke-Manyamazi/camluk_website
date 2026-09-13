import React from "react";
import logo from "@/assets/camluk_logo.png";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from "react-icons/fa6";

const footerSections = [
  { heading: "Company", links: [{ label: "Home", target: "home" }, { label: "About", target: "about" }, { label: "Services", target: "services" }, { label: "Contact", target: "contact" }] },
  { heading: "Services", links: [{ label: "IT Support & Systems", target: "services" }, { label: "Web Development", target: "services" }, { label: "Business Software", target: "services" }, { label: "WhatsApp Commerce", target: "services" }, { label: "AI & Automation", target: "services" }] },
  { heading: "Get Started", links: [{ label: "Request a Quote", target: "contact" }, { label: "Start on WhatsApp", target: "contact" }, { label: "How We Work", target: "process" }] },
];

export default function Footer({ onNavigate }) {
  const handleLink = (target) => {
    if (onNavigate) {
      onNavigate(target);
      return;
    }
    if (target === "home") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-border/50 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
          <div className="col-span-2 md:col-span-1">
            <button className="flex items-center gap-2 cursor-pointer mb-4" onClick={() => handleLink("home")} aria-label="Go to Camluk home">
              <div className="w-9 h-9 rounded-lg overflow-hidden"><img src={logo} alt="Camluk Technologies Logo" className="w-full h-full object-cover" loading="lazy" /></div>
              <div className="flex items-baseline gap-0.5"><span className="text-lg font-bold tracking-tight text-foreground">Camluk</span><span className="text-lg font-light text-primary">Tech</span></div>
            </button>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-[240px]">Simply Automated. Practical IT, software, automation and digital systems for businesses across Southern Africa and remotely.</p>
            <div className="flex items-center gap-2.5 mt-5">
              {[{ href: "https://www.linkedin.com/company/camluk/", label: "LinkedIn", Icon: FaLinkedinIn }, { href: "https://www.facebook.com/camluktech/", label: "Facebook", Icon: FaFacebookF }, { href: "https://www.instagram.com/camluktechnologies/", label: "Instagram", Icon: FaInstagram }].map(({ href, label, Icon }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="w-8 h-8 flex items-center justify-center border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"><Icon className="text-sm" /></a>)}
            </div>
          </div>
          {footerSections.map(({ heading, links }) => <div key={heading}><h4 className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider mb-4">{heading}</h4><ul className="space-y-2.5">{links.map(({ label, target }) => <li key={label}><button onClick={() => handleLink(target)} className="text-sm text-muted-foreground hover:text-foreground transition-colors text-left">{label}</button></li>)}</ul></div>)}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-border/40">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Camluk Technologies. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground"><a href="mailto:support@camluk.co.za" className="hover:text-foreground transition-colors">support@camluk.co.za</a><span className="text-border">|</span><a href="tel:+27621071140" className="hover:text-foreground transition-colors">+27 62 107 1140</a></div>
        </div>
      </div>
    </footer>
  );
}
