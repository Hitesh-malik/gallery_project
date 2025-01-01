import React from "react";
import { motion } from "framer-motion";

const MarqueeAnimation = () => {
  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.div
        style={{ display: "flex", gap: 10, alignItems: "center" }}
        animate={{ x: [-1000, 200] }}
        transition={{ duration: 5, repeat: Infinity, restSpeed: 0.01 }}
      >
        <div className="flex items-center uppercase gap-4">
          <p> Headlights Of Today</p>
          <svg
            width="33"
            height="36"
            viewBox="0 0 33 36"
            fill="none"
            className=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8622 0.668699L19.5846 13.4321L32.3468 18.1549L19.5846 22.8778L14.8622 35.6412L10.1398 22.8778L-2.62232 18.1549L10.1398 13.4321L14.8622 0.668699Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
        <div className="flex items-center uppercase gap-4">
          <p> Headlights Of Today</p>
          <svg
            width="33"
            height="36"
            viewBox="0 0 33 36"
            fill="none"
            className=""
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8622 0.668699L19.5846 13.4321L32.3468 18.1549L19.5846 22.8778L14.8622 35.6412L10.1398 22.8778L-2.62232 18.1549L10.1398 13.4321L14.8622 0.668699Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default MarqueeAnimation;
