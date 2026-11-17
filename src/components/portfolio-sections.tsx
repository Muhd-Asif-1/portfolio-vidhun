import Image from "next/image";

const projects = [
  {
    slug: "prime-estates",
    name: "Prime Estates",
    description: "Real estate website displayed on a desktop monitor",
  },
  {
    slug: "finlot",
    name: "Finlot",
    description: "Savings app on a lime green background",
  },
  {
    slug: "fiinder",
    name: "Fiinder",
    description:
      "Local discovery app on a phone held against a purple background",
  },
  {
    slug: "packaging",
    name: "Packaging design",
    description: "Black packaging with a bold red and white identity",
  },
  {
    slug: "what",
    name: "What? Men Store",
    description: "Lime typography over the Statue of Liberty",
  },
  {
    slug: "scent-bowl",
    name: "Scent Bowl",
    description: "Black and gold perfume bottle resting on rocks",
  },
  {
    slug: "lume",
    name: "Lumé",
    description: "Burgundy business cards with an embossed gold identity",
  },
  {
    slug: "bulk",
    name: "Bulk",
    description: "Three colorful fashion identity cards",
  },
  {
    slug: "travel-tech",
    name: "Traveltech",
    description: "Blue brand identity on a subway billboard",
  },
  {
    slug: "breathing-app",
    name: "Breathing app",
    description: "A guided breathing exercise on a handheld phone",
  },
  {
    slug: "shipping-logistics",
    name: "Shipping and logistics",
    description: "Container shipping website on a blue desktop mockup",
  },
  {
    slug: "rice-soup",
    name: "Rice Soup Originals",
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
      <div className="relative mx-auto max-w-[1280px] px-5 pb-28 pt-[240px] sm:pb-[164px] sm:pt-[clamp(270px,20.49vw,393.4px)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 select-none"
        >
          <Image
            src="/images/hero/e6c5d.png"
            width={135}
            height={124}
            alt=""
            className="hero-decoration absolute left-[7%] top-[112px] w-[78px] -rotate-24 drop-shadow-md sm:left-[5.2%] sm:top-[145px] sm:w-[135px]"
          />
          <Image
            src="/images/hero/0fcd7.png"
            width={93}
            height={84}
            alt=""
            className="hero-decoration absolute left-[61%] top-[87px] w-[59px] rotate-12 drop-shadow-md sm:left-[56%] sm:top-[53px] sm:w-[93px]"
          />
          <Image
            src="/images/hero/563fd.png"
            width={140}
            height={149}
            alt=""
            className="hero-decoration absolute right-[5%] top-[203px] w-[76px] rotate-8 drop-shadow-md sm:right-[8.5%] sm:top-[250px] sm:w-[140px]"
          />
          <Image
            src="/images/hero/0fc62.png"
            width={112}
            height={117}
            alt=""
            className="hero-decoration absolute left-[3%] top-[460px] w-[52px] rotate-[7deg] drop-shadow-md sm:left-[12.3%] sm:top-[629px] sm:w-[112px]"
          />
          <Image
            src="/images/hero/a2cba.png"
            width={105}
            height={99}
            alt=""
            className="hero-decoration absolute right-[2%] top-[570px] w-[48px] sm:right-[13%] sm:top-[682px] sm:w-[105px]"
          />
        </div>
        <div className="relative z-10 flex flex-col items-center text-center">
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
          <div className="mt-8 flex flex-col items-center">
            <h1
              id="intro-title"
              className="flex flex-col items-center gap-[7px] text-2xl font-normal leading-[28.8px] tracking-[-0.72px]"
            >
              <span>I’m</span>
              <span className="relative border-x-2 border-[#adff6f] bg-[#adff6f]/22 px-[5px] before:absolute before:-left-[8px] before:-top-[14px] before:size-[15px] before:rounded-full before:bg-[#adff6f] after:absolute after:-bottom-[14px] after:-right-[8px] after:size-[15px] after:rounded-full after:bg-[#adff6f]">
                Vidhun Prasad
              </span>
            </h1>
            <div className="mt-[18px] flex h-[38px] items-center rounded-full bg-white text-[13px] font-medium shadow-[0_8px_28px_rgba(30,40,60,0.14)]">
              <button
                type="button"
                disabled
                title="Contact email coming soon"
                className="flex items-center gap-1.5 rounded-l-full px-3 py-2.5"
                aria-label="Copy email address (coming soon)"
              >
                <Image
                  src="/images/hero/a8270.svg"
                  alt=""
                  width={18}
                  height={18}
                  unoptimized
                />
                Copy
              </button>
              <span aria-hidden="true" className="h-5 w-px bg-black/4" />
              <button
                type="button"
                disabled
                title="CV coming soon"
                className="flex items-center gap-1.5 rounded-r-full px-3 py-2.5"
              >
                <Image
                  src="/images/hero/0b94e.svg"
                  alt=""
                  width={18}
                  height={18}
                  unoptimized
                />
                Open CV
              </button>
            </div>
            <p className="mt-4 text-2xl leading-[28.8px] tracking-[-0.72px]">
              I design digital products
            </p>
          </div>
          <p
            id="about"
            className="mt-8 min-h-[135px] max-w-[300px] scroll-mt-24 font-serif text-base leading-[22.4px] tracking-[-0.48px] text-black/52"
          >
            Hey, I&apos;m Vidhun Prasad — a creative designer specializing in
            UI/UX, graphic design, and motion design. I love crafting bold
            visual identities, meaningful digital experiences, and creative
            solutions that bring ideas to life.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3 text-[22px] leading-none">
            <button
              type="button"
              disabled
              title="Email address coming soon"
              className="hero-action mercury-button h-[50px] rounded-full px-7"
            >
              Get in touch
            </button>
            <a
              href="#works"
              className="hero-action aqua-button flex h-[50px] items-center rounded-full px-7 text-white"
            >
              Works
            </a>
          </div>
        </div>
      </div>
      <button
        type="button"
        disabled
        aria-label="Dark theme (coming later)"
        title="Dark theme coming later"
        className="absolute right-[3.4%] top-0 hidden h-[220px] w-12 sm:block"
      >
        <Image
          src="/images/hero/theme.png"
          alt=""
          width={48}
          height={220}
          unoptimized
        />
      </button>
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
          <li key={project.slug}>
            <button
              type="button"
              disabled
              className="relative block aspect-[630/472] w-full overflow-hidden rounded-[clamp(18px,1.56vw,30px)] text-left"
              aria-label={`${project.name} — project details coming soon`}
              title={`${project.name} — project details coming soon`}
            >
              <Image
                src={`/images/works/${project.slug}.png`}
                alt={project.description}
                fill
                sizes="(min-width: 1920px) 630px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="mx-auto w-full max-w-[1920px] px-[2.14%] pb-16 pt-4 sm:pb-24 sm:pt-[51px]">
      <div className="relative w-full">
        <Image
          src="/images/footer/vidhun.png"
          alt="VIDHUN, illustrated with vector editing handles and measurements"
          width={1839}
          height={320}
          sizes="100vw"
          className="h-auto w-full"
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
        className="relative mt-[4.4%] flex justify-center gap-5"
      >
        {[
          { name: "Behance", file: "behance" },
          { name: "Instagram", file: "instagram" },
          { name: "LinkedIn", file: "linkedin" },
        ].map((social) => (
          <button
            type="button"
            key={social.file}
            disabled
            aria-label={`${social.name} (profile coming soon)`}
            title={`${social.name} profile coming soon`}
            className="relative size-11"
          >
            <Image
              src={`/images/footer/${social.file}.png`}
              alt=""
              width={84}
              height={92}
              className="pointer-events-none absolute -left-5 -top-3 max-w-none"
              unoptimized
            />
          </button>
        ))}
      </nav>
    </footer>
  );
}
