import React from "react";
import { motion } from "framer-motion";

import Container1 from "../assets/Container1.png";
import Container2 from "../assets/Container2.png";
import Container3 from "../assets/Container3.png";
import Link1 from "../assets/Link1.png";
import Container4 from "../assets/Container4.png";
import ScrollRevealText from "./ScrollRevealText";

const products = [
  {
    title: "Small Portable Rack mountable . For Server Hall",
    image: Container1,
    desc: [
      <>
        Capacity : 125V DC –15KW <br />
        Voltages Available : 12–150VDC & 120VAC–240VAC. <br />
        Frequency : 50 / 60 Hz (Optional) <br />
        Load Type : Resistive Bank. <br />
        Power Factor : 1 <br />
        Load Steps : 1KW , 2KW,3KW <br />
        3Phase optional Splitter Box
      </>
    ]
  },
  {
    title: "Server Hall Bank 9KW – 15KW",
    image: Container2,
    desc: [
      <>
        Capacity : 125V DC / 230 / 415V Ac <br />
        9 KW –15KW <br />
        Voltages Available : 240VAC / 425VAC. <br />
        Frequency : 50 / 60 Hz (Optional) <br />
        Load Type : Resistive Bank. <br />
        Power Factor : 1 <br />
        Load Steps : 3KW + 3KW + 3KW +
      </>
    ]
  },
  {
    title: "Server Hall Bank 18KW",
    image: Container3,
    desc: [
      <>
        OPERATING VOLTAGE : 415VAC <br />
        Voltages Available : 415 VAC <br />
        Frequency : 50 / 60 Hz <br />
        Load Type : Resistive Bank. Power Factor : 1 <br />
        Load Steps : 4KW + 2KW + 4KW + 2KW + 4KW + 2KW <br />
        CFM : 3150CFM Digital Control through webserver Software : Optional
      </>
    ]
  },
  {
    title: "18KW – 100KW Smart Load Bank",
    image: Link1,
    desc: [
      <>
        Smart Monitoring and Control System <br />
        Wireless Connectivity for Remote Access <br />
        Individual or Group Switching Capability <br />
        Real-time Monitoring of Load, Voltage, and Current <br />
        Temperature Monitoring (Inlet and Outlet)
      </>
    ]
  },
  {
    title: "Rack Design : 12.6KW",
    image: Container4,
    wide: true, // last card wide
    desc: [
      <>
        DIMENSIONS : 2000MM X 500MM X 900MM <br />
        ADVANTAGE : SELF STANDING , No need for Shrouding <br />
        HIGH CFM : 3PHASE–SINGLE PHASE CONVERTIBLE 230–415V <br />
        CHENGOVER ISOLATOR INDIVIDUAL MCB FOR EACH STEP <br />
        Load steps : 3.2 KW x 4 <br />
        CFM : 160 CFM / KW <br />
        POWER WIRE : 3 MTR WITH IEC SOCKET <br />
        POWER FACTOR : 1 <br />
        LOAD TYPE : RESISTIVE <br />
        <br />
        OPTIONAL : DIGITAL CONTROLLED SOFTWARE THROUGH WEB CONTROL.
      </>
    ]
  }
];

const cardAnim = {
  hidden: { opacity: 0, y: 60 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 }
  })
};

const Product = () => {
  return (
    <section className="py-24">

      {/* HEADING */}
      <div className="text-center text-xl -mt-6 font-medium py-3">
        <p>Solar Energy Service</p>
      </div>
      <ScrollRevealText
        as="h2"
        text="FEATURED PRODUCTS"
        className="text-center text-4xl md:text-5xl font-semibold tracking-widest"
      />

      <p className="text-center text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base px-4">
        Switch to solar and enjoy lower bills, clean energy, and expert service
        designed for homes, businesses, and beyond.
      </p>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 sm:gap-x-8 gap-y-20 sm:gap-y-24 mt-24 px-4 sm:px-6">
        {products.map((item, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={cardAnim}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className={`group relative ${item.wide ? "lg:col-span-2" : ""}`}
          >
            {/* IMAGE */}
            <motion.img
              src={item.image}
              alt={item.title}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.5 }}
              className={`
                w-full object-cover rounded-[32px]
                /* MOBILE height */
                h-[320px] sm:h-[360px] md:h-[400px]
                /* LAPTOP+ height */
                lg:h-[460px] xl:h-[480px]
                /* WIDE CARD height override */
                ${item.wide
                  ? "sm:h-[360px] md:h-[400px] lg:h-[520px] xl:h-[540px]"
                  : ""
                }
              `}
            />

            {/* FLOAT CARD */}
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 160 }}
              className={`
                absolute left-3 sm:left-4 right-3 sm:right-4
                /* MOBILE & TABLET spacing */
                -bottom-4 sm:-bottom-6 md:-bottom-6
                /* LAPTOP+ spacing */
                ${item.wide ? "lg:-bottom-6 xl:-bottom-8" : "lg:-bottom-16"}
                bg-white rounded-2xl p-4 sm:p-5 md:p-6
                shadow-[0_20px_60px_rgba(0,0,0,0.35)]
                /* Scrollable description ONLY for mobile/tablet */
                ${item.wide ? "overflow-y-auto max-h-[180px] sm:max-h-[200px] lg:overflow-visible lg:max-h-full" : ""}
              `}
            >
              <h3 className="text-[14px] sm:text-[14.5px] font-semibold text-gray-900 leading-snug">
                {item.title}
              </h3>

              <ul className="mt-3 sm:mt-4 space-y-1 text-[12px] sm:text-[13px] text-gray-600 leading-relaxed">
                {item.desc.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Product;

