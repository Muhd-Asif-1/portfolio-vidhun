import { type ReactNode, Suspense } from "react";
import { PortfolioAppearance } from "@/components/portfolio-appearance";
import { PortfolioNavigation } from "@/components/portfolio-navigation";
import { PortfolioFooter } from "@/components/portfolio-sections";

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <PortfolioAppearance>
      <a
        href="#main"
        className="sr-only fixed left-4 top-4 z-50 rounded-full bg-black px-5 py-3 text-white focus:not-sr-only"
      >
        Skip to content
      </a>
      <Suspense fallback={null}>
        <PortfolioNavigation />
      </Suspense>
      {children}
      <PortfolioFooter />
    </PortfolioAppearance>
  );
}
