import { cn } from "@/lib/utils";
import { GithubIcon, ExternalLink } from "lucide-react";
import Image from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className={cn(
        "group relative w-72 sm:w-80 flex-shrink-0 overflow-hidden rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-all duration-300",
        "hover:shadow-lg hover:border-primary/20"
      )}
    >
      {/* Project Image */}
      <div className="relative h-48 sm:h-56 bg-gradient-to-br from-primary/10 to-primary/5">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-4xl sm:text-6xl font-bold text-primary/20">
              {project.title.charAt(0)}
            </div>
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3 sm:mb-4 h-16 overflow-y-auto scrollbar-thin scrollbar-thumb-muted scrollbar-track-transparent">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-3 sm:mb-4">
          {project.tech.slice(0, 6).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-muted/50 px-2 py-1 text-xs text-muted-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 6 && (
            <span className="rounded-md bg-muted/50 px-2 py-1 text-xs text-muted-foreground border border-border/50">
              +{project.tech.length - 6} more
            </span>
          )}
        </div>

        {/* Action Links */}
        <div className="flex items-center gap-3 sm:gap-4">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm bg-primary text-primary-foreground px-2.5 sm:px-3 py-1.5 rounded-md transition-colors hover:bg-primary/90"
            >
              <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              Try it out
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-muted-foreground transition-colors hover:text-muted-foreground/70"
            >
              <GithubIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}