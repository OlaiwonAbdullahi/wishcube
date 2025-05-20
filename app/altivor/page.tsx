import React from "react";
//import RiskReview from "./components/riskReview";
import Cta from "./components/cta";
import CustomContract from "./components/customContract";
//import Drafting from "./components/drafting";
//import Intro from "./components/intro";
//import ServiceCards from "./components/serviceCards";

const Page = () => {
  return (
    <div>
      {/* <Intro />
      <ServiceCards />
      <RiskReview />
      <Drafting />
      */}
      <CustomContract />
      <Cta />
    </div>
  );
};

export default Page;
