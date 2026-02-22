"use client";

import { useState, useEffect } from "react";

interface Shape {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  type: "circle" | "ring" | "dot" | "square";
  color: string;
}

export default function FloatingShapes() {
  const [shapes, setShapes] = useState<Shape[]>([]);

  useEffect(() => {
    const colors = [
      "rgba(99, 102, 241, 0.08)",
      "rgba(168, 85, 247, 0.08)",
      "rgba(236, 72, 153, 0.06)",
      "rgba(6, 182, 212, 0.06)",
    ];
    const types: Shape["type"][] = ["circle", "ring", "dot", "square"];

    const pseudoRandom = (seed: number) => {
      const value = Math.sin(seed) * 10000;
      return value - Math.floor(value);
    };

    setShapes(
      Array.from({ length: 14 }, (_, i) => ({
        id: i,
        size: Math.round(pseudoRandom(i + 1) * 40 + 10),
        x: Math.round(pseudoRandom(i + 11) * 10000) / 100,
        y: Math.round(pseudoRandom(i + 21) * 10000) / 100,
        delay: Math.round(pseudoRandom(i + 31) * 500) / 100,
        duration: Math.round((pseudoRandom(i + 41) * 10 + 15) * 100) / 100,
        type: types[i % types.length],
        color: colors[i % colors.length],
      })),
    );
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {shapes.map((s) => (
        <div
          key={s.id}
          className="absolute animate-float-shape"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          {s.type === "circle" && (
            <div
              className="rounded-full"
              style={{
                width: s.size,
                height: s.size,
                background: s.color,
              }}
            />
          )}
          {s.type === "ring" && (
            <div
              className="rounded-full"
              style={{
                width: s.size,
                height: s.size,
                border: `1.5px solid ${s.color}`,
              }}
            />
          )}
          {s.type === "dot" && (
            <div
              className="rounded-full"
              style={{
                width: s.size * 0.4,
                height: s.size * 0.4,
                background: s.color,
              }}
            />
          )}
          {s.type === "square" && (
            <div
              className="rotate-45 rounded-sm"
              style={{
                width: s.size * 0.6,
                height: s.size * 0.6,
                border: `1.5px solid ${s.color}`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
