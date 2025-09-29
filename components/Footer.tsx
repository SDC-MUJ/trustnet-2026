"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { CounterAPI } from "counterapi";
import type { JSX } from "react";

const Footer = () => {
  const [visitorCount, setVisitorCount] = useState(99);
  const counter = useMemo(() => new CounterAPI(), []);

  useEffect(() => {
    counter.up("trustnet2026.com", "trustnet").then((res) => {
      setVisitorCount((res.Count as number) + 99);
    });
  }, [counter]);

  return (
    <footer
      id="footer"
      className="flex flex-col gap-1 bg-black text-white px-4 py-4 sm:px-8 md:px-16"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        {/* Left Column - Convener Details */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <h4 className="text-sm font-semibold text-white">Contact:</h4>
            <a
              href="mailto:trustnet2026@gmail.com"
              className="text-sm text-gray-300 hover:text-white mb-1"
            >
              <b>Email:</b> trustnet2026@gmail.com
            </a>
            <h4 className="text-sm font-semibold text-white">
              Dr. Satyabrata Roy (Program Co-Chair)
            </h4>
            <h4 className="text-sm font-semibold text-white">
              Dr. Amit Garg (Convener)
            </h4>
            <h4 className="text-sm font-semibold text-white">
              Dr. Ankur Pandey (Convener)
            </h4>
          </div>
        </div>

        {/* Center Column - Logos */}
        <div className="flex flex-col items-center gap-3">
          <Link href="/#" className="cursor-pointer">
            <Image
              src={"/images/logo/muj-white-logo.png"}
              alt="MUJ Logo"
              width={290}
              height={200}
            />
          </Link>
          <div className="text-center">
            {/* <h3 className="text-white font-bold mb-1">
              Manipal University Jaipur
            </h3> */}
            <p className="text-sm text-gray-300">
              Dehmi Kalan, Off Jaipur-Ajmer Expressway,
              <br />
              Jaipur, Rajasthan, India-303007
            </p>
          </div>
        </div>

        {/* Right Column - Footer Logo */}
        <div>
          <Link href="/#" className="cursor-pointer">
            <Image
              src={"/images/graphics/footer-logo.png"}
              alt="Footer Logo"
              width={360}
              height={210}
            />
          </Link>
        </div>
      </div>

      {/* Separator and Credits */}
      <div className="mt-1 pt-1 border-t border-gray-400">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-300 font-light">
            &copy; 2025 All rights reserved.
          </p>
          <p className="text-sm font-bold text-gray-300">
            Total Visitors:{" "}
            <span className="p-1 font-bold">{visitorCount}</span>
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-1">
            Developed by -{" "}
            <Image
              src="/images/logo/sdc-logo-white.png"
              alt="SDC Logo"
              width={30}
              height={20}
            />{" "}
            WebDev Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
