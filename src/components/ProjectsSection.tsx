"use client";

import { Marquee } from "@/components/magicui/marquee";
import { ProjectCard, type Project } from "@/components/ui/project-card";
import { RevealAnimation } from "@/components/ui/reveal-animation";

const projects: Project[] = [
  {
    id: 1,
    title: "Aziz AI Chatbot",
    description: "AI-powered chatbot for King Abdulaziz University that provides instant answers to academic and administrative queries, reducing response times from hours to seconds.",
    tech: ["TypeScript", "Python", "Go", "React.js", "Next.js", "Express.js", "FastAPI", "PostgreSQL", "Redis", "Docker", "Nginx"],
    demo: "https://aziz.chat",
    image: "/aziz.webp",
  },
  {
    id: 2,
    title: "FCIT Groups",
    description: "Secure platform for FCIT student communication via WhatsApp groups, featuring email verification and spam prevention for organized academic discussions.",
    tech: ["Next.js", "PostgreSQL", "Prisma ORM", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/xAbdaziz/fcit-groups",
    demo: "https://fcit-groups.abdaziz.dev",
    image: "/fcit-groups.webp",
  },
  {
    id: 3,
    title: "AzkarWhatsAppBot",
    description: "WhatsApp bot that automatically sends prayer reminders and Azkar to group chats, helping Muslim communities maintain daily Islamic practices.",
    tech: ["Go", "WhatsApp API", "PostgreSQL"],
    github: "https://github.com/xAbdaziz/AzkarWhatsappBot",
    image: "/azkarbot.webp",
  },
  {
    id: 4,
    title: "FCITHelper",
    description: "WhatsApp academic assistant for FCIT students providing instant access to academic plans, calendars, transfer guidance, and program comparisons through simple commands.",
    tech: ["Go", "PostgreSQL", "WhatsApp API"],
    github: "https://github.com/xAbdaziz/FCITBot",
    image: "/fcithelper.webp",
  },
];

export default function ProjectsSection() {
  return (
    <div className="section">
      <section className="relative overflow-hidden py-8 sm:py-16 lg:py-24 h-dvh flex flex-col justify-center">

        {/* Header */}
        <RevealAnimation delay={0}>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-3 sm:mb-6 lg:mb-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lg:text-4xl">
                My Projects
              </h2>
              <p className="mt-1 sm:mt-2 lg:mt-4 text-sm sm:text-base lg:text-lg text-muted-foreground">
                A collection of projects that showcase my skills and passion for development
              </p>
            </div>
          </div>
        </RevealAnimation>

        {/* Projects */}
        <RevealAnimation delay={0.2}>
          <div className="relative z-10 flex-1 flex items-center min-h-0">
            <Marquee pauseOnHover className="[--duration:30s] w-full">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Marquee>
          </div>
        </RevealAnimation>

        {/* My GitHub Profile */}
        <RevealAnimation delay={0.4}>
          <div className="relative z-10 mx-auto mt-3 sm:mt-6 lg:mt-8 max-w-2xl text-center px-4">
            <p className="text-sm sm:text-base text-muted-foreground">
              Want to see more? Check out my{" "}
              <a
                href="https://github.com/xAbdaziz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                GitHub profile
              </a>{" "}
              for additional projects.
            </p>
          </div>
        </RevealAnimation>
      </section>
    </div>
  );
}