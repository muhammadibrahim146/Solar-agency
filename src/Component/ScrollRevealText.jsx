import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ScrollRevealText = ({
  text,
  as: Tag = "p",
  className = "",
  baseColor = "#9CA3AF",
  revealColor = "#000000",
}) => {
  const ref = useRef(null);          // ✅ ref defined
  const words = text.split(" ");     // ✅ words defined

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 35%"],
  });

  return (
    <Tag
      ref={ref}
      className={`flex flex-wrap justify-center ${className}`}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        const color = useTransform(
          scrollYProgress,
          [start, end],
          [baseColor, revealColor]
        );

        return (
          <motion.span
            key={i}
            style={{ color }}
            className="mr-2"
          >
            {word}
          </motion.span>
        );
      })}
    </Tag>
  );
};

export default ScrollRevealText;
