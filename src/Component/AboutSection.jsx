import {
  motion,
  useInView,
  useScroll,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
//import ScrollRevealText from "./ScrollRevealText";

/* ---------- Animated Line ---------- */


const ScrollRevealAnimatedLine = ({ text, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const words = text.split(" ");

  // Scroll progress for desktop/tablet
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 35%"],
  });
  const color = useTransform(scrollYProgress, [0, 1], ["#9CA3AF", "#000000"]); // grey → black

  return (
    <>
      {/* MOBILE: staggered words animation */}
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.07, delayChildren: delay }}
        className={`
          block md:hidden
          text-sm sm:text-base
          leading-relaxed
          font-medium
          whitespace-normal
          ${className}
        `}
      >
        {words.map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { opacity: 0, y: 4 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.25, ease: "easeOut" },
              },
            }}
            className="inline-block mr-1"
          >
            {word}
          </motion.span>
        ))}
      </motion.p>

      {/* TABLET & DESKTOP: scroll-based color reveal */}
      <motion.p
        ref={ref}
        style={{ color }}
        className={`
          hidden md:block
          text-2xl
          font-medium
          leading-[1.35]
          tracking-normal
          whitespace-normal
          ${className}
        `}
      >
        {text}
      </motion.p>
    </>
  );
};

//export default ScrollRevealAnimatedLine;


/* ---------- Count Up ---------- */
const CountUp = ({ to, suffix = "", delay = 0 }) => {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    const controls = animate(0, to, {
      duration: 2,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.floor(v)),
    });

    return () => controls.stop();
  }, [inView, to, delay]);

  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
};

/* ---------- ABOUT SECTION ---------- */
export default function AboutSection() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section
      ref={sectionRef}
      className="w-full py-16 sm:py-20 md:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* LEFT */}
        <motion.div style={{ y }} className="md:col-span-1">
          <h3 className="text-base sm:text-lg md:text-xl font-semibold uppercase tracking-wide text-black">
            About Us
          </h3>
        </motion.div>

        {/* RIGHT */}
        <div className="md:col-span-2 flex flex-col space-y-6">

          {/* TEXT */}
          <div className="max-w-full md:max-w-lg lg:max-w-xl space-y-1 lg:space-y-0.5">

          <ScrollRevealAnimatedLine
  text="We at ECOM Engineers PvtLtd are mass producers of resistive load banks."
  className="text-2xl font-medium"
/>

<ScrollRevealAnimatedLine
  text="Ranging from 6 kW up to 200 kW, these load banks are essential for"
  delay={0.05}
/>

<ScrollRevealAnimatedLine
  text="integrated system testing in data centre server halls, battery discharge testing,"
  delay={0.1}
/>

<ScrollRevealAnimatedLine
  text="generator testing, electric vehicle battery discharge, and power supplies."
  delay={0.15}
/>

<ScrollRevealAnimatedLine
  text="Testing solutions for EV & Hybrid Vehicles."
  delay={0.2}
/>


          </div>

          {/* STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                <CountUp to={100} suffix="K+" />
              </h2>
              <p className="mt-1 text-black">Panels Installed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                <CountUp to={25} suffix="K+" delay={0.2} />
              </h2>
              <p className="mt-1 text-black">Plants Powered</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                <CountUp to={16} suffix="+" delay={0.4} />
              </h2>
              <p className="mt-1 text-black">Years of Expertise</p>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
}












