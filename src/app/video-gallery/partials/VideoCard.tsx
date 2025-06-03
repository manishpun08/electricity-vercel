import { videos } from "@/data/videos";
import React from "react";

const VideoCard = () => {
  return (
    <div>
      <h3 className="typography-h3 text-black font-semibold leading-[150%] pb-5 lg:pb-10">
        Video Gallery
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[2rem] lg:gap-[3rem]">
        {videos?.map((video, index) => (
          <div key={index} className="flex flex-col lg:gap-[0.88rem]">
            <div className="relative w-full lg:w-[26.15625rem] aspect-video">
              <iframe
                src={video?.src}
                title={video?.alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-[0.5rem]"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoCard;
