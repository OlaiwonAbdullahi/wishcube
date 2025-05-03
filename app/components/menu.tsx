"use client";

import { TbSmartHome } from "react-icons/tb";
import { PiGiftThin } from "react-icons/pi";
import { LiaWalletSolid } from "react-icons/lia";
import { CiVideoOn } from "react-icons/ci";
import Link from "next/link";

const Menu = () => {
  return (
    <div>
      <ul className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center justify-around w-full sm:w-1/2 md:w-1/4 lg:w-1/5 h-16 bg-white rounded-full shadow-md shadow-[#8c52ff]/15 p-2 z-50">
        <Link href={"/dashboard"}>
          <li>
            <TbSmartHome className="size-5 text-[#1C1C1C]" />
          </li>
        </Link>
        <Link href={"/gift"}>
          <li>
            <PiGiftThin className="size-5 text-[#1C1C1C]" />
          </li>
        </Link>
        <Link href={"/wallet"}>
          <li>
            <LiaWalletSolid className="size-5 text-[#1C1C1C]" />
          </li>
        </Link>
        <Link href={"/video"}>
          <li>
            <CiVideoOn className="size-5 text-[#1C1C1C]" />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
