import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { IHomeTeamDaum } from "../../../Interface/team.interface";

interface Props {
  teamData: IHomeTeamDaum[];
}

const TeamBottom: React.FC<Props> = ({ teamData }) => {
  return (
    <div className="mb-[1.5rem] lg:mb-[2.5rem] padding-x">
      <h3 className="text-text-500 font-bold typography-h3 leading-[150%] pb-[1.25rem]">
        Technical Personalities
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-6 lg:mt-0 gap-4 lg:gap-10 max-w-[280rem] mx-auto ">
        {teamData?.map((team, index) => (
          <div
            key={index}
            className="w-full lg:w-[19.25rem] group mx-auto flex flex-col bg-background-100 border-2 border-background-100 rounded-[0.5rem]"
          >
            {/* Image */}
            <div className="aspect-[344.53/272.00] overflow-hidden cursor-pointer w-full">
              <Image
                src={team?.image}
                alt={team?.name}
                width={800}
                height={800}
                className="w-full h-full object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
            </div>

            {/* Text box */}
            <div className="  overflow-hidden">
              <div className="p-[0.57rem] lg:p-[1.56rem]">
                <h2 className="text-blue-500 typography-p-large font-bold pb-[0.5rem]">
                  {team?.name}
                </h2>
                <h3 className="typography-p-regular text-text-500 font-bold pb-[0.5rem]">
                  {team?.designation}
                </h3>

                <Link
                  href={`mailto:${team?.email}`}
                  className="typography-regular text-text-500 font-medium flex items-center lg:gap-[0.28rem] cursor-pointer"
                >
                  <CiMail />
                  {team?.email}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamBottom;
