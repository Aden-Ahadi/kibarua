import Hero03 from "@/components/hero-03/hero-03";
import PopularProjects from "./components/Features";
import { Feature1 } from "./components/HowItWorks";
import { CTA1 } from "./components/CTA";
import Footer05Page from "@/components/footer-05/footer-05";

export default function Home() {
  return (
    <>
      <Hero03 />
      <PopularProjects />
      <Feature1 />
      <CTA1 />
    </>
  );
}
