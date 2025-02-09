import { motion } from "framer-motion";
import React from "react";

function Marquee({ imageUrls, direction }) {
  return (
    <div className="w-full flex overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex md:flex-shrink-0 gap-30 py-5 pr-20 md:gap-40 md:py-10 md:pr-40"
      >
        {imageUrls.map((url, index) => (
          <img key={index} src={url} />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "left" ? "-100%" : "0" }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        className="flex md:flex-shrink-0 gap-10 py-5 pr-20 md:gap-40 md:py-10 md:pr-40"
      >
        {imageUrls.map((url, index) => (
          <img key={index} src={url} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
