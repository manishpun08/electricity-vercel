import ErrorMessage from "@/components/ErrorMessage";
import { getHeroSectionData } from "@/hooks/globalHook";
import { IHeroSectionRoot } from "@/Interface/heroSection.interface";
import React from "react";

const HeroSection = async () => {
  try {
    const heroSectionData: IHeroSectionRoot = await getHeroSectionData();
    return (
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
            {heroSectionData?.data[0]?.title}
          </span>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching hero data:", error);
    return <ErrorMessage errorMessage="hero data" />;
  }
};

export default HeroSection;
