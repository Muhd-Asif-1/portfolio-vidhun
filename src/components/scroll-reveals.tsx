"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { type RefObject, useLayoutEffect } from "react";

export function ScrollReveals({
  scope,
}: {
  scope: RefObject<HTMLDivElement | null>;
}) {
  useLayoutEffect(() => {
    const root = scope.current;
    if (!root) return;
    gsap.registerPlugin(ScrollTrigger, SplitText);
    let media: gsap.MatchMedia | undefined;

    const initialize = () => {
      // Server-rendered children can arrive after the client shell hydrates.
      if (!root.querySelector('[data-section-reveal="footer-social"]')) return;
      observer.disconnect();
      media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {
        const hero = Array.from(
          root.querySelectorAll<HTMLElement>("[data-hero-reveal]"),
        );
        const cards = Array.from(
          root.querySelectorAll<HTMLElement>("[data-work-reveal]"),
        );
        const images = cards.flatMap((card) =>
          Array.from(card.querySelectorAll("img")),
        );
        const splits: SplitText[] = [];

        const floating = Array.from(
          root.querySelectorAll<HTMLElement>("[data-floating-reveal]"),
        );
        const entrance = gsap.timeline({ defaults: { ease: "power3.out" } });
        if (hero.length)
          entrance.fromTo(
            hero,
            { autoAlpha: 0, y: 24 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.85,
              stagger: 0.11,
              clearProps: "opacity,visibility,transform",
            },
          );
        // Finish introducing the person before the surrounding toys arrive.
        if (floating.length)
          entrance.fromTo(
            floating,
            { autoAlpha: 0, y: 26, scale: 0.82 },
            {
              autoAlpha: 1,
              y: 0,
              scale: 1,
              duration: 0.7,
              stagger: 0.18,
              clearProps: "opacity,visibility,transform",
            },
            "+=0.5",
          );

        for (const text of root.querySelectorAll<HTMLElement>(
          "[data-text-reveal]",
        )) {
          let revealed = false;
          splits.push(
            SplitText.create(text, {
              type: "lines",
              mask: "lines",
              autoSplit: true,
              aria: "auto",
              onSplit: (split) => {
                if (revealed) return;
                revealed = true;
                return gsap.fromTo(
                  split.lines,
                  { yPercent: 105 },
                  {
                    yPercent: 0,
                    duration: 0.85,
                    stagger: 0.07,
                    delay: 0.3,
                    ease: "power3.out",
                    clearProps: "transform",
                  },
                );
              },
            }),
          );
        }

        const pendingCards = cards.filter(
          (card) => card.getBoundingClientRect().bottom > 0,
        );
        const pendingImages = pendingCards.flatMap((card) =>
          Array.from(card.querySelectorAll("img")),
        );
        const cardTriggers: ScrollTrigger[] = [];
        if (pendingCards.length) {
          gsap.set(pendingCards, { autoAlpha: 0, y: 42, scale: 0.98 });
          gsap.set(pendingImages, { scale: 1.07 });
          cardTriggers.push(
            ...ScrollTrigger.batch(pendingCards, {
              start: "clamp(top 88%)",
              once: true,
              interval: 0.08,
              onEnter: (batch) => {
                gsap.to(batch, {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.9,
                  stagger: 0.1,
                  ease: "power3.out",
                  overwrite: true,
                  clearProps: "opacity,visibility,transform",
                });
                batch.forEach((card, index) => {
                  const image = card.querySelector("img");
                  if (image)
                    gsap.to(image, {
                      scale: 1,
                      duration: 1.25,
                      delay: index * 0.1,
                      ease: "power3.out",
                      overwrite: true,
                      clearProps: "transform",
                    });
                });
              },
              onLeave: (batch) => {
                const passed = batch.flatMap((card) => [
                  card,
                  ...Array.from(card.querySelectorAll("img")),
                ]);
                gsap.killTweensOf(passed);
                gsap.set(passed, {
                  clearProps: "opacity,visibility,transform",
                });
              },
            }),
          );
        }

        for (const section of root.querySelectorAll<HTMLElement>(
          "[data-section-reveal]",
        )) {
          if (section.getBoundingClientRect().bottom <= 0) continue;
          const timeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: section,
              start: "clamp(top 88%)",
              once: true,
            },
          });
          if (section.dataset.sectionReveal === "testimonials") {
            const stage = section.querySelector("[data-testimonial-stage]");
            const controls = section.querySelector(
              "[data-testimonial-controls]",
            );
            if (stage)
              timeline.fromTo(
                stage,
                { autoAlpha: 0, y: 32, scale: 0.97 },
                {
                  autoAlpha: 1,
                  y: 0,
                  scale: 1,
                  duration: 0.9,
                  clearProps: "opacity,visibility,transform",
                },
              );
            if (controls)
              timeline.fromTo(
                controls,
                { autoAlpha: 0, y: 10 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.5,
                  clearProps: "opacity,visibility,transform",
                },
                "-=0.35",
              );
          } else if (section.dataset.sectionReveal === "footer-art") {
            timeline.fromTo(
              section,
              { autoAlpha: 0, y: 28 },
              {
                autoAlpha: 1,
                y: 0,
                duration: 0.9,
                clearProps: "opacity,visibility,transform",
              },
            );
            const outline = section.querySelector("[data-footer-outline]");
            if (outline)
              timeline.fromTo(
                outline,
                { strokeDasharray: 1, strokeDashoffset: 1 },
                {
                  strokeDashoffset: 0,
                  duration: 1.15,
                  ease: "power2.inOut",
                  clearProps: "strokeDasharray,strokeDashoffset",
                },
                0.15,
              );
          } else {
            const links = Array.from(section.querySelectorAll("a"));
            if (links.length)
              timeline.fromTo(
                links,
                { autoAlpha: 0, y: 16 },
                {
                  autoAlpha: 1,
                  y: 0,
                  duration: 0.65,
                  stagger: 0.08,
                  clearProps: "opacity,visibility,transform",
                },
                0.1,
              );
          }
        }

        ScrollTrigger.refresh();
        return () => {
          for (const trigger of cardTriggers) trigger.kill();
          if (cards.length) gsap.killTweensOf([...cards, ...images]);
          for (const split of splits) split.revert();
        };
      });
    };

    const observer = new MutationObserver(initialize);
    observer.observe(root, { childList: true, subtree: true });
    initialize();
    return () => {
      observer.disconnect();
      media?.revert();
    };
  }, [scope]);

  return null;
}
