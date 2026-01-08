import ImageCarousel from "./ImageCarousel";

interface ProjectCardProps {
  name: string;
  description: string;
  url: string;
  github: string | null;
  images: string[];
}

export default function ProjectCard({ name, description, url, github, images }: ProjectCardProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-6 bg-background-tertiary p-6 rounded-card shadow-card hover:-translate-y-1 hover:shadow-cardHover transition-all duration-300">
      <div className="flex-shrink-0 w-full sm:w-80 lg:w-96">
        <ImageCarousel images={images} alt={`${name} Project`} />
      </div>
      <div className="flex-1 min-w-0 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-text-primary mb-3">{name}</h3>
          <p className="text-text-tertiary leading-relaxed mb-4 text-sm">{description}</p>
        </div>
        <div className="flex gap-3 flex-wrap">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-primary font-medium text-sm px-4 py-2 border-2 border-border-primary rounded-md hover:bg-interactive-hover hover:text-background-secondary hover:-translate-y-0.5 transition-all duration-300"
          >
            <i className="fas fa-external-link-alt"></i>
            Visit
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-text-secondary font-medium text-sm px-4 py-2 border-2 border-border-secondary rounded-md hover:bg-interactive-hoverLight hover:text-background-secondary hover:-translate-y-0.5 transition-all duration-300"
            >
              <i className="fab fa-github"></i>
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

