import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";

interface HeaderProps {
  // Add props if needed in the future
}

interface NavItem {
  label: string;
  isActive: boolean;
  hasDropdown?: boolean;
}

const Header: React.FC<HeaderProps> = () => {
  const navItems: NavItem[] = [
    { label: "All Brands", isActive: true },
    { label: "More", isActive: false, hasDropdown: true },
  ];

  return (
    <header className="bg-[#000000] flex items-center justify-between px-6 h-20 shadow-lg">
      <div className="text-3xl font-semibold text-white tracking-tight">
        Marketplace
      </div>

      <div className="max-w-xs bg-white/10 border border-white/20 text-white rounded-full px-1 py-0.5 mx-4">
        <ul className="flex items-center justify-center">
          {navItems.map((item, index) => (
            <li
              key={index}
              className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors duration-200 cursor-pointer flex items-center gap-2 ${
                item.isActive
                  ? "bg-white text-black font-medium"
                  : "hover:bg-white/10"
              }`}
            >
              {item.label}
              {item.hasDropdown && <MdKeyboardArrowDown className="text-lg" />}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex-1 max-w-1/4 relative">
        <div className="flex items-center text-white bg-white/10 backdrop-blur-lg rounded-lg overflow-hidden border border-white/10">
          <div className="flex items-center justify-center pl-3">
            <CiSearch className="size-5 text-white/70" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent p-2.5 text-white placeholder:text-white/70 w-full focus:outline-none"
            aria-label="Search marketplace"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
