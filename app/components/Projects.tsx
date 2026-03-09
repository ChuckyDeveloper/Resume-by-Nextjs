"use client";

import {
  FolderGit2,
  ExternalLink,
  Github,
  ListVideo,
} from "lucide-react";
import Image from "next/image";
import { projects } from "../data/resume";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../data/i18n";

const projectGradients: Record<number, string> = {
  1: "from-indigo-500/20 via-blue-500/20 to-cyan-500/20",
  2: "from-purple-500/20 via-fuchsia-500/20 to-pink-500/20",
  3: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
  4: "from-orange-500/20 via-amber-500/20 to-yellow-500/20",
};

export default function Projects() {
  const { locale } = useLanguage();
  const text = uiText[locale].projects;
  const featured = projects.filter((p) => p.featured);
  const other = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <FolderGit2 size={18} />
              <span className="text-sm font-semibold uppercase tracking-widest">
                {text.badge}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {text.heading}
            </h2>
          </div>
        </ScrollReveal>

        {/* Featured projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, idx) => {
            const t = locale === "th" ? project.th : null;
            return (
              <ScrollReveal key={project.id} delay={idx * 120}>
                <div className="glass-card group relative flex h-full flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-1">
                  {/* Gradient top bar */}
                  <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />

                  {/* Gradient image placeholder */}
                  <div
                    className={`relative h-40 w-full bg-gradient-to-br ${projectGradients[project.id] || "from-indigo-500/20 to-purple-500/20"} flex items-center justify-center overflow-hidden`}
                  >
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="flex grow flex-col p-6">
                    <h3 className="mb-2 text-lg font-bold text-foreground">
                      {project.title}
                    </h3>

                    <p className="mb-5 grow text-sm leading-relaxed text-muted">
                      {t?.description ?? project.description}
                    </p>

                    {/* Tech tags */}
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={`${tech}-${i}`}
                          className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex items-center gap-3 border-t border-border pt-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
                        >
                          <Github size={14} />
                          {text.code}
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
                        >
                          <ExternalLink size={14} />
                          {text.liveDemo}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Other projects */}
        {other.length > 0 && (
          <ScrollReveal delay={200}>
            <div className="mt-10">
              <h3 className="mb-6 text-2xl font-semibold uppercase tracking-widest text-foreground">
                {text.otherProjects}
              </h3>
              <div className="grid gap-4 sm:grid-cols-3">
                {other.map((project) => {
                  const t = locale === "th" ? project.th : null;
                  return (
                    <ScrollReveal key={project.id}>
                      <div className="glass-card group relative flex h-full flex-col rounded-2xl overflow-hidden transition-all hover:-translate-y-1">
                        {/* Gradient top bar */}
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />

                        {/* Gradient image placeholder */}
                        <div
                          className={`relative h-40 w-full bg-gradient-to-br ${projectGradients[project.id] || "from-indigo-500/20 to-purple-500/20"} flex items-center justify-center overflow-hidden`}
                        >
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            sizes="(max-width: 640px) 100vw, 33vw"
                            className="object-cover"
                          />
                        </div>

                        <div className="flex grow flex-col p-6">
                          <h3 className="mb-2 text-lg font-bold text-foreground">
                            {project.title}
                          </h3>

                          <p className="mb-5 grow text-sm leading-relaxed text-muted">
                            {t?.description ?? project.description}
                          </p>

                          {/* Tech tags */}
                          <div className="mb-4 flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={`${tech}-${i}`}
                                className="rounded-md bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Links */}
                          <div className="flex items-center gap-3 border-t border-border pt-4">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-foreground"
                              >
                                <Github size={14} />
                                {text.code}
                              </a>
                            )}
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
                              >
                                <ExternalLink size={14} />
                                {text.liveDemo}
                              </a>
                            )}

                            {project.video_demo && (
                              <a
                                href={project.video_demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-1.5 text-xs font-medium text-muted transition-colors hover:text-accent"
                              >
                                <ListVideo size={14} />
                                {text.videoDemo}
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
