import React from "react";
import PhotoAlbum from "./partials/PhotoAlbum";
import { getGalleryPageData } from "./hooks/photoGallery.hooks";
import ErrorMessage from "@/components/ErrorMessage";

interface Props {
  searchParams?: Promise<{
    page?: string | string[];
  }>;
}

const PhotoGallery: React.FC<Props> = async ({ searchParams }) => {
  try {
    const page = (await Number((await searchParams)?.page)) || 1;

    const { photoGalleryData, photoGalleryBanner } = await getGalleryPageData({
      page,
    });

    return (
      <div className="padding-x my-10">
        <PhotoAlbum
          photoData={photoGalleryData}
          photoGalleryBanner={photoGalleryBanner?.data}
        />
      </div>
    );
  } catch (error) {
    console.error("Error fetching photo gallery data:", error);
    return <ErrorMessage errorMessage="photo gallery" />;
  }
};

export default PhotoGallery;
