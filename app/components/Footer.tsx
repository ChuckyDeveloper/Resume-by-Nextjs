"use client";

import { Heart } from "lucide-react";
import { personalInfo } from "../data/resume";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../data/i18n";

export default function Footer() {
  const year = new Date().getFullYear();
  const { locale } = useLanguage();
  const text = uiText[locale].footer;

  return (
    <footer className="relative border-t border-border bg-section-alt px-6 py-10">
      {/* Gradient top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted">
          © {year} {personalInfo.name}. {text.rights}
        </p>
        <p className="flex items-center gap-1.5 text-xs text-muted">
          {text.builtWith}{" "}
          <Heart size={12} className="animate-pulse text-red-500" />{" "}
          {text.using}
        </p>
      </div>
    </footer>
  );
}
