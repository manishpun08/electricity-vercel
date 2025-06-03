"use client";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import React, { useState } from "react";
import TabContent from "./TabContent";

interface Tab {
  label: string;
  id: string;
}

const NoticeTab = () => {
  const [selectedTab, setSelectedTab] = useState("");

  const { data } = useGetDataQuery({
    url: endpoints.document,
    params: {
      search: selectedTab,
    },
  });

  const tabs = [
    {
      label: "General",
      id: "",
    },
    {
      label: "Tariff ",
      id: "Law",
    },
    {
      label: "Regulations",
      id: "Regulations",
    },
    {
      label: "Consumers",
      id: "Consumers",
    },
    {
      label: "Licensees ",
      id: "Licensees",
    },
  ];

  return (
    <div className="w-full">
      {/* Tab buttons */}
      <div className="flex flex-wrap lg:gap-4 bg-blue-400 rounded-t-[0.7rem] lg:pt-[0.31rem] pb-[0.25rem] lg:pl-[0.25rem] lg:pr-[0.25rem]">
        {tabs.map((tab: Tab, index: number) => (
          <button
            key={index}
            onClick={() => setSelectedTab(tab?.id)}
            className={`p-[0.75rem] lg:p-[1rem] typography-p-regular font-semibold text-center text-white border-b-2 ${
              tab.id === selectedTab ? "border-white" : "border-transparent"
            } hover:border-white`}
          >
            {tab?.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-4">
        <TabContent documentData={data?.results} />
      </div>
    </div>
  );
};

export default NoticeTab;
