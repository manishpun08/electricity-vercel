import React from "react";
import Hero from "./partials/Hero";
import ImpServices from "./partials/ImpServices";
import MissionVision from "./partials/MissionVision";
import LatestNotices from "./partials/LatestNotices";
import TeamSection from "../../components/TeamSection";
import MandatesCommission from "./partials/MandatesCommission";
import TeamBottom from "./partials/TeamBottom";
import { getHomePageData } from "./hooks/home.hook";
import ErrorMessage from "@/components/ErrorMessage";

const Home = async () => {
  try {
    const {
      homeData,
      documentData,
      impServiceData,
      missionVisionData,
      teamData,
    } = await getHomePageData();

    return (
      <div>
        <Hero heroData={homeData?.data?.[0]} />
        <ImpServices impServiceData={impServiceData?.data} />
        <MissionVision
          missionVisionData={missionVisionData?.data?.[0]?.mission_vision}
        />
        <LatestNotices
          serviceData={impServiceData?.data}
          documentData={documentData?.results}
        />
        <TeamSection teamData={teamData?.data} />
        <MandatesCommission
          mandatesData={missionVisionData?.data?.[0]?.goals_objectives}
        />
        <TeamBottom teamData={teamData?.data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching home data:", error);
    return <ErrorMessage errorMessage="home data" />;
  }
};

export default Home;
