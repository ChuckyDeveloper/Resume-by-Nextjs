"use client";

import { Send, Mail, Github, Linkedin, SmartphoneNfc } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../data/i18n";
import { personalInfo } from "../data/resume";

export default function Contact() {
  const { locale } = useLanguage();
  const text = uiText[locale].contact;

  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <ScrollReveal>
          <div className="mb-16 text-center">
            <div className="mb-3 flex items-center justify-center gap-2 text-accent">
              <Send size={18} />
              <span className="text-sm font-semibold uppercase tracking-widest">
                {text.badge}
              </span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {text.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted">
              {text.description}
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="mx-auto max-w-2xl">
            {/* Contact cards */}
            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="glass-card group flex items-center gap-4 rounded-2xl p-6 transition-all hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition-colors group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:text-white">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    {text.email}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    saenwaet60@gmail.com
                  </p>
                </div>
              </a>

              <div className="glass-card flex items-center gap-4 rounded-2xl p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <SmartphoneNfc size={22} />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    {text.phone}
                  </p>
                  <p className="text-sm font-semibold text-foreground">
                    064-7244043
                  </p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href={"https://github.com/ChuckyDeveloper"}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href={"https://www.linkedin.com/in/athitsaenwaet/"}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>
              <a
                href={"https://saenwaet58.medium.com/"}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground hover:-translate-y-0.5"
              >
                <Image
                  src="/logo/medium.png"
                  alt="Medium Logo"
                  width={20}
                  height={20}
                />
                Medium
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
