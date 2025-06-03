import { endpoints } from "@/api/endpoints";
import { safeFetch } from "@/helper/safeFetch";

export const getGalleryPageData = async ({ page }: { page: number }) => {
  const perPage = 6;

  const photoGalleryData = await safeFetch(
    `${endpoints.photoGallery}?p=${page}&page_size=${perPage}`
  );

  const photoGalleryBanner = await safeFetch(endpoints.photoGalleryBanner);

  return {
    photoGalleryData,
    photoGalleryBanner,
  };
};
