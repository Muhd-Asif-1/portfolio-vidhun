"use client";

import { gsap } from "gsap";
import Image from "next/image";
import {
  type PointerEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

export function PortfolioAppearance({ children }: { children: ReactNode }) {
  const [dark, setDark] = useState(false);
  const [pulling, setPulling] = useState(false);
  const cord = useRef<HTMLSpanElement>(null);
  const motion = useRef<gsap.core.Timeline | null>(null);
  const busy = useRef(false);
  const suppressClick = useRef(false);
  const pointer = useRef<{
    id: number;
    startY: number;
    distance: number;
  } | null>(null);

  useEffect(() => {
    try {
      setDark(localStorage.getItem("home-theme") === "dark");
    } catch {
      // The switch still works when browser storage is unavailable.
    }
  }, []);

  useEffect(
    () => () => {
      motion.current?.kill();
    },
    [],
  );

  function toggleTheme() {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("home-theme", next ? "dark" : "light");
    } catch {
      // Keep the chosen theme for this visit even without persistent storage.
    }
  }

  function releaseCord(distance: number, activate: boolean) {
    const element = cord.current;
    if (!element || busy.current) return;
    busy.current = true;
    setPulling(true);
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      if (activate) toggleTheme();
      element.style.setProperty("--cord-pull", "0px");
      busy.current = false;
      setPulling(false);
      return;
    }

    const desktop = window.matchMedia("(min-width: 640px)").matches;
    const timeline = gsap.timeline({
      onComplete: () => {
        busy.current = false;
        setPulling(false);
        motion.current = null;
      },
    });
    motion.current = timeline;
    if (activate) {
      timeline.to(element, {
        "--cord-pull": `${Math.max(distance, desktop ? 26 : 10)}px`,
        duration: distance ? 0.08 : 0.16,
        ease: "power2.in",
        onComplete: toggleTheme,
      });
    }
    timeline
      .to(element, {
        "--cord-pull": desktop ? "-4px" : "-2px",
        duration: 0.24,
        ease: "power3.out",
      })
      .to(element, {
        "--cord-pull": "2px",
        duration: 0.13,
        ease: "power2.inOut",
      })
      .to(element, {
        "--cord-pull": "0px",
        duration: 0.18,
        ease: "power2.out",
      });
  }

  function startPull(event: PointerEvent<HTMLButtonElement>) {
    if (!event.isPrimary || event.button !== 0 || busy.current) return;
    suppressClick.current = false;
    pointer.current = {
      id: event.pointerId,
      startY: event.clientY,
      distance: 0,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function movePull(event: PointerEvent<HTMLButtonElement>) {
    const active = pointer.current;
    if (!active || active.id !== event.pointerId) return;
    const desktop = window.matchMedia("(min-width: 640px)").matches;
    active.distance = Math.min(
      desktop ? 40 : 12,
      Math.max(0, event.clientY - active.startY),
    );
    cord.current?.style.setProperty("--cord-pull", `${active.distance}px`);
  }

  function finishPull(
    event: PointerEvent<HTMLButtonElement>,
    cancelled = false,
  ) {
    const active = pointer.current;
    if (!active || active.id !== event.pointerId) return;
    pointer.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId))
      event.currentTarget.releasePointerCapture(event.pointerId);
    if (cancelled) {
      releaseCord(active.distance, false);
    } else if (active.distance > 3) {
      // The browser also dispatches a click after a completed pointer gesture.
      suppressClick.current = true;
      releaseCord(active.distance, active.distance >= 8);
    }
  }

  return (
    <div
      className="portfolio-page relative isolate flex-1"
      data-theme={dark ? "dark" : "light"}
    >
      <button
        type="button"
        onClick={(event) => {
          if (suppressClick.current && event.detail !== 0) {
            suppressClick.current = false;
            return;
          }
          releaseCord(0, true);
        }}
        onPointerDown={startPull}
        onPointerMove={movePull}
        onPointerUp={(event) => finishPull(event)}
        onPointerCancel={(event) => finishPull(event, true)}
        onLostPointerCapture={(event) => finishPull(event, true)}
        aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
        aria-pressed={dark}
        aria-disabled={pulling}
        aria-description="Pull down and release, or activate to switch themes."
        title={dark ? "Pull for light mode" : "Pull for dark mode"}
        className="theme-toggle absolute right-3 top-[68px] z-30 size-12 touch-none select-none overflow-hidden sm:right-[3.4%] sm:top-0 sm:h-[220px] sm:overflow-visible"
      >
        <span
          ref={cord}
          className="theme-cord pointer-events-none absolute inset-0"
        >
          <Image
            src="/images/hero/theme.png"
            alt=""
            width={48}
            height={220}
            loading="eager"
            draggable={false}
            className="theme-switch-light absolute -top-[138px] left-0 max-w-none sm:top-0"
            unoptimized
          />
          <Image
            src="/images/hero/theme-dark.png"
            alt=""
            width={62}
            height={220}
            loading="eager"
            draggable={false}
            className="theme-switch-dark absolute -top-[138px] -left-[7px] max-w-none sm:top-0"
            unoptimized
          />
        </span>
      </button>
      {children}
    </div>
  );
}
