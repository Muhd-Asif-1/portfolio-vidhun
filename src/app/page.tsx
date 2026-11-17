import {
  PortfolioFooter,
  PortfolioHero,
  PortfolioWorks,
} from "@/components/portfolio-sections";
import { Testimonials } from "@/components/testimonials";
import { contact } from "@/lib/contact";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only fixed left-4 top-4 z-50 rounded-full bg-black px-5 py-3 text-white focus:not-sr-only"
      >
        Skip to content
      </a>
      <header className="absolute inset-x-0 top-5 z-20 flex justify-center">
        <nav
          aria-label="Main navigation"
          className="flex rounded-full bg-[#f6f6f6] p-1 text-sm font-medium tracking-[-0.28px]"
        >
          <a
            href="#home"
            className="rounded-full bg-black px-3.5 py-1.5 text-white"
          >
            Home
          </a>
          <a href="#works" className="rounded-full px-3.5 py-1.5">
            Works
          </a>
          <a href="#about" className="rounded-full px-3.5 py-1.5">
            About
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="rounded-full px-3.5 py-1.5"
          >
            Email Me
          </a>
        </nav>
      </header>
      <main id="main">
        <PortfolioHero />
        <PortfolioWorks />
        <Testimonials />
      </main>
      <PortfolioFooter />
    </>
  );
}
