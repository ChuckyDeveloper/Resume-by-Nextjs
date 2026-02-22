"use client";

const techItems = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "Vue.js",
  "Nuxt.js",
  "Tailwind CSS",
  "MongoDB",
  "Docker",
  "AWS",
  "Github",
  "Vultr",
  "Cloudflare",
  "Firebase",
];

export default function TechMarquee() {
  // Duplicate for seamless loop
  const items = [...techItems, ...techItems];

  return (
    <div className="relative overflow-hidden py-10">
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

      <div className="animate-marquee flex gap-6 whitespace-nowrap">
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-accent"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent/60" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
