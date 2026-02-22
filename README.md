# 🌐 Personal Resume Website

A modern, responsive personal portfolio & resume website built with **Next.js 16**, **React 19**, and **Tailwind CSS 4**. Features bilingual support (EN/TH), smooth scroll animations, and a sleek dark theme.

---

## ✨ Features

- 🎨 **Dark Navy Theme** — Elegant glassmorphism cards with gradient accents
- 🌏 **Bilingual (EN / TH)** — Full Thai & English language toggle with context-based i18n
- 🎭 **Scroll Animations** — Intersection Observer-based reveal effects
- 📱 **Fully Responsive** — Mobile-first design with adaptive layouts
- ⚡ **Blazing Fast** — Static generation with Next.js standalone output
- 🐳 **Docker Ready** — Multi-stage Dockerfile for lightweight production image

## 🛠️ Tech Stack

| Layer      | Technology                         |
| ---------- | ---------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack) |
| UI Library | React 19                           |
| Styling    | Tailwind CSS 4                     |
| Language   | TypeScript 5                       |
| Icons      | Lucide React                       |
| Deployment | Docker / Vercel / VPS              |

## 📁 Project Structure

```
web-resume/
├── app/
│   ├── components/       # UI components (Navbar, Hero, About, etc.)
│   ├── context/          # LanguageContext (EN/TH toggle)
│   ├── data/
│   │   ├── resume.ts     # All resume data + inline Thai translations
│   │   └── i18n.ts       # UI text translations (en/th)
│   ├── globals.css       # Theme, animations, custom styles
│   ├── layout.tsx
│   └── page.tsx
├── public/               # Static assets (images, logos)
├── Dockerfile            # Multi-stage production build
├── docker-compose.yml
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 22
- **npm** ≥ 10

### Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run start
```

## 🐳 Docker

```bash
# Build & run with Docker Compose
docker compose up -d

# Or manually
docker build -t web-resume .
docker run -d -p 3000:3000 web-resume
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

All personal data lives in **`app/data/resume.ts`** — edit this single file to update:

- Personal info, experiences, projects, skills, education
- Thai translations are **colocated** as a `th` property on each item

UI labels & section text are in **`app/data/i18n.ts`**.

## 📄 License

This project is for personal use. Feel free to fork and adapt for your own portfolio.
