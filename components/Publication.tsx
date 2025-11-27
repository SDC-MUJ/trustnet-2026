import React from "react";
import Image from "next/image";

const Publication = () => {
  return (
    <div className="bg-cover bg-no-repeat px-2 sm:px-4 py-6 md:p-12 lg:px-24 text-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-center gap-12 text-center pb-12 border-b border-gray-400">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-black relative pb-3">
            Publication
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-0.5 bg-orange-300 rounded-full"></div>
          </h2>
          {/* <p className="max-w-3xl text-center text-gray-700 text-lg">
            Submitted to Springer for approval.
          </p> */}
          <p className="max-w-5xl text-justify text-gray-700 text-lg ">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <Image
              src="/images/logo/scopus-logo.png"
              alt="Scopus Logo"
              width={200}
              height={100}
              className="object-contain"
            />
            {/* <Image
              src="/images/logo/elsevier-logo.png"
              alt="Springer Logo"
              width={80}
              height={80}
              className="object-contain"
            /> */}
            <Image
              src="/images/logo/springer.png"
              alt="Springer Logo"
              width={200}
              height={100}
              className="object-contain"
            />
          </div>
          <p className="max-w-5xl text-lg text-justify text-gray-700 ">
              The proceedings of TrustNet’26 will be published in Lecture Notes
              in Networks and Systems (LNNS). LNNS is abstracted and indexed in
              SCOPUS, INSPEC, WTI Frankfurt eG, zbMATH, SCImago.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Publication;
