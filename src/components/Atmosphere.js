import React from "react";
import monstera from "../assets/images/unsplash/monstera.jpg";

// Decorative pieces of the "Misty Canopy" scene. All are aria-hidden.

// Light shafts falling from the canopy
export const Rays = () => <div className="rays" aria-hidden="true" />;

// Deterministic pseudo-random so every render places fireflies the same way
const rand = (seed) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

export const Fireflies = ({ count = 18, seed = 1 }) => (
  <div className="fireflies" aria-hidden="true">
    {Array.from({ length: count }, (_, i) => {
      const r = (k) => rand(seed * 100 + i * 7 + k);
      return (
        <i
          key={i}
          style={{
            left: `${r(1) * 100}%`,
            top: `${r(2) * 100}%`,
            "--d": `${7 + r(3) * 8}s`,
            "--delay": `${-r(4) * 12}s`,
            "--dx": `${(r(5) - 0.5) * 120}px`,
            "--dy": `${(r(6) - 0.5) * 120}px`,
            scale: `${0.6 + r(7) * 0.9}`,
          }}
        />
      );
    })}
  </div>
);

// Drifting mist (two blurred bands, see .fog in theme.css)
export const Fog = () => <div className="fog" aria-hidden="true" />;

// A real foliage photo on a dark background, blended with `lighten` so
// only the leaves show over the scene. Size/position it with `style`.
export const Foliage = ({ className = "", style, flip = false }) => (
  <div
    className={`foliage ${className}`}
    aria-hidden="true"
    style={{
      backgroundImage: `url(${monstera})`,
      scale: flip ? "-1 1" : undefined,
      ...style,
    }}
  />
);
