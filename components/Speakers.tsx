import React from "react";
import { speakers } from "./constants";
import PhotoCard from "./ui/photoCard";

const Speakers = () => {
  return (
    <div
      className="bg-[url(/images/bg/white-bg.webp)] bg-cover bg-no-repeat px-2 sm:px-4 py-16 md:p-16 lg:px-24 text-black"
      id="Speakers"
    >
      <div className="flex flex-col justify-center items-center gap-12 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-black relative pb-3">
          Our Eminent Speakers
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-orange-300 rounded-full"></div>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-16 w-full">
          {speakers.map((speaker, index) => (
            <PhotoCard
              key={index}
              profileimage={speaker.profileimage}
              fullName={speaker.fullName}
              des={speaker.des}
              linkedin={speaker.linkedin}
              website={speaker.website}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Speakers;
