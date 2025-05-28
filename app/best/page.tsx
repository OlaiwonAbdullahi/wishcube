import React from "react";
import PricingHero from "./components/pricingHero";
import Mission from "./components/mission";
import Team from "./components/team";
import PricingCard from "./components/pricingCard";

const Page = () => {
  return (
    <div className="bg-white">
      <PricingHero />
      <PricingCard />

      <Mission />
      <Team />
    </div>
  );
};

export default Page;
