"use client";
import { useState } from "react";
import { sections } from "./AboutSideTab";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";

const AboutPage = () => {
  const { data: heroSectionData } = useGetDataQuery({
    url: endpoints.heroSection,
  });

  const [selectedSection, setSelectedSection] = useState(0);

  const handleCategoryClick = (idx: number) => {
    setSelectedSection(idx);
  };

  return (
    <>
      <div className="padding-x py-10">
        <div
          style={{
            backgroundImage: `url(${heroSectionData?.data[0]?.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="h-[8rem] lg:h-[12rem] w-full relative rounded-[0.25rem] overflow-hidden flex justify-center items-center"
        >
          <div className="bg-[#003386BD]/75 absolute inset-0" />
          <span className="typography-h1-bold text-white absolute">
            {sections[selectedSection]?.name}
          </span>
        </div>
      </div>
      <div className="container mx-auto  px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Sidebar Tabs */}
          <aside className="bg-[rgba(216,235,247,0.60)] rounded-[0.75rem] p-[1.25rem]">
            <h2 className="typography-p-large text-text-500 font-semibold mb-[1.25rem]">
              About Us
            </h2>
            <nav className="flex flex-col space-y-2">
              {sections?.map((section, idx) => (
                <button
                  key={idx}
                  onClick={() => handleCategoryClick(idx)}
                  className={`py-3 px-4 text-left rounded-md transition-colors ${
                    selectedSection === idx
                      ? "bg-blue-300 text-white"
                      : "bg-white hover:bg-blue-100 "
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </nav>
          </aside>

          {/* Active Section Content */}
          <main className="md:col-span-3">
            {sections[selectedSection].content}
          </main>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
