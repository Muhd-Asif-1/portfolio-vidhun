"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useState } from "react";

export function HomeAppearance({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    try {
      setDark(localStorage.getItem("home-theme") === "dark");
    } catch {
      // The switch still works when browser storage is unavailable.
    }
  }, []);

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("home-theme", next ? "dark" : "light");
    } catch {
      // Keep the chosen theme for this visit even without persistent storage.
    }
  }

  return (
    <div
      className="home-page relative isolate flex-1"
      data-theme={dark ? "dark" : "light"}
    >
      <button
        type="button"
        onClick={toggleTheme}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={dark}
        title={dark ? "Switch to light mode" : "Switch to dark mode"}
        className="theme-toggle absolute right-3 top-[68px] z-30 size-12 touch-manipulation overflow-hidden sm:right-[3.4%] sm:top-0 sm:h-[220px] sm:overflow-visible"
      >
        <Image
          src={dark ? "/images/hero/theme-dark.png" : "/images/hero/theme.png"}
          alt=""
          width={dark ? 62 : 48}
          height={220}
          className={`absolute -top-[138px] max-w-none sm:top-0 ${dark ? "-left-[7px]" : "left-0"}`}
          unoptimized
        />
      </button>
      {children}
    </div>
  );
}
