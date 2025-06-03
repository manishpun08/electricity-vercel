import DesktopNavbar from "@/components/DesktopNavbar";
import ErrorMessage from "@/components/ErrorMessage";
import MobileNavbar from "@/components/MobileNavbar";
import { navLinks } from "@/data/navLinks";
import { getNavLinksData } from "@/hooks/globalHook";
import {
  INavLinksDaum,
  INavLinksSubcategory,
} from "@/Interface/navlinks.interface";

const Navbar = async () => {
  try {
    const navLinkData = await getNavLinksData();

    const data: INavLinksDaum[] = navLinkData?.data;
    const formattedLinks: INavLinksDaum[] = navLinks.map((data, index) => ({
      id: index.toString(),
      name: data.name,
      main_ctg_slug: data.url,
      ordering: index,
      subcategories:
        data?.dropdown?.map((item: INavLinksSubcategory, index: string) => ({
          id: index.toString(),
          name: item.name,
          sub_ctg_slug: item.url,
          ordering: index,
        })) || [],
    }));
    const mergedData = [...data, ...formattedLinks];
    return (
      <nav className="bg-background-100">
        <MobileNavbar mobileData={mergedData} />
        <DesktopNavbar desktopData={mergedData} />
      </nav>
    );
  } catch (error) {
    console.error("Error fetching navigation links:", error);
    return <ErrorMessage errorMessage="navigation links" />;
  }
};

export default Navbar;
