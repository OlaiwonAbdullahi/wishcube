import React from "react";
import Hero from "./components/hero";
import Feature from "./components/feature";
import HowItWorks from "./components/howItWorks";
import Cta from "./components/cta";

const Page = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <HowItWorks />
      <Cta />
    </div>
  );
};

export default Page;
