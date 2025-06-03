import { ReactNode } from "react";

import Introduction from "./Introduction";
import MissionVision from "./MissionVission";
import FunctionDuties from "./FunctionDuties";
import ReportOverview from "./ReportOverview";
import OrganizationStructure from "./OrganizationStructure";
import CeoMessage from "./CeoMessage";
import EmployeeDetail from "./EmployeeDetail";
import Commission from "./Commission";

interface Section {
  name: string;
  content: ReactNode;
}
export const sections: Section[] = [
  {
    name: "Introduction",
    content: <Introduction />,
  },
  {
    name: "Vision and Mission",
    content: <MissionVision />,
  },
  {
    name: "Electricity Report Overview",
    content: <ReportOverview />,
  },
  {
    name: "Functions, Duties & Authorities",
    content: <FunctionDuties />,
  },
  {
    name: "Commission",
    content: <Commission />,
  },
  {
    name: "Organizational Structure",
    content: <OrganizationStructure />,
  },
  {
    name: "Message from Chairperson",
    content: <CeoMessage />,
  },
  {
    name: "Employee Details",
    content: <EmployeeDetail />,
  },
];
