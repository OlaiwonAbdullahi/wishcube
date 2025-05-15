import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Experience from "./components/experience";
import HowCanIHelp from "./components/cta";
import Contact from "./components/contact";
import Footer from "./components/footer";
const Page = () => {
  return (
    <div className=" border-0 md:border-x md:border-gray-300 md:w-2/3  w-full mx-auto space-y-10 ">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <HowCanIHelp />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
