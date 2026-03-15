"use client";

import { useState, useEffect } from "react";
import {
  MapPin,
  Mail,
  Github,
  Linkedin,
  ChevronDown,
  Phone,
  Sparkles,
} from "lucide-react";
import { personalInfo } from "../data/resume";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { uiText } from "../data/i18n";

export default function Hero() {
  const { locale } = useLanguage();
  const text = uiText[locale].hero;
  const [firstName, ...lastNameParts] = personalInfo.name.split(" ");
  const lastName = lastNameParts.join(" ");

  /* Typewriter effect — cycle through roles */
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const [roleIdx, setRoleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const role = roles[roleIdx];
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= role.length) {
      setTyped(role.slice(0, charIdx));
      timer = setTimeout(() => setCharIdx((c) => c + 1), 80);
    } else if (!deleting && charIdx > role.length) {
      timer = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && charIdx > 0) {
      setTyped(role.slice(0, charIdx - 1));
      timer = setTimeout(() => setCharIdx((c) => c - 1), 40);
    } else {
      setDeleting(false);
      setRoleIdx((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIdx, deleting, roleIdx]);

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 overflow-hidden">
      {/* Vibrant background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-[100px]" />
        <div className="absolute top-1/3 -left-32 h-[400px] w-[400px] rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute -bottom-32 right-1/4 h-[350px] w-[350px] rounded-full bg-pink-500/8 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Animated profile image with rotating gradient ring */}
        <div className="animate-fade-in-up flex justify-center mb-8">
          <div className="relative">
            {/* Outer rotating gradient ring */}
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow opacity-70 blur-sm" />
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-slow" />
            {/* Inner container */}
            <div className="relative rounded-full bg-background p-1">
              <Image
                src="/profile/400614378_6190887267678992_8641360303543431294_n.jpg"
                alt="Athit Saenwaet"
                width={170}
                height={170}
                className="rounded-full object-cover"
                priority
              />
            </div>
            {/* Pulsing glow behind */}
            <div className="absolute -inset-4 rounded-full bg-accent/20 animate-pulse-glow -z-10 blur-xl" />
          </div>
        </div>

        <div
          className="animate-fade-in-up flex flex-col items-center text-center md:items-start md:text-left"
          style={{ animationDelay: "0.2s" }}
        >
          {/* Status badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <span className="text-muted">{text.availability}</span>
          </div>

          {/* Name & title */}
          <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            {firstName}
            {lastName ? (
              <span className="gradient-text"> {lastName}</span>
            ) : null}
          </h1>

          <h2 className="mb-6 h-8 text-xl font-medium sm:h-9 sm:text-2xl">
            <span className="gradient-text">{typed}</span>
            <span className="typewriter-cursor" />
          </h2>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted">
            Birthday: 02/03/1997
          </p>

          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted">
            {text.tagline}
          </p>

          {/* Location & contact */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4 text-sm text-muted md:justify-start">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} />
              {text.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={15} />
              {personalInfo.email}
            </span>
            <span className="flex items-center gap-1.5">
              <Phone size={15} />
              {personalInfo.phone}
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <Sparkles
                size={14}
                className="transition-transform group-hover:scale-125"
              />
              {text.getInTouch}
              <Mail
                size={16}
                className="transition-transform group-hover:rotate-12"
              />
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground hover:-translate-y-0.5"
            >
              <Github
                size={16}
                className="transition-transform group-hover:scale-110"
              />
              GitHub
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground hover:-translate-y-0.5"
            >
              <Linkedin
                size={16}
                className="transition-transform group-hover:scale-110"
              />
              LinkedIn
            </a>
            <a
              href={personalInfo.medium}
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
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted transition-colors hover:text-accent"
        aria-label={text.scrollToAbout}
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
}
