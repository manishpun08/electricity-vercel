import { getNavData } from "@/hooks/globalHook";
import { ISAOResult } from "@/Interface/soa.interface";

const navData = await getNavData();

export const navLinks = [
  {
    name: "About Us",
    url: "/about",
    dropdown: [
      { name: "Introduction", url: "/about" },
      { name: "Vision/Mission", url: "/about" },
      { name: "Function, Duties & Auth.", url: "/about" },
      { name: "Commission", url: "/about" },
      { name: "Organizational Strut", url: "/about" },
      { name: "Chairperson Message ", url: "/about" },
      { name: "Employee Details", url: "/about" },
    ],
  },
  {
    name: "Laws & Regulations",
    url: "/act",
    dropdown: [
      { name: "Act & Rules", url: "/act" },
      { name: "ByLaws", url: "/act" },
      { name: "Directive", url: "/act" },
      { name: "Grid Code", url: "/act" },
      { name: "Manual", url: "/act" },
      { name: "Proposed Draft", url: "/act" },
    ],
  },

  {
    name: "Status of Application",
    url: "/status-of-application",
    dropdown: navData?.results.map((item: ISAOResult) => ({
      name: item?.title,
      url: `${item?.slug}`,
    })),
    // { name: "Right Share Pre Approval", url: "/notice-board/announcements" },
    // { name: "PPA Approval", url: "/notice-board/updates" },
    // { name: "Dispute Resolution", url: "/notice-board/updates" },
    // { name: "Share Structure Change", url: "/notice-board/updates" },
    // { name: "Tariff Filling", url: "/notice-board/updates" },
    // { name: "Acquisition Merger", url: "/notice-board/updates" },
    // { name: "Other Applications", url: "/notice-board/updates" },
  },

  // {
  //   name: "Downloads",
  //   url: "/downloads",
  //   dropdown: [
  //     { name: "Annual Reports ", url: "/downloads/forms" },
  //     { name: "Document", url: "/downloads/documents" },
  //     { name: "Others", url: "/downloads/reports" },
  //   ],
  // },

  {
    name: "Gallery",
    url: "/gallery",
    dropdown: [
      { name: "Photo Gallery", url: "/photo-gallery" },
      { name: "Video Gallery", url: "/video-gallery" },
    ],
  },
  {
    name: "Contact Us",
    url: "/contact-us",
  },
  {
    name: "E-Filing",
    url: "/e-filing",
  },
];
