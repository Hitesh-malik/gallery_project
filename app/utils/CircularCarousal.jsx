"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { squadsData } from "./datas/SquadsData";

const CircularCarousel = () => {
  const wrapperRef = useRef(null);
  const itemsRef = useRef([]);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const membersRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const radius = 500;

  useEffect(() => {
    const items = itemsRef.current;
    positionItems(items, activeIndex);
  }, []);

  useEffect(() => {
    animateContent();
  }, [activeIndex]);

  const positionItems = (items, activeIdx) => {
    const numItems = items.length;
    items.forEach((item, index) => {
      if (index === activeIdx) {
        gsap.to(item, {
          x: 0,
          y: -radius,
          scale: 1,
          zIndex: 10,
          duration: 0.5,
        });
      } else {
        const angle =
          ((index - activeIdx + numItems) % numItems) *
          ((2 * Math.PI) / numItems);
        const x = Math.sin(angle) * radius;
        const y = -Math.cos(angle) * radius;
        gsap.to(item, {
          x,
          y,
          scale: 0.8,
          zIndex: 1,
          duration: 0.5,
        });
      }
    });
  };

  const animateContent = () => {
    gsap.fromTo(
      [titleRef.current, descRef.current, membersRef.current],
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, stagger: 0.2 }
    );
  };

  const rotateCarousel = (direction) => {
    const items = itemsRef.current;
    const numItems = items.length;
    const newActiveIndex = (activeIndex - direction + numItems) % numItems;
    setActiveIndex(newActiveIndex);

    positionItems(items, newActiveIndex);
  };

  const handlePrev = () => rotateCarousel(1);
  const handleNext = () => rotateCarousel(-1);

  const activeSquad = squadsData[activeIndex];

  return (
    <>
      <div className="relative my-72 h-[90vh] flex justify-center items-center">
        <div
          className="absolute bg-[#0D0D1B] border border-blue-950 rounded-full"
          ref={wrapperRef}
          style={{ width: radius * 2.2, height: radius * 2.2 }}
        >
          {squadsData.map((item, index) => (
            <div
              key={item.id}
              className={`item absolute `}
              ref={(el) => (itemsRef.current[index] = el)}
              style={{
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <img
                src={item.url}
                alt={`Item ${item.id}`}
                className={`w-[300px] h-[300px] object-cover object-top ${
                  activeIndex === index
                    ? "rounded-3xl "
                    : "rounded-full brightness-[.3]"
                }`}
              />
            </div>
          ))}
          <div className="absolute w-[420px] top-1/3 left-1/2 -translate-x-1/2">
            <div className="flex justify-center flex-col items-center gap-4">
              <span
                ref={membersRef}
                className="bg-gradient-to-b from-teal-500 to-black px-4 py-1 rounded-full"
              >
                {activeSquad.members} Members
              </span>
              <h4 ref={titleRef} className="text-3xl">
                {activeSquad.title}
              </h4>
              <p ref={descRef} className="text-sm text-gray-500">
                {activeSquad.desc}
              </p>
              <button className="text-teal-500 flex gap-2 items-center">
                Our {activeSquad.title.toLowerCase()} team is growing. Apply Now
                <img src="/squad_vector.png" alt="Apply Now" />
              </button>
            </div>
          </div>
          <div className="absolute top-0 w-full justify-around z-40 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#212129"
              className="size-12 cursor-pointer bg-[#212129] hover:fill-white duration-300 rounded-full"
              onClick={handlePrev}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="gray"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#212129"
              className="size-12 cursor-pointer bg-[#212129] hover:fill-white duration-300 rounded-full"
              onClick={handleNext}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default CircularCarousel;
