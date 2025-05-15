import React from "react";

const Navbar = () => {
  return (
    <div className=" bg-[#85A663] text-white flex flex-row justify-between w-full p-2.5">
      <div className="">BlackSolvent</div>
      <div className="">
        <ul className=" flex  space-x-5">
          <li>Home</li>
          <li>Brand</li>
          <li>Reports</li>
          <li>Content</li>
          <li>Products</li>
        </ul>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Navbar;
