interface Endpoints {
  organizationSetting: string;
  navLinks: string;
  navNews: string;
  popup: string;

  homeHero: string;
  homeImpService: string;
  about: string;
  aboutOrganizational: string;

  homeTeam: string;
  document: string;
  actRule: string;
  categoryDetail: string;
  actDetail: string;

  aboutFunctionDuties: string;

  contact: string;
  photoGallery: string;
  photoGalleryBanner: string;
  photoDetail: string;
  heroSection: string;
  applicationStatus: string;
  soaDetail: string;
  faq: string;

  eFilingData: string;
  createComplain: string;

  chatbot: {
    register: string;
    chatCategory: string;
    subCategory: string;
    chatAnswer: string;
  };
}

export const endpoints: Endpoints = {
  organizationSetting: "/organization/list/",
  navLinks: "/maincategory/list/",
  navNews: "/news/list/",
  popup: "/popup/list/",

  homeHero: "/homepage/list",
  homeImpService: "/services/list",
  about: "/about/list/",
  aboutOrganizational: "/about/organizational-structure/list/",

  homeTeam: "/team/list/",
  document: "/document/list/",
  actRule: "/subcategory/documentlist/",
  categoryDetail: "/subcategory/detail",

  actDetail: "/document/detail",

  aboutFunctionDuties: "/about/function-duties-authorities/list/",

  contact: "/contact/create/",

  photoGallery: "/gallery/list/",
  photoGalleryBanner: "/gallery/banner/list/",
  photoDetail: "/gallery/detail",

  heroSection: "/herosection/list/",
  applicationStatus: "/applicationstatus/list/",
  soaDetail: "/applicationstatus/detail",
  faq: "/faq/list/",

  eFilingData: "/efiling/list/",
  createComplain: "/complain/create/",

  // Chatbot
  chatbot: {
    register: "/user/register",
    chatCategory: "/chat/category/list/",
    subCategory: "/chat/subCategory/list/",
    chatAnswer: "chat/answer/suggestion/get/",
  },
};

export const BASE_API_URL = "http://electricity.pokharauae.com/api/v1";

export const BASE_CHATBOT_URL = process.env.NEXT_PUBLIC_API_URL_CHATBOT;
// export const BASE_SOCKET_URL = process.env.NEXT_PUBLIC_CHATBOT_SOCKET_URL;
