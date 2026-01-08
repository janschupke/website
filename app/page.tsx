'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import ImageCarousel from './components/ImageCarousel';

export default function Home() {
  useEffect(() => {
    // Add scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('.section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const projects = [
    {
      name: 'Lines',
      description: 'A turn-based puzzle game where you form lines of colored balls on a 9x9 grid while preventing the board from filling up.',
      url: 'https://lines.schupke.io',
      github: 'https://github.com/janschupke/lines',
      images: [
        '/images/lines/lines01.png',
        '/images/lines/lines02.png',
        '/images/lines/lines03.png',
      ],
    },
    {
      name: 'Flags',
      description: 'A flag recognition quiz tool in a flashcard style.',
      url: 'https://flags.schupke.io',
      github: 'https://github.com/janschupke/flags',
      images: [
        '/images/flags/flags01.png',
      ],
    },
    {
      name: 'Flashcards',
      description: 'A browser tool for Chinese characters recognition, containing a set of 1500 most common characters.',
      url: 'https://flashcards.schupke.io',
      github: 'https://github.com/janschupke/flashcards',
      images: [
        '/images/flashcards/flashcards01.png',
        '/images/flashcards/flashcards02.png',
        '/images/flashcards/flashcards03.png',
        '/images/flashcards/flashcards04.png',
      ],
    },
    {
      name: 'Agents',
      description: 'A platform for building and managing AI agents with advanced capabilities and integrations.',
      url: 'https://agents.schupke.io',
      github: null,
      images: [
        '/images/agents/agents01.png',
        '/images/agents/agents02.png',
      ],
    },
    {
      name: 'Dashboard',
      description: 'A comprehensive market data dashboard featuring real-time financial data, cryptocurrency prices, weather forecasts, and more.',
      url: 'https://dashboard.schupke.io',
      github: 'https://github.com/janschupke/dashboard',
      images: [
        '/images/dashboard/dashboard01.png',
        '/images/dashboard/dashboard02.png',
        '/images/dashboard/dashboard03.png',
        '/images/dashboard/dashboard04.png',
        '/images/dashboard/dashboard05.png',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-8">
        {/* Header */}
        <header className="text-center mb-12 animate-[fadeInDown_1s_ease-out]">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="relative w-[200px] h-[200px] flex-shrink-0">
              <Image
                src="/photo.jpg"
                alt="Jan Schupke"
                fill
                className="rounded-full object-cover border-4 border-white shadow-lg animate-[fadeInLeft_1s_ease-out_0.3s_both]"
              />
            </div>
            <div className="text-center sm:text-left animate-[fadeInRight_1s_ease-out_0.6s_both]">
              <h1 className="text-3xl sm:text-4xl font-bold text-black mb-2">Jan Schupke</h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-4">Software Engineer</p>
              <div className="text-gray-600 text-sm space-y-1">
                <p>
                  <i className="fas fa-envelope mr-2"></i>
                  <a href="mailto:jan@schupke.io" className="hover:text-black transition-colors">
                    jan@schupke.io
                  </a>
                </p>
                <p>
                  <i className="fas fa-map-marker-alt mr-2"></i>
                  Vantaa, Finland
                </p>
                <p>
                  <i className="fas fa-flag mr-2"></i>
                  Czech, Finnish
                </p>
              </div>
              <div className="flex gap-4 mt-4 justify-center sm:justify-start">
                <a
                  href="https://github.com/janschupke"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="text-2xl text-gray-800 hover:text-black hover:-translate-y-1 transition-all duration-300"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/janschupke/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="text-2xl text-gray-800 hover:text-black hover:-translate-y-1 transition-all duration-300"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://soundcloud.com/jan-schupke"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="SoundCloud"
                  className="text-2xl text-gray-800 hover:text-black hover:-translate-y-1 transition-all duration-300"
                >
                  <i className="fab fa-soundcloud"></i>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="bg-white rounded-lg p-6 sm:p-12 shadow-md animate-[fadeInUp_1s_ease-out_0.9s_both]">
          <section className="section mb-12 opacity-0 translate-y-8 transition-all duration-800">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6 pb-2 border-b-2 border-black">
              About
            </h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">
                I'm a software engineer passionate about building innovative web applications and tools.
                I enjoy creating user-friendly interfaces, solving complex problems, and exploring new technologies.
              </p>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                Below are some of my personal projects that showcase my work in web development,
                game design, and data visualization.
              </p>
            </div>
          </section>

          <section className="section mb-12 opacity-0 translate-y-8 transition-all duration-800">
            <h2 className="text-2xl sm:text-3xl font-semibold text-black mb-6 pb-2 border-b-2 border-black">
              Personal Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {projects.map((project, index) => (
                <div
                  key={project.name}
                  className="flex flex-col bg-gray-50 p-6 rounded-xl shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-4">
                    <ImageCarousel
                      images={project.images}
                      alt={`${project.name} Project`}
                    />
                  </div>
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h3 className="text-xl font-semibold text-black mb-3">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-3 flex-wrap mt-4 justify-center sm:justify-start">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-black font-medium text-sm px-4 py-2 border-2 border-black rounded-md hover:bg-black hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      Visit
                    </a>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-gray-800 font-medium text-sm px-4 py-2 border-2 border-gray-800 rounded-md hover:bg-gray-800 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <i className="fab fa-github"></i>
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

