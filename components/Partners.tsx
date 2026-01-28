import React from "react";
import Image from "next/image";

const Partners = () => {
  return (
    <div className="bg-cover bg-no-repeat px-2 sm:px-4 pt-6 pb-8 md:pt-8 md:pb-12 lg:px-24 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-6 text-center pb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-black relative pb-3">
            Conference Partners
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-orange-300 rounded-full"></div>
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-14">
            <Image
              src="/images/logo/unstop-logo.png"
              alt="Unstop Logo"
              width={200}
              height={100}
              className="object-contain"
            />
            <Image
              src="/images/logo/deakin-university.svg"
              alt="Unstop Logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
