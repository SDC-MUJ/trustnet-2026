"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const SpecialSessions = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[260px]">
        <div className="absolute inset-0">
          <Image
            src="/images/graphics/advisory-hero.jpg"
            alt="Author Guidelines"
            className="object-cover"
            fill
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Special Sessions
          </h1>
        </div>
      </div>

      {/* content section */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* sessions grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {[
              {
                id: 1,
                title:
                  "Advancements in Computational Intelligence for Real-World Problem Solving",
                img: "/special-session/special-session-1.png",
              },
            ].map((s) => (
              <div key={s.id} className="w-full flex justify-center">
                <div className="mx-auto w-full max-w-[92vw] sm:max-w-none relative">
                  <div className="rounded-b-3xl border-2 border-gray-300 overflow-hidden shadow-sm bg-white">
                    {/* Clickable brochure area - opens modal */}
                    <button
                      type="button"
                      onClick={() => {
                        setSelectedImage(s.img);
                        setSelectedTitle(s.title);
                      }}
                      className="w-full block text-left"
                    >
                      <div className="w-full flex items-center justify-center bg-white">
                        <img
                          src={s.img}
                          alt={`Special Session ${s.id} brochure`}
                          className="w-full h-auto block"
                        />
                      </div>
                    </button>

                    {/* text area */}
                    <div className="py-5 text-center">
                      <h3 className="text-sm md:text-base font-semibold text-gray-900">
                        Special Session {s.id}
                      </h3>
                      <p className="mt-2 text-sm md:text-sm font-medium text-gray-500 leading-snug px-2">
                        {s.title}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setSelectedImage(null)}
            />

            {/* modal content */}
            <div className="relative z-10 max-w-[95vw] max-h-[95vh] w-full flex items-center justify-center p-4">
              {/* top-right controls */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
                <a
                  href={selectedImage}
                  download
                  className="rounded-md bg-white/90 hover:bg-white px-3 py-2 shadow"
                  aria-label="Download image"
                >
                  ⬇
                </a>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="rounded-md bg-white/90 hover:bg-white px-3 py-2 shadow"
                  aria-label="Close image"
                >
                  ✕
                </button>
              </div>

              {/* image container */}
              <div
                className="relative bg-white rounded-lg overflow-auto"
                onClick={(e) => e.stopPropagation()}
                style={{ maxWidth: "95vw", maxHeight: "95vh" }}
              >
                <img
                  src={selectedImage}
                  alt={selectedTitle ?? "Brochure"}
                  className="block m-auto select-none"
                  style={{
                    maxWidth: "90vw",
                    maxHeight: "90vh",
                    width: "auto",
                    height: "auto",
                  }}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SpecialSessions;
