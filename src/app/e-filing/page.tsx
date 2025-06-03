import ErrorMessage from "@/components/ErrorMessage";
import React from "react";
import { getEFilingData } from "./hooks/getEfiling";
import { IEFilingDaum } from "./inteface/e-filing";

const EFiling = async () => {
  try {
    const { eFilingData } = await getEFilingData();

    const dataEFiling: IEFilingDaum = eFilingData?.data[0];

    return (
      <>
        <div className="padding-x">
          <h3 className="typography-h3 font-semibold text-text-500 leading-[150%] py-[2.5rem]">
            {dataEFiling?.title}
          </h3>

          <p
            className="pb-[3.13rem]"
            dangerouslySetInnerHTML={{
              __html: dataEFiling?.description || "",
            }}
          />
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching e-filing data:", error);
    return <ErrorMessage errorMessage="e-filing data" />;
  }
};

export default EFiling;
