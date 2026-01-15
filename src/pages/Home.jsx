//import React, { useState } from "react";

import { motion } from "framer-motion"; // ✅ framer-motion import
import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import bgImage from "../assets/image.png";
import logoImage from "../assets/Group.png";
import textImage from "../assets/text.png";
import Container from "../assets/Container.png";
import Rectangle from "../assets/Rectangle.png";
import Background from "../assets/Background.png";
import horizaontal from "../assets/horizaontal.png";
import Container7 from "../assets/Container7.png";
import Container8 from "../assets/Container8.png";
import Container9 from "../assets/Container9.png";
import Container10 from "../assets/Container10.png";
import Background5 from "../assets/Background5.png";
import Frame19 from "../assets/Frame19.png";
import Frame20 from "../assets/Frame20.png";
import Frame21 from "../assets/Frame21.png";
import Frame22 from "../assets/Frame22.png";
import Background6 from "../assets/Background6.png";
import ScrollRevealText from "../Component/ScrollRevealText";
import Product from "../Component/Product";
import Product1 from "../Component/Product1";
import Footer from "../Component/Footer";
import TopBar from "../Component/Topbar";
import { Link } from "react-router-dom";
import MovingStrip from "../Component/MovingStrip";
import CountUp from "../Component/CountUp";
import AboutSection from "../Component/AboutSection";
import ProductFeature from "../Component/ProductFeature";
import ProjectsSection from "../Component/ProjectSection";
function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // ✅ Basic animation variants
  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const fadeUpDelay = (delay) => ({
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut", delay },
  });

  return (
    <>
      {/* Hero Section */}
      <TopBar/>
      <div
        className="h-screen w-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Navbar */}
       <nav className="relative flex items-center p-4 border-b border-gray-300">
  <div className="flex items-center z-10">
    <img src={logoImage} alt="Logo" className="h-16 w-auto" />
  </div>

  {/* Desktop Menu */}
  <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8 text-white font-medium">
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-bold" : ""}`
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-bold" : ""}`
        }
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-bold" : ""}`
        }
      >
        Contact
      </NavLink>
    </li>
  </ul>

  {/* Mobile Hamburger */}
  <div className="md:hidden ml-auto z-10">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-white focus:outline-none"
    >
      {isOpen ? (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      ) : (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      )}
    </button>
  </div>
</nav>

{/* Mobile Menu */}
{isOpen && (
  <ul className="flex flex-col items-center text-white font-medium space-y-4 md:hidden p-4">
    <li>
      <NavLink
        to="/"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-bold" : ""}`
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/about"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-bold" : ""}`
        }
      >
        About
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        onClick={() => setIsOpen(false)}
        className={({ isActive }) =>
          `hover:text-yellow-400 ${isActive ? "text-yellow-400 font-bold" : ""}`
        }
      >
        Contact
      </NavLink>
    </li>
  </ul>
)}

<div className="relative flex flex-col justify-center h-full min-h-[420px] px-6 md:px-20 text-white">

  {/* TEXT */}
  <motion.p {...fadeUp} className="max-w-3xl text-sm md:text-base mb-4">
    From 6 kW to 3.2 MW, we design and manufacture resistive and smart load banks
    for data centers, generators, EV systems, UPS, and high-voltage testing.
  </motion.p>

  {/* HEADING */}
  <motion.h1
    {...fadeUpDelay(0.2)}
    className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide mb-6"
  >
    RESISTIVE LOAD BANKS
  </motion.h1>

  {/* BUTTON WRAPPER (LOCKED POSITION) */}
  <motion.div
    {...fadeUpDelay(0.4)}
    className="
      flex
      justify-center
      sm:justify-start
      mt-4
      pb-6
    "
  >
    <button
      className="
        bg-red-600 hover:bg-red-700
        text-white font-bold
        py-3 px-8
        rounded-lg
        text-base sm:text-lg
        transition duration-300
      "
    >
      Get Started Now
    </button>
  </motion.div>

</div>

</div>
<div className="w-full flex justify-start ml-3">

  <div className="">
    <AboutSection/>

  </div>

</div>
<div className="w-full h-[1px] bg-gray-300 my-6"></div>
<div className="lg:-ml-6 ">
<ProductFeature/>
</div>
      {/* FEATURED PRODUCT Section */}
      <motion.div {...fadeUp}>
        <div>
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
                src={Background}
                alt="strip"
                className="h-[70px] md:h-[90px] w-auto object-cover"
              />
            ))}
          </motion.div>
        </div>

         

          
        </div>
      </motion.div>

      {/* Products Components */}
      <motion.div {...fadeUpDelay(0.5)} className="">
        <Product />
      </motion.div>
      <motion.div {...fadeUpDelay(0.6)} className="">
      
      </motion.div>

      {/* Horizontal Image */}
      <motion.div {...fadeUpDelay(0.7)} className="mt-5">
        <img src={horizaontal} alt="Horizontal Image" className="w-full h-auto" />
      </motion.div>

      {/* Projects Section */}
      <ProjectsSection
  Container7={Container7}
  Container8={Container8}
  Container9={Container9}
/>

<div className="w-full bg-[#f8f4f2] relative overflow-hidden">
  {/* TOP SECTION */}
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch">
    {/* LEFT IMAGE */}
    <div className="w-full lg:w-[60%] h-[300px] lg:h-auto">
      <img
        src={Container10}
        alt="Load Bank"
        className="w-full h-full object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="w-full lg:w-[40%] bg-[#f9f5f3] px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
      <div>
        <p className="text-sm sm:text-base text-gray-600 mb-2">
          Trusted & Affordable
        </p>

        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4 sm:mb-6">
          11KV Load bank Smart feature
        </h2>

        <ul className="text-base sm:text-lg text-gray-800 leading-relaxed">
          <li>Automatic Load Ramping Program by user</li>
          <li>Monitoring & Control through tablet</li>
          <br className="hidden sm:block" />
          <li>Wireless Control Software Capable to Record And</li>
          <li>Produce Graphs for Load Switched With Respect to time</li>
          <br className="hidden sm:block" />
          <li>Safety Features: All steps Are Protected For Overcurrent/</li>
          <li>Shortcircuit / Ground Fault</li>
          <br className="hidden sm:block" />
          <li>Fan Controls: Auto Trip On Fan Motor Trip/Fan Monitoring</li>
          <li>Exhaust: Vertical</li>
          <li>IP Degree Of Protection: IP 44 Outdoor Weather Proof</li>
        </ul>
      </div>
    </div>
  </div>

  {/* 🔥 MOVING STRIP */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-transparent">
    <MovingStrip />
  </div>
</div>



      <motion.div {...fadeUpDelay(1)}>
        <p className="text-center text-xl font-medium mt-6">Customers</p>
        <ScrollRevealText
    as="p"
    text="Our load bank customers(2023-2024)"
    className="text-center text-4xl font-semibold mt-2"
    baseColor="#9CA3AF"
    revealColor="#000000"
  />
      <div className="w-full py-14">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* NEGATIVE MARGIN ONLY ON md+ */}
    <div className="ml-0 md:-ml-6">
      <div className="flex flex-wrap justify-center gap-4 sm:gap-3 md:gap-2">
        {[Frame19, Frame20, Frame21, Frame22].map((img, idx) => (
          <div
            key={idx}
            className="
              w-full
              sm:w-[48%]
              md:w-[23%]
              p-6
              rounded-lg
              shadow-sm
              hover:shadow-lg
              transition
            "
          >
            <img
              src={img}
              alt={`Client ${idx}`}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>

  </div>
</div>

          
        
      </motion.div>

      {/* Bottom Section */}
      <motion.div {...fadeUpDelay(1.05)}>
        <img src={Background6} alt="Background" className="w-full h-auto object-cover" />
      </motion.div>

      {/* Footer */}
      <motion.div {...fadeUpDelay(1.1)} className="">
        <Footer />
      </motion.div>
    </>
  );
}
export default Home;

