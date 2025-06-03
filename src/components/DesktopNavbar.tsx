"use client";
import { INavLinksDaum } from "@/Interface/navlinks.interface";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  desktopData: INavLinksDaum[];
}

const DesktopNavbar: React.FC<Props> = ({ desktopData }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="hidden md:flex justify-between items-center py-3 padding-x">
      <div className="flex flex-wrap gap-[2.4rem] items-center">
        {desktopData.map((navItem) => {
          const isActive = activeDropdown === navItem.id;
          const hasSubcategories = navItem?.subcategories?.length > 0;

          return (
            <div
              key={navItem?.name}
              className="relative group"
              onMouseEnter={() => setActiveDropdown(navItem?.id)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* If NO subcategories then  a link */}
              {!hasSubcategories ? (
                <Link
                  href={navItem?.main_ctg_slug}
                  className="group relative cursor-pointer typography-p-regular font-medium text-text-500 hover:text-blue-500 transition-colors duration-300 flex items-center gap-1"
                >
                  {navItem?.name}
                </Link>
              ) : (
                // If HAS subcategories, then just a button
                <button
                  onClick={() => toggleDropdown(navItem?.id)}
                  className="group relative cursor-pointer typography-p-regular font-medium text-text-500 hover:text-blue-500 transition-colors duration-300 flex items-center gap-1"
                >
                  {navItem?.name}
                  <ChevronDown
                    className={`h-4 w-4 transform transition-transform duration-300 ${
                      isActive ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
              )}

              {/* Underline animation */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 -bottom-2 h-[2px] w-0 bg-blue-500 transition-all duration-300 group-hover:w-full ${
                  isActive ? "w-full" : ""
                }`}
              ></div>

              {/* Dropdown Menu */}
              {hasSubcategories && (
                <div
                  className={`absolute left-0 top-full mt-3.5 w-48 bg-white shadow-lg rounded-md z-50 transition-all duration-200 ${
                    isActive ? "opacity-100 visible" : "opacity-0 invisible"
                  }`}
                >
                  {navItem?.subcategories?.map((subItem) => (
                    <Link
                      key={subItem?.name}
                      href={`${subItem?.sub_ctg_slug}`}
                      onClick={() => setActiveDropdown(null)}
                      className="block px-4 py-[0.62rem] text-sm text-text-500 hover:bg-blue-400 hover:text-white"
                    >
                      {subItem?.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          );
        })}
        {/* DMS Button */}
        <button className="text-white uppercase font-semibold typography-p-regular bg-blue-500 px-4 py-2 rounded-[0.5rem] cursor-pointer">
          dms
        </button>
      </div>
    </div>
  );
};

export default DesktopNavbar;
