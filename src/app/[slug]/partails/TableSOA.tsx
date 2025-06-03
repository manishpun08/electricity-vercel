"use client";
import { useState } from "react";
import { useGetDataQuery } from "@/api/api";
import { endpoints } from "@/api/endpoints";
import TableData from "./Table";

interface TableSOAProps {
  slug: string;
}

const TableSOA = ({ slug }: TableSOAProps) => {
  const [selectedTab, setSelectedTab] = useState("");

  const { data } = useGetDataQuery({
    url: endpoints.soaDetail + `/${slug}/`,
    params: {
      status: selectedTab,
    },
  });

  const tabList = [
    { label: "All", id: "" },
    {
      label: "Under Preliminary Review",
      id: "Under Preliminary Review",
    },
    {
      label: "Reviewed and Comment Said",
      id: "Reviewed and Comment Said",
    },

    { label: "Approved", id: "Approved" },
  ];

  return (
    <div>
      {/* Tabs Header */}
      <div className="padding-x flex justify-between items-center flex-wrap gap-2 mt-[2.88rem] mb-[1.25rem]">
        <div className="flex flex-wrap lg:overflow-x-auto lg:space-x-2 p-[0.38rem] bg-white rounded-[0.5rem] shadow-sm">
          {tabList.map((tab, index) => (
            <div
              key={index}
              onClick={() => setSelectedTab(tab?.id)}
              className={`py-[0.62rem] px-[1.5rem] cursor-pointer transition-all duration-300 rounded-[0.5rem] typography-p1-regular font-medium  ${
                tab?.id === selectedTab
                  ? "bg-blue-50 text-blue-500"
                  : "text-text-500"
              }`}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="padding-x">
        <TableData soaTableData={data} />
      </div>
    </div>
  );
};

export default TableSOA;
