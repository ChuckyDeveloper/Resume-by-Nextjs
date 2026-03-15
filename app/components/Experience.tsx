"use client";

import { Briefcase, ChevronRight } from "lucide-react";
import { experiences } from "../data/resume";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../data/i18n";

export default function Experience() {
  const { locale } = useLanguage();
  const text = uiText[locale].experience;

  return (
    <section id="experience" className="relative px-6 py-24 overflow-hidden">
      <div className="pointer-events-none absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[100px]" />
      <div className="mx-auto max-w-5xl relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <Briefcase size={18} />
              <span className="text-sm font-semibold uppercase tracking-widest">
                {text.badge}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {text.heading}
            </h2>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const t = locale === "th" ? exp.th : null;
            return (
              <ScrollReveal key={exp.id} delay={index * 150} direction="left">
                <div className="group relative flex gap-6">
                  {/* Timeline dot & line */}
                  <div className="relative flex flex-col items-center">
                    <div className="relative z-10 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background transition-all group-hover:scale-125 group-hover:bg-accent group-hover:shadow-lg group-hover:shadow-accent/40">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent group-hover:bg-white" />
                    </div>
                    {index < experiences.length - 1 && (
                      <div className="w-0.5 grow bg-gradient-to-b from-accent/40 to-transparent" />
                    )}
                  </div>

                  {/* Content card */}
                  <div className="glass-card mb-2 w-full rounded-2xl p-6 transition-all group-hover:-translate-y-0.5">
                    <div className="mb-2 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {t?.role ?? exp.role}
                        </h3>
                        <p className="text-sm font-black text-accent">
                          {exp.company}{" "}
                          <span className="text-muted">
                            · {t?.location ?? exp.location}
                          </span>
                        </p>
                        <a
                          href={exp.website}
                          className="text-sm font-medium  underline "
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {exp.website}
                        </a>
                      </div>
                      <span className="shrink-0 rounded-full border border-border px-3 py-1 text-xs font-medium text-muted">
                        {exp.period}
                      </span>
                    </div>

                    <div className=" py-2">
                      <img
                        src={`/logo/${exp.company.toLocaleLowerCase()}.png`}
                        alt={`${exp.company} Logo`}
                        className=" h-16"
                      />
                    </div>

                    <p className="mb-4 text-sm leading-relaxed text-muted">
                      {t?.description ?? exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="mb-5 space-y-2">
                      {(t?.highlights ?? exp.highlights).map((h, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <ChevronRight
                            size={14}
                            className="mt-0.5 shrink-0 text-accent"
                          />
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
