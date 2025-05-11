import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className=" flex items-center gap-2 text-2xl font-bold">
            <Image
              src="/wishcubelogo.png"
              alt="logo"
              width={50}
              height={50}
              className=" rounded-full"
            />
            <h2>WishCube</h2>
          </div>
          <div className=" w-1/2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla
            minus amet tenetur quaerat voluptas, recusandae quis ipsam
            voluptatem velit dolorum.
          </div>
        </div>
      </div>
      <div className="">
        <h2>Quick Links</h2>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    
    </div>
    
  );
};

export default Footer;
