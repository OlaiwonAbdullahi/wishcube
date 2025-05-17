import React from "react";
import Navbar from "./components/navbar";
import Header from "./components/header";
import Footer from "./components/footer";
import MarketPlace from "./components/marketPlace";

const Page = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Footer />

      <MarketPlace />
    </div>
  );
};

export default Page;
