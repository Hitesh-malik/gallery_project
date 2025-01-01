"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const GallerySection = () => {
  const [activeTab, setActiveTab] = useState("Photos");

  const images = [
    { src: "/catrina.png" },
    { src: "/arijit_singh.png" },
    { src: "/catrina.png" },
    { src: "/arijit_singh.png" },
    { src: "/manish.png" },
    { src: "/zakir.jfif" },
    { src: "/manish.png" },
    { src: "/zakir.jfif" },
  ];

  const videos = [
    { src: "/catrina.png" },
    { src: "/arijit_singh.png" },
    { src: "/catrina.png" },
  ];

  const modalAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <div className="text-white relative h-screen mt-40">
      <div className="absolute top-0 left-0 right-0 -z-10 bg-black/50 border backdrop-blur-sm border-[#252542] border-b-transparent w-full h-full rounded-tr-full rounded-tl-full" />
      <div className="flex flex-col justify-between p-8 max-w-5xl mx-auto">
        <div className="flex justify-center mt-4 mb-6">
          <div className="bg-[#080810] shadow-2xl space-x-10 rounded-full p-3 ">
            <button
              className={`px-10 py-2 text-lg font-semibold rounded-full ${
                activeTab === "Photos"
                  ? "bg-[#e1e3fc] text-black"
                  : "text-white bg-[#1b1b25]"
              }`}
              onClick={() => setActiveTab("Photos")}
            >
              Photos
            </button>
            <button
              className={`px-10 py-2 text-lg font-semibold rounded-full ${
                activeTab === "Videos"
                  ? "bg-[#e1e3fc] text-black"
                  : "text-white bg-[#1b1b25]"
              }`}
              onClick={() => setActiveTab("Videos")}
            >
              Videos
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial="hidden"
          animate="visible"
          variants={modalAnimation}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "Photos" ?(
            <div className="grid grid-cols-4 gap-20 place-items-center mt-20">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`col-span-1 row-span-1 overflow-hidden w-[240px] h-[240px] rounded-2xl ${
                    index === 0 || index === 2
                      ? "bg-transparent rounded-t-full rounded-bl-full"
                      : "bg-transparent"
                  } ${index === 1 || index === 3 ? " grayscale" : ""}`}
                >
                  <img
                    src={img.src}
                    alt={`Gallery item ${index + 1}`}
                    className="w-full h-full object-cover scale-105 object-top cursor-pointer"
                  />
                </motion.div>
              ))}
            </div>
          ):(
            <div className="grid grid-cols-3 gap-20 place-items-center mt-20">
              {videos.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`col-span-1 row-span-1 overflow-hidden w-[300px] h-[400px] grayscale rounded-2xl cursor-pointer`}
                >
                  <img
                    src={img.src}
                    alt={`Video ${index + 1}`}
                    className="w-full h-full object-cover scale-105 cursor-pointer object-top"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>

        <div className="flex justify-center mt-20">
          <div className="w-1/3 gap-2 h-1 flex rounded-full">
            <div className="bg-white w-1/4 h-full rounded-full"></div>
            <div className="bg-white/20 w-1/4 h-full rounded-full"></div>
            <div className="bg-white/20 w-1/4 h-full rounded-full"></div>
            <div className="bg-white/20 w-1/4 h-full rounded-full"></div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default GallerySection;
