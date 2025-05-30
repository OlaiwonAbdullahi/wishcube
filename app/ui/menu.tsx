"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { TbSmartHome } from "react-icons/tb";
import { PiGiftThin } from "react-icons/pi";
import { LiaWalletSolid } from "react-icons/lia";
import { CiVideoOn } from "react-icons/ci";
import { BsLayoutTextWindow } from "react-icons/bs";
import { TbGiftFilled } from "react-icons/tb";
import { BiSolidLayout } from "react-icons/bi";
import { GoHomeFill } from "react-icons/go";
import { IoIosWallet } from "react-icons/io";
import { FaVideo } from "react-icons/fa";
import { IconType } from "react-icons";

// Define interface for navigation items
interface NavItem {
  href: string;
  icon: IconType;
  activeIcon: IconType;
}

const Menu: React.FC = () => {
  const pathname = usePathname();

  const navItems: NavItem[] = [
    {
      href: "/generateWebsite",
      icon: BsLayoutTextWindow,
      activeIcon: BiSolidLayout,
    },
    {
      href: "/gift",
      icon: PiGiftThin,
      activeIcon: TbGiftFilled,
    },
    {
      href: "/dashboard",
      icon: TbSmartHome,
      activeIcon: GoHomeFill,
    },
    {
      href: "/fundWallet",
      icon: LiaWalletSolid,
      activeIcon: IoIosWallet,
    },
    {
      href: "/video",
      icon: CiVideoOn,
      activeIcon: FaVideo,
    },
  ];

  return (
    <div>
      <ul className="fixed bottom-4 left-1/2 -translate-x-1/2 flex gap-4 items-center justify-around w-full sm:w-1/2 md:w-1/4 lg:w-1/5 h-16 bg-white rounded-full shadow-md shadow-[#8c52ff]/15 p-2 z-50">
        {navItems.map(({ href, icon: Icon, activeIcon: ActiveIcon }) => {
          const isActive = pathname === href;
          const IconComponent = isActive ? ActiveIcon : Icon;

          return (
            <Link key={href} href={href}>
              <li className="flex items-center justify-center">
                <IconComponent
                  className={`transition-all duration-200 text-[#1C1C1C] ${
                    isActive ? "size-6" : "size-5"
                  }`}
                />
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
