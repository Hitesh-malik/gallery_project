"use client";
import React, { useState } from "react";

const images = ["/arijit_singh.png", "/nora12.jpg", "/zakir (1).jpg"];
const imageTagLine = ["Singers","Dancers","Comedians"];

const HeroSection = () => {
   const [imageIndex , setImageIndex] = useState(0);
   const updateIndex  =()=>{
    console.log(imageIndex,"sdkjfdskjf",imageIndex < images.length)
    if(imageIndex < images.length-1)setImageIndex((prev)=>prev+1);
   }
    return (
    <div
      className="max-w-screen-xl h-[80vh] mx-auto flex justify-end items-start"
    >
      <div className="flex justify-center items-center mx-10 sticky top-40">
        <div className="w-[620px] h-[620px] rounded-full bg-gradient-to-br from-[#F16633CC] to-[#FD2D7DCC] relative overflow-hidden">
          <div
            className="flex flex-col justify-center items-center gap-4"
          >
              <img
                src={images[imageIndex]}
                width={600}
                height={600}
                className={`rounded-full object-cover}`}
              />      
          </div>
        </div>
        <span
          className="absolute bottom-[-22px] right-[-40px]"
        >
          <img src={"/Vector.png"} />
        </span>
        <span
          className="absolute top-1/2 text-8xl -left-64"
        >
          {imageTagLine[imageIndex]}
        </span>
        <span
          className="absolute bottom-[-30px] cursor-pointer	"
          onClick={updateIndex}
        >
         {imageIndex < images.length-1 ? "click here to view more" : "End Please Reload"} 
        </span>
      </div>
      <div className="mt-80 sticky top-80 mb-40">
        <h1 className="w-[300px] text-wrap text-6xl leading-[70px]">
          <span className="text-[#848488]">Choose from</span> 100+ Categories
        </h1>
        <button className="flex items-center gap-4 mt-4" onClick={updateIndex}>
          <p className="bg-gradient-to-r from-[#ba708d] via-[#FF8DB9] to-[#F86E42] inline-block text-transparent bg-clip-text text-3xl leading-[105px]">
            Explore all categories
          </p>
          <img
            src={"/right_arrow.svg"}
            width={40}
            height={40}
            alt="right arrow"
            className="mt-2 w-auto h-auto"
          />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
