import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getAboutPageData = async () => {
  const functionDutiesData = await safeFetch(endpoints.aboutFunctionDuties);
  const teamData = await safeFetch(endpoints.homeTeam);
  const aboutOrganizational = await safeFetch(endpoints.aboutOrganizational);

  return {
    functionDutiesData,
    teamData,
    aboutOrganizational,
  };
};

export const getAboutIntroductionData = async () => {
  const aboutIntroductionData = await safeFetch(endpoints.about);

  return aboutIntroductionData;
};
