"use client";

import Image from "next/image";
import { useState } from "react";

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
  return (
    <section
      aria-labelledby="testimonials-title"
      className="overflow-clip px-5 pb-20 pt-10 sm:pb-[104px] sm:pt-6"
    >
      <h2 id="testimonials-title" className="sr-only">
        What clients say
      </h2>
      <div className="relative mx-auto h-[330px] max-w-[1120px] sm:h-[414px]">
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
            onClick={() => setSelected(index)}
            className="flex h-11 w-6 items-center justify-center rounded-full"
          >
            <span
              aria-hidden="true"
              className={
                index === selected
                  ? "h-1.5 w-3.5 rounded-full bg-black"
                  : "size-1.5 rounded-full bg-black/20"
              }
            />
          </button>
        ))}
      </fieldset>
      <p aria-live="polite" aria-atomic="true" className="sr-only">
        Review from {reviews[selected].name}: {reviews[selected].quote}
      </p>
    </section>
  );
}
