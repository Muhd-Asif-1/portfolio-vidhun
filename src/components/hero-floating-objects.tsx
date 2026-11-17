"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const replacements = [
  { src: "/images/hero/image 1227619144.png", name: "Keyboard" },
  { src: "/images/hero/image 1227619145.png", name: "Controller" },
  { src: "/images/hero/image 1227619146.png", name: "Burger" },
];

const objects = [
  {
    src: "/images/hero/e6c5d.png",
    name: "Diamond",
    width: 135,
    height: 124,
    className:
      "drop-shadow-md left-[7%] top-[112px] w-[78px] -rotate-24 sm:left-[5.2%] sm:top-[145px] sm:w-[135px]",
  },
  {
    src: "/images/hero/0fcd7.png",
    name: "Purple gem",
    width: 93,
    height: 84,
    className:
      "drop-shadow-md left-[61%] top-[87px] w-[59px] rotate-12 sm:left-[56%] sm:top-[53px] sm:w-[93px]",
  },
  {
    src: "/images/hero/563fd.png",
    name: "Mouse",
    width: 140,
    height: 149,
    className:
      "drop-shadow-md right-[5%] top-[203px] w-[76px] rotate-8 sm:right-[8.5%] sm:top-[250px] sm:w-[140px]",
  },
  {
    src: "/images/hero/0fc62.png",
    name: "Code blob",
    width: 112,
    height: 117,
    className:
      "drop-shadow-md left-[3%] top-[460px] w-[52px] rotate-[7deg] sm:left-[12.3%] sm:top-[629px] sm:w-[112px]",
  },
  {
    src: "/images/hero/a2cba.png",
    name: "Football",
    width: 105,
    height: 99,
    className:
      "right-[2%] top-[570px] w-[48px] sm:right-[13%] sm:top-[682px] sm:w-[105px]",
  },
];

function FloatingObject({
  object,
  onActivate,
}: {
  object: (typeof objects)[number];
  onActivate: () => void;
}) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState<string[]>([]);
  const button = useRef<HTMLButtonElement>(null);
  const artworks = [object, ...replacements];

  useLayoutEffect(() => {
    const layers =
      button.current?.querySelectorAll<HTMLElement>("[data-artwork]");
    if (!layers) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const settle = () => {
      gsap.killTweensOf(layers);
      layers.forEach((layer, position) => {
        gsap.set(layer, {
          opacity: position === index ? 1 : 0,
          scale: 1,
          y: 0,
        });
      });
    };

    if (reducedMotion.matches) {
      settle();
    } else {
      layers.forEach((layer, position) => {
        if (
          position === index &&
          Number(gsap.getProperty(layer, "opacity")) === 0
        ) {
          gsap.set(layer, { scale: 1.12, y: -6 });
        }
        gsap.to(layer, {
          opacity: position === index ? 1 : 0,
          scale: position === index ? 1 : 0.84,
          y: position === index ? 0 : 6,
          duration: 0.35,
          ease: "power3.out",
          overwrite: true,
        });
      });
    }
    reducedMotion.addEventListener("change", settle);
    return () => {
      reducedMotion.removeEventListener("change", settle);
      gsap.killTweensOf(layers);
    };
  }, [index]);

  const current = failed.includes(artworks[index].src)
    ? object
    : artworks[index];
  const next = artworks[(index + 1) % artworks.length];

  return (
    <button
      ref={button}
      type="button"
      className={`hero-decoration pointer-events-auto absolute z-20 cursor-pointer touch-manipulation rounded-xl border-0 bg-transparent p-0 ${object.className}`}
      style={{ aspectRatio: `${object.width} / ${object.height}` }}
      aria-label={`${object.name} toy: ${current.name}. Change to ${next.name}`}
      onClick={() => {
        onActivate();
        setIndex((previous) => (previous + 1) % artworks.length);
      }}
    >
      {artworks.map((artwork, position) => (
        <span
          key={artwork.src}
          data-artwork
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ opacity: position === 0 ? 1 : 0 }}
        >
          <Image
            src={failed.includes(artwork.src) ? object.src : artwork.src}
            alt=""
            fill
            unoptimized
            loading="eager"
            draggable={false}
            className="select-none object-contain"
            onError={() => {
              if (artwork.src !== object.src) {
                setFailed((previous) =>
                  previous.includes(artwork.src)
                    ? previous
                    : [...previous, artwork.src],
                );
              }
            }}
          />
        </span>
      ))}
    </button>
  );
}

export function HeroFloatingObjects() {
  const audio = useRef<AudioContext | null>(null);
  const clickBuffer = useRef<AudioBuffer | null>(null);

  useEffect(() => {
    return () => {
      const context = audio.current;
      audio.current = null;
      clickBuffer.current = null;
      if (context && context.state !== "closed")
        void context.close().catch(() => {});
    };
  }, []);

  function playClick() {
    try {
      if (!audio.current) {
        const context = new AudioContext();
        audio.current = context;
        const buffer = context.createBuffer(
          1,
          context.sampleRate * 0.065,
          context.sampleRate,
        );
        const samples = buffer.getChannelData(0);
        // Two short, dry impulses mimic a mechanical mouse switch.
        for (let i = 0; i < samples.length; i++) {
          const time = i / context.sampleRate;
          const press = Math.exp(-time * 420);
          const release =
            time >= 0.027 ? 0.55 * Math.exp(-(time - 0.027) * 520) : 0;
          samples[i] = (Math.random() * 2 - 1) * (press + release);
        }
        clickBuffer.current = buffer;
      }
      const context = audio.current;
      const play = () => {
        if (context.state !== "running" || !clickBuffer.current) return;
        const source = context.createBufferSource();
        source.buffer = clickBuffer.current;
        const filter = context.createBiquadFilter();
        filter.type = "bandpass";
        filter.frequency.value = 2200;
        filter.Q.value = 0.7;
        const volume = context.createGain();
        volume.gain.value = 0.09;
        source.connect(filter).connect(volume).connect(context.destination);
        source.onended = () => {
          source.disconnect();
          filter.disconnect();
          volume.disconnect();
        };
        source.start();
      };
      if (context.state === "suspended")
        void context
          .resume()
          .then(play)
          .catch(() => {});
      else play();
    } catch {
      // The toys remain interactive when browser audio is unavailable.
    }
  }

  return (
    <div className="pointer-events-none absolute inset-0 select-none">
      {objects.map((object) => (
        <FloatingObject
          key={object.src}
          object={object}
          onActivate={playClick}
        />
      ))}
    </div>
  );
}
