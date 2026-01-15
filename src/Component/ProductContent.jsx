// src/components/ProductContent.jsx

//import { motion } from "framer-motion";
import { fadeUp } from "../utils/animation.js";
//import ScrollRevealText from "./ScrollRevealText.jsx";
// src/components/ScrollRevealText.jsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollRevealText = ({
  text,
  as: Tag = "p",
  className = "",
  baseColor = "#9CA3AF",
  revealColor = "#000000",
}) => {
  const ref = useRef(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 35%"],
  });

  return (
    <Tag
      ref={ref}
      className={`${className}`}
    >
      {words.map((word, i) => {
        const color = useTransform(
          scrollYProgress,
          [i / words.length, (i + 1) / words.length],
          [baseColor, revealColor]
        );

        return (
          <motion.span
            key={i}
            style={{ color }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        );
      })}
    </Tag>
  );
};



const ProductContent = () => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <p className="text-sm text-gray-500 mb-3">Our products</p>

     <ScrollRevealText
  as="h2"
  text="Server Hall Load banks"
  className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-left"
/>

      <p className="text-gray-600 leading-relaxed mb-6">
        Designed with high precision machines. Heavy duty fans for continuous
        operation @170CFM/KW. Miniature circuit breakers for protection. High
        temperature glass fibre insulated wires. Rack mount design up to 6KW,
        above pedestal mounting.
      </p>

      <hr className="my-6" />

      <ul className="space-y-4 text-gray-700 mb-8">
        <li>✓ Range: 6KW – 9KW – 12KW – 12.6KW – 18KW</li>
        <li>✓ Generator Test Banks: 100KW – 200KW</li>
        <li>✓ IEC Plug 3 Pin – 32A with 3 Meter Long wire</li>
      </ul>

      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="bg-red-600 hover:bg-red-700 transition text-white px-8 py-3 rounded-md font-medium"
      >
        Get a Quote
      </motion.button>
    </motion.div>
  );
};

export default ProductContent;
