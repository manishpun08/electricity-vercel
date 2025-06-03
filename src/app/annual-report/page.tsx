import Image from "next/image";
import React from "react";
import annual from "@/assets/annual.png";

const reports = [
  {
    id: 1,
    image: annual,
    title: "आ.व. २०८०/८१ को वार्षिक प्रतिवेदन",
    description: "आ.व. २०८०/८१ को वार्षिक प्रतिवेदन ".repeat(10),
  },
  {
    id: 2,
    image: annual,
    title: "आ.व. २०७९/८० को वार्षिक प्रतिवेदन",
    description: "आ.व. २०७९/८० को वार्षिक प्रतिवेदन ".repeat(8),
  },
];
const AnnualReport = () => {
  return (
    <div className="padding-x my-10">
      <h3 className="typography-h3 text-black font-semibold leading-[150%] pb-5 lg:pb-10">
        Annual Report
      </h3>

      {reports.map((report) => (
        <div
          key={report.id}
          className="p-10 mb-6 bg-background-100 rounded-[0.5rem] flex gap-[2.56rem]"
        >
          <div className="w-[15.3125rem] h-[18.5625rem] border-b-[0.5px] border-text-100 shrink-0">
            <Image
              src={report.image}
              alt={report.title}
              width={600}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="typography-p-large font-semibold text-text-500 pb-[1.88rem]">
              {report.title}
            </h1>
            <p className="text-text-400 typography-p-regular text-justify">
              {report.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnnualReport;
