"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import { IHomeHeroDaum } from "../interface/homeHero.interface";
import PdfModal from "@/components/modal/PdfModal";

interface Props {
  heroData: IHomeHeroDaum;
}

const Hero: React.FC<Props> = ({ heroData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Open modal on initial load
    setIsModalOpen(true);
  }, []);

  return (
    <div className="my-[1.5rem] lg:my-[2.5rem] padding-x">
      {/* Linear Gradient */}
      <div
        className="relative z-10 bg-blue-500 text-white pt-[3.22rem] px-4 lg:px-0 lg:pl-[3.75rem] pb-[4.25rem] rounded-[0.25rem]"
        // style={{
        //   backgroundImage:
        //     "linear-gradient(0deg, rgba(0, 51, 134, 0.74) 0%, rgba(0, 51, 134, 0.74) 100%)",
        // }}
      >
        {/* Background Image */}
        <div className="absolute inset-0 w-full ">
          <Image
            src={heroData?.image}
            alt="Background Image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover opacity-20 "
          />
        </div>

        <div className="lg:w-[32rem]">
          <h1 className=" text-[1.9375rem] lg:text-[2.9375rem] text-white font-bold leading-[130%] pb-[0.62rem]">
            {heroData?.slogan}
          </h1>
          <p className="typography-p-large text-white pb-[1.25rem]">
            {heroData?.title}
          </p>

          <div className="flex flex-col lg:flex-row gap-[1.12rem]">
            <button className="py-[0.62rem] px-[1.25rem] text-blue-500 typography-p-large font-semibold bg-white rounded-[0.5rem] shadow-[0px_4px_5.3px_0px rgba(0,0,0,0.25)] cursor-pointer">
              Explore Regulation
            </button>

            <button className="py-[0.62rem] px-[1.25rem] border border-white text-white typography-p-large font-semibold bg-[rgba(255,255,255,0.12)] rounded-[0.5rem] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] backdrop-blur-md cursor-pointer">
              Submit a Complaint
            </button>
          </div>
        </div>
      </div>

      <PdfModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default Hero;
