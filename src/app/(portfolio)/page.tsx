import { PortfolioHero, PortfolioWorks } from "@/components/portfolio-sections";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main id="main" data-page-path="/">
      <PortfolioHero />
      <PortfolioWorks />
      <Testimonials />
    </main>
  );
}
