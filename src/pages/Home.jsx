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

import Product from "../Component/Product";
import Product1 from "../Component/Product1";
import Footer from "../Component/Footer";
import TopBar from "../Component/Topbar";
import { Link } from "react-router-dom";

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


        {/* Centered Content */}
        <div className="flex flex-col justify-center items-center h-full space-y-6 px-4">
          <motion.img
            {...fadeUp}
            src={textImage}
            alt="Center Text"
            className="h-32 md:h-48 lg:h-64"
          />

          <motion.button
            {...fadeUpDelay(0.3)}
            className="self-start md:self-start bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300"
          >
            Get Started Now
          </motion.button>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full bg-white py-20 px-6 md:px-24">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp}>
<Link
  to="/about"
  className="text-xl font-semibold text-black cursor-pointer"
>
  About Us
</Link>

          </motion.div>

          <motion.div {...fadeUpDelay(0.2)}>
            <p className="text-lg md:text-2xl font-semibold leading-relaxed text-black">
              We at <strong>ECOM Engineers Pvt. Ltd</strong> are{" "}
              <span className="text-gray-400">mass producers of Resistive Load banks</span>.
              <br />
              <br />
              Ranging from <strong>6 KW up to 200KW</strong>. These{" "}
              <span className="text-gray-400">
                Load banks are essential for Integrated System testing in Datacentre Server Halls.
              </span>{" "}
              Battery test Discharge & Generator Testing.{" "}
              <span className="text-gray-400">
                Electric vehicle Battery test discharge. Power Supplies Test for EV & Hybrid Vehicles.
              </span>
            </p>

            {/* Stats */}
            <div className="flex gap-16 mt-16 flex-wrap">
              <motion.div {...fadeUpDelay(0.3)}>
                <h3 className="text-4xl font-bold text-black">100K+</h3>
                <p className="text-gray-500 mt-2">Panels Installed</p>
              </motion.div>
              <motion.div {...fadeUpDelay(0.4)}>
                <h3 className="text-4xl font-bold text-black">25K+</h3>
                <p className="text-gray-500 mt-2">Plants Powered</p>
              </motion.div>
              <motion.div {...fadeUpDelay(0.5)}>
                <h3 className="text-4xl font-bold text-black">16+</h3>
                <p className="text-gray-500 mt-2">Years of Expertise</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Products Section */}
      <div className="w-full bg-white py-20 px-6 md:px-24">
        <div className="grid md:grid-cols-2 gap-14 items-start">
          <div className="relative flex justify-center md:justify-start">
            <motion.img
              {...fadeUp}
              src={Container}
              alt="Server Hall Load Bank"
              className="w-[260px] md:w-[320px] rounded-xl shadow-md z-10"
            />
            <motion.img
              {...fadeUpDelay(0.2)}
              src={Rectangle}
              alt="Load Bank Side View"
              className="w-[200px] md:w-[260px] rounded-xl shadow-md absolute -bottom-8 right-0 md:right-20"
            />
          </div>

          <motion.div {...fadeUpDelay(0.3)}>
            <p className="text-sm text-gray-500 mb-3">Our products</p>

            <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
              Server Hall <span className="text-gray-400">Load banks</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Designed with High precision machines.
              Heavy Duty Fans for Continuous operation @170CFM / KW
              PROTECTION OFFERED: MINIATURE CIRCUIT BREAKERS FOR ALL STEPS
              Fuse protection for Fan.
              High Temperature withstand wires (Glass Fibre insulated wires).
              Available in Rack mount Design up to 6KW Above 6KW Pedestal mounting.
            </p>

            <hr className="my-6" />

            <ul className="space-y-4 text-gray-700 mb-8">
              <li>✓ Range : 6KW – 9KW – 12KW – 12.6KW – 18KW</li>
              <li>✓ Generator Test Banks : 100KW – 200KW</li>
              <li>✓ IEC Plug 3 Pin – 32A with 3 Meter Long wire</li>
            </ul>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium"
            >
              Get a Quote
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* FEATURED PRODUCT Section */}
      <motion.div {...fadeUp}>
        <div>
      <div className="w-full overflow-hidden">
  <motion.img
    src={Background}
    className="w-[120%] max-w-none"
    animate={{ x: ["0%", "-20%"] }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    }}
  />
</div>

          <div className="text-center tex-xl mt-3 font-medium py-3 ">
            <p> Solar Energy Service</p>
          </div>

          <motion.h1 {...fadeUpDelay(0.2)} className="text-5xl text-center mt-5 font-semibold text-black mb-6">
            FEATURED <span className="text-gray-400">PRODUCT</span>
          </motion.h1>

          <div className="text-center w-3/5 mx-auto ">
            <motion.p {...fadeUpDelay(0.3)} className="text-xl text-gray-400 mb-2">
              Switch to Solar. Save More. Live Clean. Enjoy lower bills, clean energy, and expert service
            </motion.p>
            <motion.p {...fadeUpDelay(0.4)} className="text-xl text-gray-400">
              for homes, businesses, and beyond.
            </motion.p>
          </div>
        </div>
      </motion.div>

      {/* Products Components */}
      <motion.div {...fadeUpDelay(0.5)} className="mt-5">
        <Product />
      </motion.div>
      <motion.div {...fadeUpDelay(0.6)} className="mt-5">
        <Product1 />
      </motion.div>

      {/* Horizontal Image */}
      <motion.div {...fadeUpDelay(0.7)} className="mt-5">
        <img src={horizaontal} alt="Horizontal Image" className="w-full h-auto" />
      </motion.div>

      {/* Projects Section */}
      <motion.div {...fadeUpDelay(0.8)} className="mt-5">
        <p className="text-center text-xl font-medium">Our Projects</p>
      </motion.div>
      <motion.div {...fadeUpDelay(0.85)}>
        <p className="text-black text-center text-4xl font-medium mt-3">
          BULK LOAD BANK 500KW<span className="text-gray-400">-3200KW Resistive or</span>
        </p>
        <p className="text-black text-center text-4xl font-medium mt-3">
          With 0.8PF for generator<span className="text-gray-400"> testing.440V -11KV</span>
        </p>
      </motion.div>
      <motion.div {...fadeUpDelay(0.9)} className="mt-5">
        <p className="text-center text-xl text-gray-400">Ecom Engineers have successfully delivered and commissioned 11KV2MW</p>
        <p className="text-center text-xl text-gray-400">Load Banks to Customer in INDIA</p>
      </motion.div>

      {/* Customer Logos */}
      <motion.div {...fadeUpDelay(0.95)} className="flex justify-center items-center flex-wrap gap-6 mt-8 px-6">
        {[Container7, Container8, Container9].map((img, idx) => (
          <img key={idx} src={img} alt={`Customer ${idx}`} className="w-60 sm:w-64 md:w-72 lg:w-80 h-auto object-contain" />
        ))}
      </motion.div>

      <motion.div {...fadeUpDelay(1)}>
        <p className="text-center text-xl font-medium mt-6">Customers</p>
        <p className="text-center text-3xl font-medium mt-2">
          Our load bank cust<span className="text-gray-400">omers(2023-2024)</span>
        </p>
        <div className="w-full bg-white py-14">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-6">
              {[Frame19, Frame20, Frame21, Frame22].map((img, idx) => (
                <div key={idx} className="w-full sm:w-[48%] md:w-[23%] p-6 rounded-lg shadow-sm hover:shadow-lg transition">
                  <img src={img} alt={`Client ${idx}`} className="h-full w-full object-contain" />
                </div>
              ))}
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

