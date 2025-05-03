import React from "react";
import Menu from "../components/menu";
import Generator from "../components/generator";

const Page = () => {
  return (
    <div>
      <div className="">
        <Generator />
      </div>
      <div className="">
        <Menu />
      </div>
    </div>
  );
};

export default Page;
