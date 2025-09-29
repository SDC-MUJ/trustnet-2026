"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu, ChevronDown } from "lucide-react";
import { menu } from "@/components/constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (link: string, newTab?: boolean) => {
    if (newTab) {
      window.open(link, "_blank");
      setIsOpen(false);
      return;
    }

    const isAnchorLink = link.startsWith("/#");
    if (isAnchorLink) {
      const elementId = link.split("#")[1];
      if (pathname === "/") {
        // If on homepage, scroll directly
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        // If on another page, navigate to homepage with anchor
        router.push(link);
      }
    } else {
      router.push(link);
    }
    setIsOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 z-20 md:relative w-full gap-2 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 bg-white">
        <div className="w-full flex flex-wrap justify-between items-center border-b-2">
          <div className="flex items-center gap-4">
            <Link href="/#" className="cursor-pointer">
              <Image
                className="w-44 sm:w-48 lg:w-60 p-2"
                src={"/images/logo/muj-logo.svg"}
                alt="CirCon'24"
                width={250}
                height={50}
              />
            </Link>
            {/* <span className="hidden lg:block text-gray-300 text-2xl">|</span> */}
            {/* <div className="hidden lg:flex items-center gap-6">
              <Image
                className="w-24"
                src="/images/logo/scopus-logo.png"
                alt="Scopus"
                width={100}
                height={35}
              />
              <span className="text-gray-300 text-xl">|</span>
              <Image
                className="w-24"
                src="/images/logo/springer.png"
                alt="Springer"
                width={110}
                height={45}
              />
            </div> */}
          </div>

          {/* Mobile menu button */}
          <div className="flex justify-center items-center gap-4">
            {/* <Image className='hidden lg:block w-32 lg:w-36' src={'/images/logo/ministry-of-external-affairs-logo.png'} alt="Ministry Of External Affairs" width={150} height={50} /> */}
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger>
                  <Menu className="w-8 h-8" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetDescription className="flex flex-col justify-start items-start gap-8">
                      <div className="flex flex-col justify-start items-start gap-4 w-full">
                        {menu.map((item) => (
                          <div key={item.id} className="w-full">
                            {!item.dropdownItems ? (
                              <SheetClose asChild>
                                <button
                                  onClick={() => handleNavigation(item.link)}
                                  className="font-semibold hover:underline transition-all text-left w-full"
                                >
                                  {item.label}
                                </button>
                              </SheetClose>
                            ) : (
                              <div className="flex flex-col gap-2 w-full">
                                <span className="font-semibold text-left">
                                  {item.label}
                                </span>
                                <div className="flex flex-col gap-2 w-full">
                                  {item.dropdownItems.map((dropdownItem) => (
                                    <SheetClose asChild key={dropdownItem.id}>
                                      <button
                                        onClick={() =>
                                          handleNavigation(
                                            dropdownItem.link,
                                            dropdownItem.newTab
                                          )
                                        }
                                        className="text-sm text-gray-600 hover:text-gray-900 transition-all flex items-center gap-3 w-full pl-3"
                                      >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></span>
                                        <span className="text-left">
                                          {dropdownItem.label}
                                        </span>
                                      </button>
                                    </SheetClose>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-col gap-4">
                        <Image
                          src="/images/graphics/hybrid-icon.png"
                          alt="Hybrid Icon"
                          width={100}
                          height={40}
                          className="cursor-pointer"
                          onClick={() => handleNavigation("/#register")}
                        />
                        <div className="flex items-center gap-4">
                          <Image
                            src="/images/sdg-goals/SDG4.png"
                            alt="SDG 4"
                            width={45}
                            height={45}
                          />
                          <Image
                            src="/images/sdg-goals/SDG9.png"
                            alt="SDG 9"
                            width={45}
                            height={45}
                          />
                          <Image
                            src="/images/sdg-goals/SDG11.png"
                            alt="SDG 11"
                            width={45}
                            height={45}
                          />
                        </div>
                      </div>
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          {/* <Image className='hidden lg:block w-24' src={'/images/logo/azadi-mahotsav-logo.png'} alt="Azadi Ka Amrit Mahotsav" width={100} height={50} /> */}
          <div className="hidden lg:flex items-center gap-4">
            <Image
              className="w-32 mr-2"
              src="/images/logo/scopus-logo.png"
              alt="Scopus"
              width={120}
              height={30}
            />
            <Image
              className="w-32 mr-6"
              src="/images/logo/springer.png"
              alt="Springer"
              width={150}
              height={60}
            />
            <Image
              className="w-12"
              src="/images/sdg-goals/SDG4.png"
              alt="SDG 4"
              width={45}
              height={45}
            />
            <Image
              className="w-12"
              src="/images/sdg-goals/SDG9.png"
              alt="SDG 9"
              width={45}
              height={45}
            />
            <Image
              className="w-12"
              src="/images/sdg-goals/SDG11.png"
              alt="SDG 11"
              width={45}
              height={45}
            />
          </div>
        </div>
      </div>
      <div className="sticky top-0 z-20 px-16 py-2 bg-white hidden md:flex justify-between items-center gap-8 drop-shadow-xl">
        <div className="flex justify-center items-center gap-8">
          {menu.map((item) => (
            <div key={item.id} className="relative group">
              <button
                onClick={() =>
                  !item.dropdownItems && handleNavigation(item.link)
                }
                className="font-semibold hover:underline transition-all flex items-center gap-1"
              >
                {item.label}
                {item.dropdownItems && <ChevronDown className="w-4 h-4" />}
              </button>
              {item.dropdownItems && (
                <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 mt-2 w-55 bg-white border rounded-md shadow-lg transition-all duration-200">
                  <div className="py-1">
                    {item.dropdownItems.map((dropdownItem) => (
                      <button
                        key={dropdownItem.id}
                        onClick={() =>
                          handleNavigation(
                            dropdownItem.link,
                            dropdownItem.newTab
                          )
                        }
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 font-semibold whitespace-nowrap"
                      >
                        {dropdownItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div>
          <Image
            src="/images/graphics/hybrid-icon.png"
            alt="Hybrid Icon"
            width={100}
            height={40}
            className="cursor-pointer"
            onClick={() => handleNavigation("/#register")}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// const menu = [
//     {
//         id: 1,
//         label: 'About',
//         link: '#Introduction',
//     },
//     {
//         id: 2,
//         label: 'Speakers',
//         link: '#Speakers',
//     },
//     {
//         id: 3,
//         label: 'Schedule',
//         link: '#',
//     },
//     {
//         id: 4,
//         label: 'Registration',
//         link: '#',
//     },
//     {
//         id: 5,
//         label: 'Committee',
//         link: '#',
//     },
//     {
//         id: 6,
//         label: 'Contact',
//         link: '#',
//     },
// ]

// const Navbar = () => {
//     return (
//         <>
//             <div className='w-full gap-2 flex flex-col justify-center items-center px-4 sm:px-8 md:px-16 py-2 bg-white'>
//                 <div className='w-full flex justify-between items-center'>
//                     <Image src={'/images/logo/muj-logo.svg'} alt="CirCon'24" width={200} height={50} />
//                     <Image src={'/images/logo/sdg-horizontal-logo.png'} alt="CirCon'24" width={250} height={50} />
//                     <Image src={'/images/logo/ministry-of-external-affairs-logo.png'} alt="CirCon'24" width={150} height={50} />
//                     <Image src={'/images/logo/azadi-mahotsav-logo.png'} alt="CirCon'24" width={80} height={50} />
//                     <Image src={'/images/logo/viksit-bharat-logo.png'} alt="CirCon'24" width={100} height={50} />
//                 </div>
//             </div>
//             <div className='sticky top-0 z-20 p-2 bg-white hidden md:flex justify-center items-center gap-4 drop-shadow-xl'>
//                 {menu.map((item) => (
//                     <Link key={item.id} href='#Introduction' className='uppercase font-bold text-[12px] px-4 py-2 hover:border hover:border-gray-800 text-white bg-secondaryBg hover:bg-white hover:text-black'>{item.label}</Link>
//                 ))}
//             </div>
//         </>
//     )
// }

// export default Navbar
