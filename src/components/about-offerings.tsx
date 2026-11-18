"use client";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useId, useState } from "react";

const offerings = [
  {
    title: "UI/UX & Product Design",
    description:
      "I design intuitive, user-friendly digital experiences that balance functionality, usability, and visual appeal. From wireframes and user flows to polished interfaces and prototypes.",
  },
  {
    title: "Graphic Design",
    description:
      "I create impactful visual designs that communicate ideas effectively, including posters, social media creatives, marketing materials, and digital graphics.",
  },
  {
    title: "Branding & Visual Identity",
    description:
      "I help brands build a distinct visual presence through logo design, typography, colour systems, brand guidelines, and cohesive visual identities.",
  },
  {
    title: "Motion Design",
    description:
      "I bring ideas to life through movement, creating engaging animations, motion graphics, transitions, and dynamic visual content.",
  },
  {
    title: "Creative Direction",
    description:
      "I explore visual concepts, define creative directions, and develop consistent design languages that give projects a unique identity.",
  },
  {
    title: "Digital Experiences",
    description:
      "I create engaging digital visuals and experiences that connect design, creativity, and technology.",
  },
];

export function AboutOfferings() {
  const [open, setOpen] = useState<number | null>(0);
  const id = useId();

  return (
    <div className="border-b border-[var(--subtle-border)] pb-5">
      {offerings.map((offering, index) => {
        const expanded = open === index;
        const headingId = `${id}-heading-${index}`;
        const panelId = `${id}-panel-${index}`;
        return (
          <div key={offering.title} className="pb-1">
            <h3>
              <button
                id={headingId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => {
                  setOpen((current) => (current === index ? null : index));
                  if (
                    window.matchMedia("(prefers-reduced-motion: reduce)")
                      .matches
                  )
                    requestAnimationFrame(() => ScrollTrigger.refresh());
                }}
                className="flex w-full items-center justify-between gap-5 rounded py-3 text-left font-serif text-base leading-6 tracking-[-0.48px]"
              >
                {offering.title}
                <span
                  aria-hidden="true"
                  className={`offering-arrow text-[var(--muted-foreground)] ${expanded ? "rotate-90" : ""}`}
                >
                  →
                </span>
              </button>
            </h3>
            <section
              id={panelId}
              aria-labelledby={headingId}
              aria-hidden={!expanded}
              className="offering-panel grid"
              data-open={expanded}
              onTransitionEnd={(event) => {
                if (
                  event.target === event.currentTarget &&
                  event.propertyName === "grid-template-rows"
                )
                  ScrollTrigger.refresh();
              }}
            >
              <div className="overflow-hidden">
                <p className="about-copy max-w-[300px] pb-4 font-serif text-base leading-[22.4px] tracking-[-0.48px]">
                  {offering.description}
                </p>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
