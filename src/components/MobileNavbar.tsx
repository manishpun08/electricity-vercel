"use client";
import { INavLinksDaum } from "@/Interface/navlinks.interface";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface Props {
  mobileData: INavLinksDaum[];
}

const MobileNavbar: React.FC<Props> = ({ mobileData }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <div className="md:hidden px-6 py-3">
      <div className="flex justify-between items-center">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-text-500 ml-auto"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="mt-4 flex flex-col gap-4">
          {mobileData?.map((navItem) => {
            const hasSubcategories = navItem?.subcategories?.length > 0;
            const isActive = activeDropdown === navItem.name;

            return (
              <div key={navItem?.name} className="flex flex-col">
                {/* If NO subcategories => Link */}
                {!hasSubcategories ? (
                  <Link
                    href={navItem?.main_ctg_slug}
                    className="flex items-center justify-between text-text-500 font-medium"
                    onClick={() => setMobileMenuOpen(false)} // close menu after link click
                  >
                    {navItem?.name}
                  </Link>
                ) : (
                  // If HAS subcategories => Button to toggle dropdown
                  <button
                    onClick={() => toggleDropdown(navItem?.name)}
                    className="flex items-center justify-between text-text-500 font-medium"
                  >
                    {navItem?.name}
                    <ChevronDown
                      className={`h-4 w-4 transform transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}

                {/* Subcategory Dropdown */}
                {isActive && hasSubcategories && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {navItem?.subcategories?.map((subItem) => (
                      <Link
                        key={subItem?.name}
                        href={subItem?.sub_ctg_slug}
                        onClick={() => setMobileMenuOpen(false)} // close menu after sub link click
                        className="text-sm text-text-500 hover:text-blue-500"
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
          <button className="mt-4 text-white uppercase font-semibold bg-blue-500 px-4 py-2 rounded-[0.5rem]">
            dms
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
