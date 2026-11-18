import Image from "next/image";
import { CopyLinkButton, DownloadCvButton } from "@/components/hero-actions";
import { HeroFloatingObjects } from "@/components/hero-floating-objects";
import { contact } from "@/lib/contact";

const projects = [
  {
    slug: "prime-estates",
    name: "Prime Estates",
    label: "Prime Estate",
    category: "UI/UX",
    description: "Real estate website displayed on a desktop monitor",
  },
  {
    slug: "finlot",
    name: "Finlot",
    category: "UI/UX",
    description: "Savings app on a lime green background",
  },
  {
    slug: "fiinder",
    name: "Fiinder",
    category: "UI/UX",
    description:
      "Local discovery app on a phone held against a purple background",
  },
  {
    slug: "packaging",
    name: "Cult Community",
    category: "Branding",
    description: "Black packaging with a bold red and white identity",
  },
  {
    slug: "what",
    name: "What Clothing",
    category: "Branding",
    description: "Lime typography over the Statue of Liberty",
  },
  {
    slug: "scent-bowl",
    name: "Scent Bowl",
    category: "Branding",
    description: "Black and gold perfume bottle resting on rocks",
  },
  {
    slug: "lume",
    name: "Lumé",
    category: "Branding",
    description: "Burgundy business cards with an embossed gold identity",
  },
  {
    slug: "bulk",
    name: "Bulk",
    category: "Branding",
    description: "Three colorful fashion identity cards",
  },
  {
    slug: "travel-tech",
    name: "Travel tech",
    category: "Branding",
    description: "Blue brand identity on a subway billboard",
  },
  {
    slug: "breathing-app",
    name: "Uply",
    category: "UI/UX",
    description: "A guided breathing exercise on a handheld phone",
  },
  {
    slug: "shipping-logistics",
    name: "Starmark",
    category: "UI/UX",
    description: "Container shipping website on a blue desktop mockup",
  },
  {
    slug: "rice-soup",
    name: "Ricesoup",
    category: "Branding",
    description: "Playful white lettering on a red background",
  },
];

export function PortfolioHero() {
  return (
    <section
      id="home"
      aria-labelledby="intro-title"
      className="relative mx-auto max-w-[1920px] overflow-clip"
    >
      <div className="relative mx-auto max-w-[1280px] px-5 pb-28 pt-[240px] sm:pb-[164px] sm:pt-[270px] lg:pt-[clamp(210px,15.5vw,297.6px)]">
        <HeroFloatingObjects />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div data-hero-reveal>
            <div className="hero-head relative h-[156px] w-[104px]">
              <Image
                src="/images/hero/f7db9.svg"
                alt=""
                width={103.712}
                height={129.683}
                unoptimized
                className="absolute left-0 top-[30px] max-w-none"
              />
              <Image
                src="/images/hero/2f151.png"
                alt="Vidhun Prasad"
                width={102}
                height={155}
                preload
                className="absolute left-[1.7px] top-0 h-[155px] w-[102px] object-fill"
              />
            </div>
          </div>
          <div data-hero-reveal className="mt-8 flex flex-col items-center">
            <h1
              id="intro-title"
              className="flex flex-col items-center gap-[7px] text-2xl font-normal leading-[28.8px] tracking-[-0.72px]"
            >
              <span>I’m</span>
              <span className="relative border-x-2 border-[#adff6f] bg-[#adff6f]/22 px-[5px] before:absolute before:-left-[8px] before:-top-[14px] before:size-[15px] before:rounded-full before:bg-[#adff6f] after:absolute after:-bottom-[14px] after:-right-[8px] after:size-[15px] after:rounded-full after:bg-[#adff6f]">
                Vidhun Prasad
              </span>
            </h1>
            <div className="hero-link-actions relative mt-[18px] flex h-[38px] items-center rounded-full bg-white text-[13px] font-medium shadow-[0_8px_28px_rgba(30,40,60,0.14)]">
              <CopyLinkButton />
              <span aria-hidden="true" className="h-5 w-px bg-black/4" />
              <DownloadCvButton />
            </div>
            <p
              data-text-reveal
              className="mt-4 text-2xl leading-[28.8px] tracking-[-0.72px]"
            >
              I design digital products
            </p>
          </div>
          <p
            id="about"
            data-text-reveal
            data-hero-reveal
            className="hero-bio mt-8 min-h-[135px] max-w-[300px] scroll-mt-24 font-serif text-base leading-[22.4px] tracking-[-0.48px] text-black/52"
          >
            Hey, I&apos;m Vidhun Prasad — a creative designer specializing in
            UI/UX, graphic design, and motion design. I love crafting bold
            visual identities, meaningful digital experiences, and creative
            solutions that bring ideas to life.
          </p>
          <div
            data-hero-reveal
            className="mt-8 flex items-center justify-center gap-3 text-[22px] leading-none"
          >
            <a
              href={`mailto:${contact.email}`}
              className="hero-action mercury-button flex h-[50px] items-center rounded-full px-7"
            >
              Get in touch
            </a>
            <a
              href="#works"
              className="hero-action aqua-button flex h-[50px] items-center rounded-full px-7 text-white"
            >
              Works
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PortfolioWorks() {
  return (
    <section
      id="works"
      aria-labelledby="works-title"
      className="mx-auto max-w-[1920px] scroll-mt-6 px-3 pb-16 sm:px-2 sm:pb-20"
    >
      <h2 id="works-title" className="sr-only">
        Selected works
      </h2>
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} data-work-reveal className="group relative">
            <button
              type="button"
              disabled
              className="relative block aspect-[630/472] w-full overflow-hidden rounded-[clamp(18px,1.56vw,30px)] text-left"
              aria-label={`${project.name} — ${project.category} — project details coming soon`}
            >
              <Image
                src={`/images/works/${project.slug}.png`}
                alt={project.description}
                fill
                sizes="(min-width: 1920px) 630px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </button>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-5 top-4 flex max-w-[calc(100%-40px)] gap-2 opacity-0 group-hover:opacity-100"
            >
              <span className="rounded-[10px] bg-white/40 px-2.5 py-2 text-[22px] leading-[28px] font-normal text-white backdrop-blur-md">
                {project.category}
              </span>
              <span className="min-w-0 truncate rounded-[10px] bg-white/40 px-2.5 py-2 text-[22px] leading-[28px] font-normal text-white backdrop-blur-md">
                {project.label ?? project.name}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1920px] px-[2.14%] pb-16 pt-4 sm:pb-24 sm:pt-[51px]">
      <div data-section-reveal="footer-art" className="relative w-full">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[0.92%] -right-[0.87%] -top-[11.56%] -bottom-[1.99%]"
        >
          <span className="absolute bottom-full left-0 mb-[5px] flex items-center gap-[3px] whitespace-nowrap text-[10px] leading-none text-[#9747ff]">
            <span className="size-[5px] rotate-45 border border-current" />
            Frame 357
          </span>
          <svg
            aria-hidden="true"
            className="absolute inset-0 size-full overflow-visible"
          >
            <rect
              data-footer-outline
              x="0"
              y="0"
              width="100%"
              height="100%"
              pathLength="1"
              fill="none"
              stroke="#9747ff"
              strokeWidth="1"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
        <Image
          src="/images/footer/vidhun.png"
          alt="VIDHUN, illustrated with vector editing handles and measurements"
          width={1839}
          height={320}
          sizes="100vw"
          className="footer-wordmark-light h-auto w-full"
        />
        <Image
          src="/images/footer/vidhun-dark.png"
          alt=""
          width={1839}
          height={320}
          sizes="100vw"
          className="footer-wordmark-dark absolute inset-0 h-auto w-full"
        />
        <Image
          src="/images/footer/hands.png"
          alt=""
          width={802}
          height={281}
          sizes="44vw"
          className="absolute left-1/2 top-[50.94%] h-auto w-[43.61%] -translate-x-1/2"
        />
      </div>
      <nav
        aria-label="Social profiles"
        data-section-reveal="footer-social"
        className="relative mt-[4.4%] flex justify-center gap-5"
      >
        {[
          { name: "Behance", file: "behance", href: contact.profiles.behance },
          {
            name: "Instagram",
            file: "instagram",
            href: contact.profiles.instagram,
          },
          {
            name: "LinkedIn",
            file: "linkedin",
            href: contact.profiles.linkedin,
          },
        ].map((social) => (
          <a
            key={social.file}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.name} (opens in a new tab)`}
            className="footer-social-link relative block size-11 rounded-full"
          >
            <Image
              src={`/images/footer/${social.file}.png`}
              alt=""
              width={84}
              height={92}
              className="footer-social-icon footer-social-light pointer-events-none absolute -left-5 -top-3 max-w-none"
              unoptimized
            />
            <Image
              src={`/images/footer/${social.file}-dark.png`}
              alt=""
              width={84}
              height={92}
              className="footer-social-icon footer-social-dark pointer-events-none absolute -left-5 -top-3 max-w-none"
              unoptimized
            />
          </a>
        ))}
      </nav>
    </footer>
  );
}
