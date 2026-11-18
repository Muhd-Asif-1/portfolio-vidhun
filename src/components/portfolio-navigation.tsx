"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { contact } from "@/lib/contact";

export function PortfolioNavigation() {
  const pathname = usePathname();
  return (
    <header className="absolute inset-x-0 top-5 z-20 flex justify-center">
      <nav
        aria-label="Main navigation"
        className="portfolio-navigation flex rounded-full bg-[#f6f6f6] p-1 text-sm font-medium tracking-[-0.28px]"
      >
        {[
          { label: "Home", href: "/", active: pathname === "/" },
          {
            label: "Works",
            href: "/#works",
            active: pathname.startsWith("/projects/"),
          },
          { label: "About", href: "/about", active: pathname === "/about" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-current={item.active ? "page" : undefined}
            className={`rounded-full px-3.5 py-1.5 ${item.active ? "portfolio-navigation-active bg-black text-white" : ""}`}
          >
            {item.label}
          </Link>
        ))}
        <a
          href={`mailto:${contact.email}`}
          className="rounded-full px-3.5 py-1.5"
        >
          Email Me
        </a>
      </nav>
    </header>
  );
}
