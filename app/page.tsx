import About from "./components/about";
import Hero from "./components/hero";
import Features from "./components/features";
import HowItWorks from "./components/how-it-works";

export default function HomePage() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Features />
      <HowItWorks />
    </div>
  );
}
