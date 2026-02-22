"use client";

import { User, Coffee, Code2, Rocket } from "lucide-react";
import { languages, interests } from "../data/resume";
import ScrollReveal from "./ScrollReveal";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../data/i18n";

export default function About() {
  const { locale } = useLanguage();
  const text = uiText[locale].about;

  const levelMap: Record<string, string> = {
    Native: "เจ้าของภาษา",
    "Working Proficiency(Technical Reading), Limited Speaking":
      "ทำงานได้ (อ่านเทคนิค), พูดได้ระดับจำกัด",
  };

  const interestMap: Record<string, string> = {
    "Full Stack Developer": "นักพัฒนา Full Stack",
    "Frontend Developer": "นักพัฒนา Frontend",
    "Backend Developer": "นักพัฒนา Backend",
    "DevOps Engineer": "วิศวกร DevOps",
  };

  const stats = [
    { icon: <Code2 size={20} />, value: "7+", label: text.stats[0] },
    { icon: <Rocket size={20} />, value: "20+", label: text.stats[1] },
    { icon: <Coffee size={20} />, value: "∞", label: text.stats[2] },
  ];

  return (
    <section id="about" className="relative px-6 py-24 overflow-hidden">
      {/* Decoration */}
      <div className="pointer-events-none absolute -right-20 top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[80px]" />
      <div className="mx-auto max-w-5xl relative">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-5">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <User size={18} />
              <span className="text-sm font-semibold uppercase tracking-widest">
                {text.badge}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {text.heading}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-5">
          {/* Main content */}
          <ScrollReveal direction="left" className="md:col-span-3">
            <p className="mb-6 text-lg leading-relaxed text-muted">
              {text.paragraph}
            </p>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-5 text-center group hover:-translate-y-1"
                >
                  <div className="mb-2 flex justify-center text-accent">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Sidebar info */}
          <ScrollReveal
            direction="right"
            delay={200}
            className="space-y-8 md:col-span-2"
          >
            {/* Languages */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                {text.languages}
              </h3>
              <div className="space-y-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-center justify-between"
                  >
                    <span className="text-sm font-medium text-foreground">
                      {lang.name}
                    </span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                      {locale === "th" ? levelMap[lang.level] || lang.level : lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-accent">
                {text.interests}
              </h3>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    {locale === "th" ? interestMap[interest] || interest : interest}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
