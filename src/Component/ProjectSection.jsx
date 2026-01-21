import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

// ScrollReveal Wrapper Component for Text Only
const ScrollReveal = ({ children, className = "" }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 30%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [20, 0]);

  return (
    <motion.div ref={ref} style={{ opacity, y }} className={className}>
      {children}
    </motion.div>
  );
};

// Main Projects Section
const ProjectsSection = ({ Container7, Container8, Container9 }) => {
  return (
    <section className="py-12 px-4 md:px-12 lg:px-24">
      
      {/* Heading */}
      <ScrollReveal className="mt-5">
        <p className="text-center text-xl font-medium">Our Projects</p>
      </ScrollReveal>

      {/* Project Title */}
      <ScrollReveal>
        <p className="text-black text-center text-4xl font-semibold mt-3">
          BULK LOAD BANK 500KW<span>-3200KW Resistive or</span>
        </p>
        <p className="text-black text-center text-4xl font-semibold mt-3">
          With 0.8PF for generator<span> testing.440V -11KV</span>
        </p>
      </ScrollReveal>

      {/* Description */}
      <ScrollReveal className="mt-5">
        <p className="text-center text-xl text-gray-400">
          Ecom Engineers have successfully delivered and commissioned 11KV2MW
        </p>
        <p className="text-center text-xl text-gray-400">
          Load Banks to Customer in INDIA
        </p>
      </ScrollReveal>

      {/* Customer Logos */}
      <div className=" lg:-ml-12 xl:-ml-14 mt-5">
     <div className="mt-8 px-0">
  <div className="flex flex-wrap justify-center gap-1 md:gap-2 lg:gap-4">
    {[Container7, Container8, Container9].map((img, idx) => (
      <img
        key={idx}
        src={img}
        alt={`Customer ${idx}`}
        className="
           sm:w-56 md:w-60 lg:w-90 xl:w-[409px]h-[493px] 2xl:w-96
          
          object-contain
        "
      />
    ))}
  </div>
</div>
</div>
      

    </section>
  );
};

export default ProjectsSection;


