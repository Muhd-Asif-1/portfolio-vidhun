"use client";

import Image from "next/image";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { ScrollReveals } from "@/components/scroll-reveals";

export function SitePreloader({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(true);
  const overlay = useRef<HTMLOutputElement>(null);
  const content = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const screen = overlay.current;
    const page = content.current;
    if (!screen || !page) return;

    const started = performance.now();
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const previousOverflow = document.body.style.overflow;
    const previousInert = page.inert;
    let disposed = false;
    let closing = false;
    let minimumTimer: ReturnType<typeof setTimeout> | undefined;
    let exitTimer: ReturnType<typeof setTimeout> | undefined;
    let onLoad: (() => void) | undefined;

    document.body.style.overflow = "hidden";
    page.inert = true;
    page.setAttribute("aria-busy", "true");

    const restore = () => {
      document.body.style.overflow = previousOverflow;
      page.inert = previousInert;
      page.removeAttribute("aria-busy");
    };

    const dismiss = () => {
      if (disposed || closing) return;
      closing = true;
      clearTimeout(minimumTimer);
      clearTimeout(maximumTimer);
      if (onLoad) window.removeEventListener("load", onLoad);
      const fadeDuration = reducedMotion ? 0 : 250;
      screen.style.transition = `opacity ${fadeDuration}ms ease-out`;
      screen.style.opacity = "0";
      // Do not depend on animation frames finishing in an inactive browser tab.
      exitTimer = setTimeout(() => {
        if (disposed) return;
        restore();
        setVisible(false);
      }, fadeDuration);
    };

    // A failed or slow resource must never leave the page covered indefinitely.
    const maximumTimer = setTimeout(dismiss, 4000);
    const loaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else {
        onLoad = resolve;
        window.addEventListener("load", onLoad, { once: true });
      }
    });

    void Promise.allSettled([loaded, document.fonts.ready]).then(() => {
      if (disposed || closing) return;
      const minimumDuration = reducedMotion ? 0 : 1200;
      minimumTimer = setTimeout(
        dismiss,
        Math.max(0, minimumDuration - (performance.now() - started)),
      );
    });

    return () => {
      disposed = true;
      clearTimeout(minimumTimer);
      clearTimeout(maximumTimer);
      if (onLoad) window.removeEventListener("load", onLoad);
      clearTimeout(exitTimer);
      restore();
    };
  }, []);

  return (
    <>
      {visible && (
        <output
          ref={overlay}
          className="site-preloader fixed inset-0 z-[100] flex min-h-dvh items-center justify-center bg-white select-none"
          aria-label="Loading portfolio"
        >
          <div className="p-4">
            <Image
              src="/images/gorilla-walker.svg"
              alt=""
              width={320}
              height={283}
              unoptimized
              loading="eager"
              className="h-auto w-[77px] sm:w-24"
            />
          </div>
          <span className="sr-only">Loading portfolio…</span>
        </output>
      )}
      <div
        ref={content}
        data-site-loading={visible}
        className="flex flex-1 flex-col"
      >
        {children}
      </div>
      {!visible && <ScrollReveals scope={content} />}
      <noscript>
        <style>{".site-preloader { display: none !important; }"}</style>
      </noscript>
    </>
  );
}
