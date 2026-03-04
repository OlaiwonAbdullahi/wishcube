import About from "./components/about";
import Hero from "./components/hero";
import Features from "./components/features";
import HowItWorks from "./components/how-it-works";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <div className="w-full p-5">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <Hero />
      <About />
      <Features />
      <HowItWorks />

      <Footer />
    </div>
  );
}
