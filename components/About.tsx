"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";

const sdgoals = [
  {
    id: 1,
    pic: "/images/sdgoals/1.png",
  },
  {
    id: 2,
    pic: "/images/sdgoals/2.png",
  },
  {
    id: 3,
    pic: "/images/sdgoals/3.png",
  },
  {
    id: 4,
    pic: "/images/sdgoals/4.png",
  },
  {
    id: 18,
    pic: "/images/sdgoals/18.jpeg",
  },
  {
    id: 5,
    pic: "/images/sdgoals/5.png",
  },
  {
    id: 6,
    pic: "/images/sdgoals/6.png",
  },
  {
    id: 7,
    pic: "/images/sdgoals/7.png",
  },
  {
    id: 8,
    pic: "/images/sdgoals/8.png",
  },
  {
    id: 18,
    pic: "/images/sdgoals/18.jpeg",
  },
  {
    id: 9,
    pic: "/images/sdgoals/9.png",
  },
  {
    id: 10,
    pic: "/images/sdgoals/10.jpg",
  },
  {
    id: 11,
    pic: "/images/sdgoals/11.png",
  },
  {
    id: 12,
    pic: "/images/sdgoals/12.png",
  },
  {
    id: 18,
    pic: "/images/sdgoals/18.jpeg",
  },
  {
    id: 13,
    pic: "/images/sdgoals/13.png",
  },
  {
    id: 14,
    pic: "/images/sdgoals/14.png",
  },
  {
    id: 15,
    pic: "/images/sdgoals/15.png",
  },
  {
    id: 16,
    pic: "/images/sdgoals/16.jpg",
  },
  {
    id: 17,
    pic: "/images/sdgoals/17.png",
  },
  {
    id: 18,
    pic: "/images/sdgoals/18.jpeg",
  },
];

const aboutText = `Established in 2011, Manipal University Jaipur (MUJ) is a proud member of the globally acclaimed Manipal Group, carrying forward the visionary legacy of Padma Shri Dr. T. M. A. Pai, whose mission was to make world-class education accessible and transformative.
With NAAC A+ accreditation, MUJ stands as a multi-disciplinary, future-focused university that blends academic excellence with innovation. Offering a wide spectrum of career-oriented programs across engineering, architecture, design, law, management, humanities, sciences, and more, MUJ is committed to nurturing well-rounded individuals prepared for the demands of a global world.
The university’s reputation is reinforced by national and international recognition: ranked 58th in both the University and Engineering categories by NIRF 2025 and featured in prestigious global rankings such as QS Asia (701–750 band) and Times Higher Education (1201–1500 band).
Beyond academics, MUJ is known for its state-of-the-art infrastructure, cutting-edge research ecosystem, and a campus designed with sustainability at its core. It is the proud recipient of a 5-star GRIHA rating and the ASSOCHAM Award for Best University Campus, testaments to its commitment to excellence in every dimension.
`;

const introText =
  "The <strong><b>Department of Computer Science and Engineering, Manipal University Jaipur,</b></strong> is pleased to announce that it will host the International Conference on Trusted Networks and Intelligent Systems (TrustNet 2026) on February 16–17, 2026. This conference is centered around a shared global goal: creating a safe, smart, and sustainable digital future. Discussions and research will focus on <b>Cybersecurity</b> and <b>Artificial Intelligence (AI)</b>, contributing to both the <b>United Nations Sustainable Development Goals (SDGs)</b> and <b>Digital India</b> vision. By promoting <b>Digital Trust, Innovation, and Security</b>, the event will support progress toward goals related to <b>Innovation, Sustainable Cities, Strong Institutions, and Quality Education</b>.";

function* infiniteImages(images: string | any[]) {
  let index = 0;
  while (true) {
    yield images[index % images.length];
    index++;
  }
}

const imagesGenerator = infiniteImages(sdgoals);

const About = () => {
  const slidingAnimation = {
    animate: {
      x: [0 * sdgoals.length, -100 * sdgoals.length],
    },
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 50,
      },
    },
  };

  return (
    <div className="overflow-hidden">
      <div className="w-full bg-orange-50 pt-2 sm:pt-3 pb-4 sm:pb-6">
        <div className="px-4 sm:px-6">
          <div className="max-w-[100rem] mx-auto flex flex-col md:flex-row justify-start items-center md:items-start gap-4 md:gap-6">
            {/* Left side: Title */}
            <div className="flex-shrink-0 w-full md:w-auto text-center md:text-left">
              <div className="rounded-tl-2xl rounded-br-2xl bg-secondaryBg px-6 sm:px-8 py-2 sm:py-3 text-white font-semibold text-sm sm:text-base md:text-lg shadow-md inline-block">
                Important Dates
              </div>
            </div>

            {/* Right side: Dates */}
            <div className="w-full overflow-x-auto">
              <div className="min-w-max md:min-w-0 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                {/* Date Items */}
                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="text-[#c84b13] flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-800 text-sm sm:text-base font-semibold whitespace-nowrap">
                      Call for Paper
                    </span>
                    <span className="text-gray-600 text-xs sm:text-sm font-medium whitespace-nowrap">
                      September 9, 2025
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="text-[#c84b13] flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-800 text-sm sm:text-base font-semibold">
                      Submission
                    </span>
                    <div className="flex flex-col items-start">
                      <span className="text-xs sm:text-sm font-medium text-red-600 line-through decoration-red-600 decoration-2 whitespace-nowrap">
                        December 15, 2025
                      </span>
                      <span className="text-gray-600 text-xs sm:text-sm font-medium whitespace-nowrap">
                        December 30, 2025
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="text-[#c84b13] flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-800 text-sm sm:text-base font-semibold">
                      Acceptance
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-red-600 line-through decoration-red-600 decoration-2 whitespace-nowrap">
                        December 15, 2025
                      </span>
                      <span className="text-gray-600 text-xs sm:text-sm font-medium whitespace-nowrap">
                        December 30, 2025
                      </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                  <div className="text-[#c84b13] flex-shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col items-start">
                    <span className="text-gray-800 text-sm sm:text-base font-semibold">
                      Registration End
                    </span>
                    <span className="text-gray-600 text-xs sm:text-sm font-medium whitespace-nowrap">
                      December 25, 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-[url(/images/bg/white-bg.webp)] bg-cover bg-no-repeat px-4 sm:px-8 md:px-16 pb-16 scroll-mt-47 pt-8"
        id="Introduction"
      >
        <div className="flex flex-col md:flex-row md:items-center md:gap-8 lg:gap-12">
          <div className="w-full md:w-1/2">
            <Image
              className="w-full"
              src={"/images/graphics/about-banner-2.png"}
              alt="about-banner"
              width={600}
              height={600}
            />
          </div>
          <div className="flex flex-col gap-4 md:w-1/2 mt-6 md:mt-8">
            <p
              className="text-base md:text-lg font-light text-justify"
              dangerouslySetInnerHTML={{ __html: introText }}
            />
          </div>
        </div>
      </div>

      <div className="px-4 sm:px-8 md:px-16 py-12 md:p-16 text-center text-white bg-secondaryBg flex flex-col justify-center items-center gap-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-black">
          About Manipal University Jaipur
        </h2>
        <div className="flex flex-col gap-4">
          {aboutText.split("\n\n").map((paragraph, index) => (
            <p
              key={index}
              className="text-base md:text-lg font-normal text-justify"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
