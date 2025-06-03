import React from "react";
import TableSOA from "./partails/TableSOA";
import HeroSection from "@/components/HeroSection";
import ErrorMessage from "@/components/ErrorMessage";

interface SOASlug {
  params: Promise<{ slug: string }>;
}

const StatusOfApplication = async ({ params }: SOASlug) => {
  try {
    const { slug } = await params;

    return (
      <div className="my-10">
        <HeroSection />
        <TableSOA slug={slug} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching SOA data:", error);
    return <ErrorMessage errorMessage="SOA data" />;
  }
};

export default StatusOfApplication;
