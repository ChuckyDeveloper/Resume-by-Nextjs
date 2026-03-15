"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "../data/resume";
import { uiText } from "../data/i18n";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { locale, toggleLanguage } = useLanguage();
  const text = uiText[locale].navbar;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`no-print fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border/50 bg-background/70 py-3 backdrop-blur-2xl shadow-sm shadow-black/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-foreground transition-colors hover:text-accent"
        >
          {personalInfo.name.split(" ")[0]}
          <span className="gradient-text">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {text.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="ml-2 rounded-lg border border-border px-3 py-2 text-xs font-semibold tracking-wide text-foreground transition-colors hover:bg-card cursor-pointer"
          >
            {text.languageButton}
          </button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLanguage}
            className="rounded-lg border border-border px-2.5 py-2 text-xs font-semibold tracking-wide text-foreground transition-colors hover:bg-card"
          >
            {text.languageButton}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-muted transition-colors hover:bg-card hover:text-foreground"
            aria-label={text.toggleMenuLabel}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="animate-fade-in border-t border-border bg-background/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-5xl flex-col px-6 py-4">
            {text.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-muted transition-colors hover:bg-card hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
