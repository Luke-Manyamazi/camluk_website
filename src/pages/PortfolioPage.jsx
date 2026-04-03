import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Folder } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import hero1 from "@/assets/hero1.jpg";

// Camluk projects/products
export const PROJECTS = [
  {
    id: 1,
    title: "CYFOverflow",
    description:
      "A Q&A platform enabling communities to ask questions and collaborate effectively. Powered with API-driven data fetching for seamless user experience.",
    techStack: ["JavaScript", "HTML", "CSS", "REST APIs"],
    link: "https://cyfoverflow.hosting.codeyourfuture.io/",
    githubLink: "https://github.com/Luke-Manyamazi/CYFoverflow",
  },
  {
    id: 2,
    title: "Pop & Chill TV Explorer",
    description:
      "An interactive TV show discovery platform using TMDB API with trailer integration. Optimized for fast API response and smooth rendering.",
    techStack: ["JavaScript", "TMDB API", "YouTube Integration", "Netlify"],
    link: "https://popandchill.netlify.app/",
    githubLink:
      "https://github.com/Luke-Manyamazi/Pop-and-Chill-Movie-Explorer-App",
  },
  {
    id: 3,
    title: "Real-Time Group Chat",
    description:
      "WebSocket-powered messaging platform for instant communication and live user tracking. Built for efficient real-time collaboration.",
    techStack: ["WebSocket", "Node.js", "JavaScript", "CSS"],
    link: "https://luke-chat-app-frontend.hosting.codeyourfuture.io/",
    githubLink: "https://github.com/Luke-Manyamazi/Chat-App",
  },
  {
    id: 4,
    title: "Quote Generator",
    description:
      "A dynamic platform fetching random quotes from a custom backend API. Optimized routes reduce latency and improve performance.",
    techStack: ["Node.js", "JavaScript", "Express"],
    link: "https://luke-quote-app-frontend.hosting.codeyourfuture.io/",
    githubLink: "https://github.com/Luke-Manyamazi/Quote-App",
  },
];

export default function PortfolioPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mt-20 text-center py-32 px-4 sm:px-6 bg-cover bg-center rounded-xl"
        style={{ backgroundImage: `url(${hero1})` }}
      >
        <div className="absolute inset-0 bg-black/70 rounded-xl"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
            Camluk Projects
          </h1>
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Explore selected products and solutions developed by Camluk. From
            web platforms to real-time applications, see our expertise in
            action.
          </p>
        </div>
      </motion.div>

      {/* Projects Section */}
      <section className="py-20 container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card p-6 rounded-2xl flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center justify-between mb-6">
                <Folder size={40} className="text-primary" />
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      aria-label="View source code on GitHub"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      aria-label="Visit project website"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <a
                href={project.link}
                aria-label="Visit project website"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary hover:underline transition-all">
                  {project.title}
                </h3>
              </a>

              <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-x-4 gap-y-2 mt-auto">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-primary/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-16 text-center px-4 sm:px-6"
      >
        <p className="text-lg text-muted-foreground mb-4">
          Interested in partnering with Camluk or learning more?
        </p>
        <a
          href="mailto:info@camluk.co.za"
          aria-label="Contact Camluk Technologies via email"
          className="inline-block bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-xl font-semibold transition"
        >
          Contact Us
        </a>
      </motion.div>
      <div>
        <br></br>
        <br></br>
      </div>
      <Footer />
    </div>
  );
}
