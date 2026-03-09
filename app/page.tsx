import React from "react";
import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import Cta from "./components/cta";
import Footer from "./components/footer";

const Page = () => {
  return (
    <>
      <div className="">
        <section id="hero">
          <Hero />
        </section>
      </div>
      <div className="flex flex-col md:gap-24 gap-10 mx-auto px-4 sm:px-8 md:px-12 lg:px-[100px] pt-8 md:pt-12">
        <section id="about">
          <About />
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="cta">
          <Cta />
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Page;
