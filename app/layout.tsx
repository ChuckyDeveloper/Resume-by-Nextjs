import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Athit Saenwaet — Full Stack Developer",
  description:
    "Full Stack Developer specialized in React, Next.js, Node.js, and cloud technologies. Building modern web experiences with passion and precision.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Athit Saenwaet" }],
  openGraph: {
    title: "Athit Saenwaet — Full Stack Developer",
    description:
      "Full Stack Developer specialized in React, Next.js, Node.js, and cloud technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
