import ErrorMessage from "@/components/ErrorMessage";
import { getOrganizationSettingData } from "@/hooks/globalHook";
import HeroSection from "../../components/HeroSection";
import GetInTouch from "./partials/GetInTouch";
import Location from "./partials/Location";

const ContactUs = async () => {
  try {
    const organizationSettingData = await getOrganizationSettingData();

    return (
      <div className="padding-x bg-background-400 ">
        <HeroSection />
        <GetInTouch data={organizationSettingData} />

        <Location mapUrl={organizationSettingData?.data[0]?.google_map} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching contact data:", error);
    return <ErrorMessage errorMessage="contact data" />;
  }
};

export default ContactUs;
