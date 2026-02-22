"use client";

import { GraduationCap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../data/i18n";

export default function Education() {
  const { locale } = useLanguage();
  const text = uiText[locale].education;

  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <GraduationCap size={18} />
              <span className="text-sm font-semibold uppercase tracking-widest">
                {text.badge}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {text.heading}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Education */}
          <ScrollReveal direction="left">
            <div className="space-y-4">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-muted">
                {text.sectionTitle}
              </h3>
              <div className="glass-card rounded-2xl p-6">
                <div className="mb-2 flex items-start justify-between gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 text-accent">
                    <Image
                      src="/logo/Naresuan.jpg"
                      alt="Athit Saenwaet"
                      width={500}
                      height={500}
                      className="rounded-full object-cover"
                      priority
                    />{" "}
                  </div>
                </div>
                <h4 className="mt-3 text-base font-bold text-foreground">
                  {text.cardTitle}
                </h4>
                <h4 className="mt-3 text-base font-bold text-foreground">
                  {text.school}
                </h4>
                <p className="text-xs text-muted">{text.location}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
