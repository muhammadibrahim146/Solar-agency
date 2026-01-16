import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";

/* ---------- SCROLL REVEAL TEXT ---------- */
const ScrollRevealAnimatedLine = ({ text, delay = 0 }) => {
  const ref = useRef(null);
  const words = text.split(" ");

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 35%"],
  });

  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["#9CA3AF", "#000000"]
  );

  return (
    <>
      {/* MOBILE */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.06, delayChildren: delay }}
        className="block md:hidden text-[17px] font-semibold leading-relaxed text-black"
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 4 },
              visible: { opacity: 1, y: 0 },
            }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.p>

      {/* TABLET + DESKTOP */}
      <motion.p
        ref={ref}
        style={{ color }}
        className="hidden md:block text-[24px] font-semibold leading-snug"
      >
        {text}
      </motion.p>
    </>
  );
};

/* ---------- COUNT UP ---------- */
const CountUp = ({ to, suffix = "" }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.floor(v)),
    });

    return () => controls.stop();
  }, [isInView, to]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

/* ---------- ABOUT SECTION ---------- */
const AboutSection = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:gap-20">
          <p className=" lg:text-xl sm:text-lg font-semibold text-black mb-6">
            About Us
          </p>

          {/* TEXT */}
          <div className="w-full lg:max-w-[980px] space-y-2">
            <ScrollRevealAnimatedLine
              text="We at ECOM Engineers Pvt. Ltd are mass producers of resistive load banks."
            />

            <ScrollRevealAnimatedLine
              text="Ranging from 6 KW up to 200 KW, these load banks are essential for"
              delay={0.05}
            />

            <ScrollRevealAnimatedLine
              text="integrated system testing in datacentre server halls, battery test discharge,"
              delay={0.1}
            />

            <ScrollRevealAnimatedLine
              text="generator testing, electric vehicle battery discharge and power supplies."
              delay={0.15}
            />

            <ScrollRevealAnimatedLine
              text="Testing solutions for EV & Hybrid Vehicles."
              delay={0.2}
            />
          </div>
        </div>

        {/* STATS */}
        <div className="flex flex-col sm:flex-row gap-9 mt-8 lg:ml-36">

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black">
              <CountUp to={100} suffix="K+" />
            </h2>
            <p className="text-gray-500 mt-1">Panels Installed</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <h2 className="text-4xl font-bold text-black">
              <CountUp to={25} suffix="K+" />
            </h2>
            <p className="text-gray-500 mt-1">Plants Powered</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-black">
              <CountUp to={16} suffix="+" />
            </h2>
            <p className="text-gray-500 mt-1">Years of Expertise</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;



















