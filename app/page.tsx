import React from "react";
import Hero from "./components/hero";
import Feature from "./components/feature";
import HowItWorks from "./components/howItWorks";
import Cta from "./components/cta";
import ClientIntakeForm from "./components/clientIntakeForm";

const Page = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <HowItWorks />
      <Cta />
      <ClientIntakeForm />
    </div>
  );
};

export default Page;
