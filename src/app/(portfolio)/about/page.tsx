import type { Metadata } from "next";
import Image from "next/image";
import { AboutOfferings } from "@/components/about-offerings";
import { contact } from "@/lib/contact";

export const metadata: Metadata = {
  title: "About — Vidhun Prasad",
  description:
    "Meet Vidhun Prasad: a creative designer working across UI/UX, graphic design, branding, and motion design.",
};

export default function About() {
  return (
    <main
      id="main"
      data-page-path="/about"
      className="about-page mx-auto max-w-[1920px] px-5 pb-36 pt-32 sm:pb-[220px]"
    >
      <section aria-labelledby="about-title" className="mx-auto max-w-[400px]">
        <Image
          src="/images/about/badge.png"
          alt=""
          width={50}
          height={50}
          className="rounded-full"
          unoptimized
          preload
        />
        <h1
          id="about-title"
          className="about-badge mt-4 w-fit rounded-full px-3 py-1 text-sm leading-5 tracking-[-0.28px]"
        >
          About
        </h1>
        <div className="about-copy mt-4 font-serif text-base leading-6 tracking-[-0.48px]">
          <p>
            Hey, I&apos;m Vidhun Prasad — a creative designer passionate about
            visual communication, digital experiences, and everything in
            between.
          </p>
          <p>
            My work lives at the intersection of UI/UX design, graphic design,
            branding, and motion design. I enjoy exploring different creative
            disciplines, experimenting with visual languages, and turning
            abstract ideas into thoughtful, engaging experiences.
          </p>
          <p>
            For me, design isn&apos;t just about making things look good.
            It&apos;s about understanding the idea behind the work, finding the
            right way to communicate it, and creating something that feels both
            meaningful and memorable.
          </p>
          <p>
            I believe great design comes from curiosity, exploration, and a
            willingness to think differently. Whether I&apos;m designing a
            digital interface, building a visual identity, or experimenting with
            motion, I focus on the details that bring an idea together.
          </p>
          <p>
            I&apos;m constantly exploring new tools, techniques, and creative
            possibilities, pushing myself to learn, experiment, and evolve with
            every project.
          </p>
          <p>
            At the end of the day, I&apos;m someone who loves making things,
            solving visual problems, and bringing ideas to life through design.
          </p>
          <p>Always curious. Always creating.</p>
        </div>
        <a
          href={`mailto:${contact.email}`}
          className="hero-action mercury-button mt-4 inline-flex min-h-[50px] max-w-full items-center justify-center rounded-full px-7 text-lg tracking-[-0.5px] sm:text-[22px]"
        >
          {contact.email}
        </a>
      </section>

      <section
        aria-labelledby="toolkit-title"
        className="about-section mx-auto mt-20 grid max-w-[730px] gap-6 sm:mt-[83px] sm:grid-cols-[133px_minmax(0,1fr)] sm:items-center sm:gap-8"
      >
        <h2 id="toolkit-title" className="text-sm leading-5 tracking-[-0.28px]">
          My toolkit
        </h2>
        <Image
          src="/images/about/toolkit.png"
          alt="My toolkit: Figma, Illustrator, Photoshop, Lightroom, After Effects, Premiere Pro, ChatGPT, and Claude in a blue tool folder"
          width={400}
          height={468}
          sizes="(min-width: 640px) 400px, 100vw"
          className="mx-auto h-auto w-full max-w-[400px] sm:mx-0"
        />
      </section>

      <section
        aria-labelledby="experience-title"
        className="about-section mx-auto mt-10 grid max-w-[730px] gap-6 sm:mt-[27px] sm:grid-cols-[133px_minmax(0,1fr)] sm:gap-8"
      >
        <div className="text-sm leading-5 tracking-[-0.28px]">
          <h2 id="experience-title">Experience</h2>
          <p className="about-copy mt-2">2025 — 2026</p>
        </div>
        <div className="max-w-[400px] font-serif text-base leading-[22.4px] tracking-[-0.48px]">
          <h3 className="flex items-center gap-3">
            <Image
              src="/images/about/experience.png"
              alt=""
              width={17}
              height={17}
              className="about-experience-icon"
              unoptimized
            />
            Creative Designer
          </h3>
          <div className="about-copy mt-2 space-y-6">
            <p>UI/UX, Graphic &amp; Branding Designer</p>
            <p>Urbanhub Innovations — Kannur, Kerala</p>
            <p>
              Worked across multiple creative disciplines, contributing to
              digital experiences, visual communication, and brand development.
            </p>
            <p>
              My role involved designing user interfaces, creating engaging
              graphic visuals, and developing brand identities that communicate
              ideas with clarity and consistency.
            </p>
            <p>
              I explored different visual directions, worked on creative
              concepts, and translated ideas into meaningful design solutions
              across digital and branding projects.
            </p>
            <div>
              <p>Areas of Work</p>
              <ul className="list-disc pl-6">
                <li>UI/UX &amp; Interface Design</li>
                <li>Graphic &amp; Visual Design</li>
                <li>Brand Identity &amp; Development</li>
                <li>Creative Direction</li>
                <li>Visual Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="offerings-title"
        className="about-section mx-auto mt-20 grid max-w-[730px] gap-6 sm:mt-[133px] sm:grid-cols-[133px_minmax(0,1fr)] sm:gap-8"
      >
        <h2
          id="offerings-title"
          className="pt-3 text-sm leading-6 tracking-[-0.28px]"
        >
          What I Offer
        </h2>
        <div className="max-w-[400px]">
          <AboutOfferings />
        </div>
      </section>
    </main>
  );
}
