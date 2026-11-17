"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const reviews = [
  {
    name: "Crouton",
    company: "CYBRO",
    role: "Founder of Cybro.pro",
    avatar: "b958f.png",
    quote:
      "Vidhun consistently delivers on both quality and deadlines. He goes beyond the brief, finds the real problem, and brings solid solutions.",
  },
  {
    name: "Alex S.",
    company: "BlastUP",
    role: "CMO of BlastUP",
    avatar: "8bad2.png",
    quote: "Vidhun, this is just soooo awesome.",
  },
  {
    name: "Denis A.",
    company: "Arkada",
    role: "Founder of Arkada",
    avatar: "c3daf.png",
    quote:
      "Vidhun built us an incredible collection and a whole platform. A strong result with zero micromanagement. I’ll definitely come back to him for my next project.",
  },
];

export function Testimonials() {
  const [selected, setSelected] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [announcement, setAnnouncement] = useState("");
  const [preferences, setPreferences] = useState<{
    desktop: boolean;
    reducedMotion: boolean;
  } | null>(null);
  const stage = useRef<HTMLDivElement>(null);
  const progress = useRef<(HTMLSpanElement | null)[]>([]);
  const autoplay = useRef<gsap.core.Tween | null>(null);
  const initialized = useRef(false);
  const reducedMotion = preferences?.reducedMotion ?? true;

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 640px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreferences = () =>
      setPreferences({
        desktop: desktop.matches,
        reducedMotion: reducedMotion.matches,
      });
    const updateVisibility = () => setHidden(document.hidden);
    updatePreferences();
    updateVisibility();
    desktop.addEventListener("change", updatePreferences);
    reducedMotion.addEventListener("change", updatePreferences);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      desktop.removeEventListener("change", updatePreferences);
      reducedMotion.removeEventListener("change", updatePreferences);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  useLayoutEffect(() => {
    // Each newly selected indicator owns the countdown that advances its review.
    const indicator = progress.current[selected];
    if (!indicator) return;
    if (reducedMotion) {
      gsap.set(indicator, { scaleX: 1 });
      return;
    }
    const timer = gsap.fromTo(
      indicator,
      { scaleX: 0 },
      {
        scaleX: 1,
        duration: 2,
        ease: "none",
        paused: true,
        onComplete: () => setSelected((index) => (index + 1) % reviews.length),
      },
    );
    autoplay.current = timer;
    return () => {
      timer.kill();
      autoplay.current = null;
    };
  }, [selected, reducedMotion]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Selection replaces the countdown ref, so resume or pause the new tween too.
  useEffect(() => {
    if (reducedMotion || hovered || focused || hidden)
      autoplay.current?.pause();
    else autoplay.current?.resume();
  }, [selected, reducedMotion, hovered, focused, hidden]);

  useLayoutEffect(() => {
    if (!stage.current || !preferences) return;
    const { desktop, reducedMotion } = preferences;
    const duration = initialized.current && !reducedMotion ? 0.6 : 0;
    initialized.current = true;
    const cards = Array.from(
      stage.current.querySelectorAll<HTMLElement>(".review-card"),
    );
    // Keep the background cards in their slots; only the new front card pops in.
    for (const [index, card] of cards.entries()) {
      const active = index === selected;
      const side = index === (selected + 1) % reviews.length ? 1 : -1;
      gsap.set(card, {
        "--review-x": `${active ? 0 : side * (desktop ? 90 : 8)}%`,
        "--review-y": `${!active && desktop ? 22 : 0}px`,
        "--review-scale": !active && desktop ? 0.88 : 1,
        "--review-rotation": `${!active && desktop ? side * 2 : 0}deg`,
        "--review-opacity": active ? 1 : desktop ? 0.65 : 0,
      });
    }
    if (!duration) return;
    const animation = gsap.fromTo(
      cards[selected],
      {
        "--review-y": "20px",
        "--review-scale": 0.9,
        "--review-opacity": 0.35,
      },
      {
        "--review-y": "0px",
        "--review-scale": 1,
        "--review-opacity": 1,
        duration,
        ease: "back.out(1.2)",
        overwrite: true,
      },
    );
    return () => {
      animation.kill();
    };
  }, [selected, preferences]);

  return (
    <section
      aria-labelledby="testimonials-title"
      className="overflow-clip px-5 pb-20 pt-10 sm:pb-[104px] sm:pt-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
    >
      <h2 id="testimonials-title" className="sr-only">
        What clients say
      </h2>
      <div
        ref={stage}
        className="relative mx-auto h-[330px] max-w-[1120px] sm:h-[414px]"
      >
        {reviews.map((review, index) => {
          const position =
            index === selected
              ? "center"
              : index === (selected + 1) % reviews.length
                ? "right"
                : "left";
          return (
            <article
              key={review.name}
              data-position={position}
              aria-hidden={index !== selected}
              className="review-card absolute left-1/2 top-6 flex min-h-[292px] w-full max-w-[372px] -translate-x-1/2 flex-col rounded-[20px] border border-black/4 bg-white p-[23px] shadow-[0_1px_3px_rgba(20,24,32,0.07),0_10px_28px_rgba(20,24,32,0.08)] sm:top-[70px]"
            >
              <div className="flex items-center justify-between text-xs tracking-[-0.24px]">
                <p>{review.company}</p>
                <span
                  role="img"
                  aria-label="5 out of 5 stars"
                  className="flex gap-px"
                >
                  {Array.from({ length: 5 }, (_, star) => (
                    <Image
                      key={`${review.name}-${star}`}
                      src="/images/reviews/bf3b8.svg"
                      alt=""
                      width={6.825}
                      height={9.23}
                      unoptimized
                    />
                  ))}
                </span>
              </div>
              <blockquote className="mt-[13px] flex-1 font-serif text-lg leading-[23.4px] tracking-[-0.63px]">
                “{review.quote}”
              </blockquote>
              <div className="mt-5 flex items-center gap-[9px] border-t border-black/15 pt-3.5 text-xs leading-[14.4px] tracking-[-0.24px]">
                <Image
                  src={`/images/reviews/${review.avatar}`}
                  alt=""
                  width={35}
                  height={35}
                  className="size-[35px] rounded-full object-cover"
                />
                <div>
                  <p>{review.name}</p>
                  <p className="mt-0.5 text-black/52">{review.role}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <fieldset className="flex h-[46px] items-center justify-center">
        <legend className="sr-only">Choose a review</legend>
        {reviews.map((review, index) => (
          <button
            key={review.name}
            type="button"
            aria-label={`Show review from ${review.name}`}
            aria-pressed={index === selected}
            onClick={() => {
              setSelected(index);
              setAnnouncement(`Review from ${review.name}: ${review.quote}`);
            }}
            className="flex h-11 w-6 items-center justify-center rounded-full"
          >
            <span
              aria-hidden="true"
              className={
                index === selected
                  ? "h-1.5 w-6 overflow-hidden rounded-full bg-black/15"
                  : "size-1.5 rounded-full bg-black/20"
              }
            >
              {index === selected && (
                <span
                  ref={(node) => {
                    progress.current[index] = node;
                  }}
                  className="block size-full origin-left rounded-full bg-black"
                />
              )}
            </span>
          </button>
        ))}
      </fieldset>
      <p aria-live="polite" aria-atomic="true" className="sr-only">
        {announcement}
      </p>
    </section>
  );
}
