"use client";

import { SwipeCarousel } from "@/app/utils/SwiperCarousal";
import React from "react";
import MarqueeAnimation from "@/app/utils/MarqueeAnimation";

const RecentShows = () => {
  return (
    <div className="relative">
      <div className="absolute -top-[600px] z-40 w-full h-[800px] bg-black blur-3xl inset-0" />
      <div className="min-h-screen pt-40 relative overflow-hidden text-white">
        <div className="bg-gradient-to-b from-black via-[#13131482] to-black  text-4xl font-light py-4 absolute top-80 -left-32 -rotate-[40deg]">
          <MarqueeAnimation />
        </div>
        <h1 className="text-6xl max-w-[750px] font-normal mx-auto my-20">
          Recent shows made star-studded via StarClinch
        </h1>
        <SwipeCarousel />
        <div className="bg-gradient-to-b from-black via-[#13131482] to-black  text-4xl font-light py-4 absolute bottom-40 -right-52 -rotate-[40deg]">
          <MarqueeAnimation />
        </div>
      </div>
    </div>
  );
};

export default RecentShows;
