"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sliderData } from "./datas/SliderData";

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  function handlePrev() {
    setImgIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  }

  function handleNext() {
    setImgIndex((prevIndex) =>
      prevIndex < sliderData.length - 1 ? prevIndex + 1 : prevIndex
    );
  }

  return (
    <div className="flex justify-center items-center relative">
      <div className="absolute z-30 top-1/2 left-0 right-0 flex justify-around items-center space-x-96">
        <button onClick={handlePrev} disabled={imgIndex === 0}>
          <img
            src="/nav_left.png"
            width={50}
            height={50}
            alt="left nav"
            className={imgIndex === 0 ? "opacity-50" : ""}
          />
        </button>
        <button
          onClick={handleNext}
          disabled={imgIndex === sliderData.length - 1}
        >
          <img
            src="/nav_right.png"
            width={50}
            height={50}
            alt="right nav"
            className={imgIndex === sliderData.length - 1 ? "opacity-50" : ""}
          />
        </button>
      </div>
      <div className="relative w-[650px] h-[660px] overflow-hidden">
        <motion.div
          animate={{
            translateX: `-${imgIndex * 100}%`,
          }}
          transition={SPRING_OPTIONS}
          className="flex items-center"
        >
          <Images imgIndex={imgIndex} />
        </motion.div>
      </div>
      <div className="h-full p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={imgIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-5xl leading-[60px] max-w-[400px]"
          >
            <motion.span className="">
              {sliderData[imgIndex].hostName}
            </motion.span>
            <motion.span className="text-gray-500 block">
              {sliderData[imgIndex]?.desc}
            </motion.span>
            <motion.span className="block">
              {sliderData[imgIndex]?.place}
            </motion.span>
            <motion.span className="block">
              {sliderData[imgIndex]?.brand}
            </motion.span>
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center gap-4 mt-4 text-xl text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          <AnimatePresence mode="wait">
            <motion.p
              key={imgIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {sliderData[imgIndex]?.date}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {sliderData.map((img) => {
        return (
          <motion.img
            key={img.id}
            src={img.imageUrl}
            animate={{
              scale: imgIndex === img.id ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="w-[650px] h-[660px] rounded-tl-[60%] rounded-tr-[60%] bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};
