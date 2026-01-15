import React from "react";
import {motion} from "framer-motion";
import Background5 from "../assets/Background5.png";

 const MovingStrip = () => {
  return (
    <div className="relative w-full overflow-hidden h-[70px] md:h-[90px]">
      <motion.div
        className="flex w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 6, // 🔥 fast speed
        }}
      >
        {/* duplicate images for infinite loop */}
        {[1, 2].map((_, index) => (
          <img
            key={index}
            src={Background5}
            alt="strip"
            className="h-[70px] md:h-[90px] w-auto object-cover"
          />
        ))}
      </motion.div>
    </div>
  );
};
export default MovingStrip;