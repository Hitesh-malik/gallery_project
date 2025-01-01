"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { mappingData } from "@/app/utils/datas/MappingData";

const MappingSection = () => {
  return (
    <div className="">
      <div className="max-w-5xl overflow-visible mx-auto relative">
        <Image src={"/map_vector.png"} width={900} height={600} alt="vector" />
        <div>
          {mappingData.map((item) => {
            return (
              <div
                key={item.id}
                className={`${item.position} flex items-end text-white/30 hover:text-white duration-500`}
              >
                <p className="text-3xl whitespace-wrap max-w-[270px]">
                  {item.title}
                </p>
                <motion.div
                  initial={{ rotate: 10, filter: "brightness(0.3)" }}
                  whileHover={{ rotate: 0, filter: "brightness(1)" }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={item.imgUrl}
                    width={240}
                    height={240}
                    alt={item.id + "_" + item.title}
                    className="rounded-2xl w-auto h-auto cursor-pointer"
                  />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MappingSection;
