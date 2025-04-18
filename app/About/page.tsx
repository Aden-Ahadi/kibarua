import CtaSection from "./cta-section";
import HeroSection from "./hero-section";
import ProblemSection from "./problem-section";
import SolutionSection from "./solution-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />

      <CtaSection />
    </div>
  );
}
