// src/components/ProductImages.jsx

import { motion, useScroll, useTransform } from "framer-motion";
import { popUp } from "../utils/animation.js";
import useParallaxMouse from "../Component/useParallaxMouse";
import Container from "../assets/Container.png";
import Rectangle from "../assets/Rectangle.png";

const ProductImages = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -60]);

  const main = useParallaxMouse(12);
  const overlay = useParallaxMouse(6);

  return (
    <div className="relative w-full max-w-[520px] aspect-[4/5] mx-auto overflow-visible [perspective:1200px]">

      {/* RECTANGLE – BACK IMAGE */}
      <motion.div
        variants={popUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          width: "58%",
          bottom: "2%",
          right: "0%",
          rotateX: overlay.rotateX,
          rotateY: overlay.rotateY,
        }}
        onMouseMove={overlay.handleMouseMove}
        onMouseLeave={overlay.reset}
        className="absolute z-10"
      >
        <img
          src={Rectangle}
          alt="Side View"
          className="w-full rounded-xl shadow-xl opacity-90"
        />
      </motion.div>

      {/* CONTAINER – FRONT IMAGE */}
      <motion.div
        variants={popUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          width: "78%",
          top: "0%",
          left: "0%",
          y,
          rotateX: main.rotateX,
          rotateY: main.rotateY,
        }}
        onMouseMove={main.handleMouseMove}
        onMouseLeave={main.reset}
        className="absolute z-30"
      >
        <img
          src={Container}
          alt="Server Hall Load Bank"
          className="w-full rounded-xl shadow-2xl"
        />
      </motion.div>

    </div>
  );
};

export default ProductImages;


