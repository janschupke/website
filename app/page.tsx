"use client";

import { useEffect } from "react";
import Image from "next/image";
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import SocialLink from "./components/SocialLink";
import UpworkIcon from "./components/UpworkIcon";

export default function Home() {
  useEffect(() => {
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-8");
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.observe(section);
      // Check if section is already visible on mount
      const rect = section.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.right > 0;
      if (isVisible) {
        section.classList.add("opacity-100", "translate-y-0");
        section.classList.remove("opacity-0", "translate-y-8");
      }
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      name: "Dashboard",
      description:
        "A market data dashboard featuring real-time financial data, cryptocurrency prices, weather forecasts, etc.",
      url: "https://dashboard.schupke.io",
      github: "https://github.com/janschupke/dashboard",
      images: [
        "/images/dashboard/dashboard01.png",
        "/images/dashboard/dashboard02.png",
        "/images/dashboard/dashboard03.png",
        "/images/dashboard/dashboard04.png",
        "/images/dashboard/dashboard05.png",
      ],
    },
    {
      name: "Lines",
      description:
        "A turn-based puzzle game where you form lines of colored balls on a 9x9 grid while preventing the board from filling up.",
      url: "https://lines.schupke.io",
      github: "https://github.com/janschupke/lines",
      images: [
        "/images/lines/lines01.png",
        "/images/lines/lines02.png",
        "/images/lines/lines03.png",
      ],
    },
    {
      name: "Agents",
      description:
        "Build custom language assistants that correct your language use, extract vocabulary, and create flashcards. Your saved words are highlighted in all chats with hover hints, and agents remember your conversations to develop relationships over time.",
      url: "https://agents.schupke.io",
      github: null,
      images: ["/images/agents/agents01.png", "/images/agents/agents02.png"],
    },
    {
      name: "Flashcards",
      description:
        "A browser tool for Chinese characters recognition, containing a set of 1500 most common characters.",
      url: "https://flashcards.schupke.io",
      github: "https://github.com/janschupke/flashcards",
      images: [
        "/images/flashcards/flashcards01.png",
        "/images/flashcards/flashcards02.png",
        "/images/flashcards/flashcards03.png",
        "/images/flashcards/flashcards04.png",
      ],
    },
    {
      name: "Flags",
      description: "A flag recognition quiz tool in a flashcard style.",
      url: "https://flags.schupke.io",
      github: "https://github.com/janschupke/flags",
      images: ["/images/flags/flags01.png"],
    },
  ];

  return (
    <div className="min-h-screen bg-background-primary">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
        {/* Header */}
        <header className="text-center mb-12 animate-fadeInDown">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="relative w-[200px] h-[200px] flex-shrink-0">
              <Image
                src="/photo.jpg"
                alt="Jan Schupke"
                fill
                className="rounded-full object-cover border-4 border-background-secondary shadow-image animate-fadeInLeftDelayed"
              />
            </div>
            <div className="text-center sm:text-left animate-fadeInRightDelayed">
              <h1 className="text-3xl sm:text-4xl font-bold text-text-primary mb-2">
                Jan Schupke
              </h1>
              <p className="text-lg sm:text-xl text-text-tertiary mb-4">Software Engineer</p>
              <div className="text-text-muted text-sm space-y-1">
                <p>
                  <i className="fas fa-envelope mr-2"></i>
                  <a
                    href="mailto:jan@schupke.io"
                    className="hover:text-text-primary transition-colors"
                  >
                    jan@schupke.io
                  </a>
                </p>
                <p>
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Taipei, Taiwan
                </p>
              </div>
              <div className="flex gap-4 mt-4 justify-center sm:justify-start">
                <SocialLink
                  href="https://github.com/janschupke"
                  title="GitHub"
                  icon={<i className="fab fa-github"></i>}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/janschupke/"
                  title="LinkedIn"
                  icon={<i className="fab fa-linkedin"></i>}
                />
                <SocialLink
                  href="https://www.upwork.com/freelancers/janschupke"
                  title="Upwork"
                  icon={<UpworkIcon />}
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="bg-background-secondary rounded-lg p-6 sm:p-12 shadow-md animate-fadeInUpDelayed">
          <Section title="About">
            <div className="prose prose-gray max-w-none">
              <p className="text-text-secondary leading-relaxed text-base sm:text-lg mb-4">
                Fullstack Engineer with 10 years of experience in developing and maintaining large-scale web applications, leveraging expertise in React, Node, and PostgreSQL. Proficient in integrating complex user interfaces and collaborating within diverse teams to enhance project outcomes. Demonstrated ability to mentor peers and streamline workflows, particularly in remote settings. Fluent in multiple languages and experienced with agile methodologies and leadership practices, enabling eﬀective communication in international environments.
              </p>
            </div>
          </Section>

          <Section title="Personal Projects">
            <div className="flex flex-col gap-6 lg:gap-8">
              {projects.map((project) => (
                <ProjectCard
                  key={project.name}
                  name={project.name}
                  description={project.description}
                  url={project.url}
                  github={project.github}
                  images={project.images}
                />
              ))}
            </div>
          </Section>
        </main>
      </div>
    </div>
  );
}
