import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getOrganizationSettingData = async () => {
  const organizationSettingData = await safeFetch(
    endpoints.organizationSetting
  );
  return organizationSettingData;
};

export const getNavLinksData = async () => {
  const navLinks = await safeFetch(endpoints.navLinks);
  return navLinks;
};

export const getNavNewsData = async () => {
  const navNews = await safeFetch(endpoints.navNews);
  return navNews;
};

export const getHeroSectionData = async () => {
  const heroSection = await safeFetch(endpoints.heroSection);
  return heroSection;
};

export const getNavData = async () => {
  const navData = await safeFetch(endpoints.applicationStatus);

  return navData;
};
