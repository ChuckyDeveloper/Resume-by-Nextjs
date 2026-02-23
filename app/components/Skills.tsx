"use client";

import { Wrench, Monitor, Server, Database, Cloud } from "lucide-react";
import { skills } from "../data/resume";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../data/i18n";

export default function Skills() {
  const { locale } = useLanguage();
  const text = uiText[locale].skills;

  const categoryConfig: Record<
    string,
    {
      icon: React.ReactNode;
      gradient: string;
      tagBg: string;
      tagBorder: string;
      tagText: string;
      iconBg: string;
      dotColor: string;
    }
  > = {
    Frontend: {
      icon: <Monitor size={20} />,
      gradient: "from-blue-500 to-cyan-400",
      tagBg:
        "bg-blue-500/8 hover:bg-blue-500/15 dark:bg-blue-400/10 dark:hover:bg-blue-400/20",
      tagBorder: "border-blue-500/15 hover:border-blue-400/40",
      tagText: "text-blue-700 dark:text-blue-300",
      iconBg:
        "bg-blue-500/10 text-blue-500 dark:bg-blue-400/15 dark:text-blue-400",
      dotColor: "text-blue-500 dark:text-blue-400",
    },
    Backend: {
      icon: <Server size={20} />,
      gradient: "from-emerald-500 to-teal-400",
      tagBg:
        "bg-emerald-500/8 hover:bg-emerald-500/15 dark:bg-emerald-400/10 dark:hover:bg-emerald-400/20",
      tagBorder: "border-emerald-500/15 hover:border-emerald-400/40",
      tagText: "text-emerald-700 dark:text-emerald-300",
      iconBg:
        "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-400/15 dark:text-emerald-400",
      dotColor: "text-emerald-500 dark:text-emerald-400",
    },
    Database: {
      icon: <Database size={20} />,
      gradient: "from-amber-500 to-orange-400",
      tagBg:
        "bg-amber-500/8 hover:bg-amber-500/15 dark:bg-amber-400/10 dark:hover:bg-amber-400/20",
      tagBorder: "border-amber-500/15 hover:border-amber-400/40",
      tagText: "text-amber-700 dark:text-amber-300",
      iconBg:
        "bg-amber-500/10 text-amber-500 dark:bg-amber-400/15 dark:text-amber-400",
      dotColor: "text-amber-500 dark:text-amber-400",
    },
    "DevOps & Tools": {
      icon: <Cloud size={20} />,
      gradient: "from-purple-500 to-pink-400",
      tagBg:
        "bg-purple-500/8 hover:bg-purple-500/15 dark:bg-purple-400/10 dark:hover:bg-purple-400/20",
      tagBorder: "border-purple-500/15 hover:border-purple-400/40",
      tagText: "text-purple-700 dark:text-purple-300",
      iconBg:
        "bg-purple-500/10 text-purple-500 dark:bg-purple-400/15 dark:text-purple-400",
      dotColor: "text-purple-500 dark:text-purple-400",
    },
  };

  const defaultConfig = {
    icon: <Wrench size={20} />,
    gradient: "from-accent to-accent-light",
    tagBg: "bg-accent/8 hover:bg-accent/15",
    tagBorder: "border-accent/15 hover:border-accent/40",
    tagText: "text-accent",
    iconBg: "bg-accent/10 text-accent",
    dotColor: "text-accent",
  };

  return (
    <section id="skills" className="relative px-6 py-24 overflow-hidden">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[250px] w-[250px] rounded-full bg-blue-500/5 blur-[100px]" />

      <div className="mx-auto max-w-5xl relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <Wrench size={18} />
              <span className="text-sm font-semibold uppercase tracking-widest">
                {text.badge}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {text.heading}
            </h2>
            <p className="mt-3 max-w-xl text-muted">{text.description}</p>
          </div>
        </ScrollReveal>

        {/* Skills grid — 2 columns */}
        <div className="grid gap-8 sm:grid-cols-2">
          {Object.values(skills).map((category, idx) => {
            const config = categoryConfig[category.label] || defaultConfig;
            const useTubeLayout =
              category.label === "Frontend" || category.label === "Backend";
            return (
              <ScrollReveal key={category.label} delay={idx * 120}>
                <div className="group glass-card rounded-2xl p-6 h-full relative overflow-hidden">
                  {/* Subtle gradient line at top */}
                  <div
                    className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${config.gradient} opacity-60 group-hover:opacity-100 transition-opacity`}
                  />

                  {/* Category header */}
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${config.iconBg} transition-transform group-hover:scale-110`}
                    >
                      {config.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-foreground">
                        {text.labels[
                          category.label as keyof typeof text.labels
                        ] || category.label}
                      </h3>
                      <span className="text-xs text-muted">
                        {category.items.length} {text.skillsSuffix}
                      </span>
                    </div>
                  </div>

                  {/* Skills */}
                  {useTubeLayout ? (
                    <div className="flex flex-col gap-2">
                      {category.items.map((skill) => {
                        const levelRaw =
                          "level" in skill && typeof skill.level === "number"
                            ? skill.level
                            : 80;
                        const level = Math.max(
                          0,
                          Math.min(100, Math.round(levelRaw)),
                        );

                        return (
                          <div
                            key={skill.name}
                            className={`skill-tube inline-flex items-center justify-between gap-4 rounded-full border px-4 py-2.5 transition-all duration-200 cursor-default ${config.tagBg} ${config.tagBorder}`}
                          >
                            <span
                              className={`text-sm font-medium ${config.tagText}`}
                            >
                              {skill.name}
                            </span>
                            <div
                              aria-hidden="true"
                              className={`${config.dotColor} relative h-2.5 w-28 shrink-0`}
                            >
                              <div className="absolute inset-0 rounded-full bg-current opacity-15" />
                              <div
                                className="absolute inset-y-0 left-0 rounded-full bg-current opacity-80"
                                style={{ width: `${level}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="flex flex-wrap gap-2.5">
                      {category.items.map((skill) => (
                        <div
                          key={skill.name}
                          className={`skill-tag group/tag inline-flex items-center gap-2 rounded-full border px-3.5 py-2 transition-all duration-200 cursor-default ${config.tagBg} ${config.tagBorder}`}
                        >
                          <span
                            className={`text-sm font-medium ${config.tagText}`}
                          >
                            {skill.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom summary */}
        <ScrollReveal delay={500}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted">{text.bottomNote} 🚀</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
