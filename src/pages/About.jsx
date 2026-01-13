import React, { useState } from 'react';
import logoImage from "../assets/Group.png";
import aboutimage from "../assets/aboutimage.png";
import { motion } from "framer-motion";
import Container from "../assets/Container.png";
import Rectangle from "../assets/Rectangle.png";
import Whoweare from "../assets/Whoweare.png";
import Background from "../assets/Background.png";
import OurValues from '../Component/OurValues';
import TopBar from '../Component/Topbar';
import Background6 from"../assets/Background6.png";
import Footer from "../Component/Footer";
import Frame19 from "../assets/Frame19.png";
import Frame20 from "../assets/Frame20.png";
import Frame21 from "../assets/Frame21.png";
import Frame22 from "../assets/Frame22.png";
import { NavLink } from 'react-router-dom';



const About = () => {
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
     <TopBar/>
      {/* Hero Section */}
      <div
        className="h-screen w-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${aboutimage})` }}
      >
        {/* Overlay (optional for text readability) */}
        <div className="absolute inset-0 bg-black/40"></div>

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
      {/* Centered Content */}
{/* Centered Content */}
<div className="flex flex-col justify-start items-start h-full text-left px-8 md:px-16 lg:px-32 pt-24 relative z-20 space-y-4">
  <motion.p
    {...fadeUp}
    className="text-gray-400 text-lg md:text-xl font-medium"
  >
    Power your future with clean energy
  </motion.p>

  <motion.h1
    {...fadeUpDelay(0.3)}
    className="text-white text-6xl md:text-6xl lg:text-7xl font-bold"
  >
    About Us
  </motion.h1>
</div>


      </div>

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
                  <p className="text-lg text-gray-500 mb-3">Our products</p>
      
                  <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6">
                    Who W<span className="text-gray-400">e Are</span>
                  </h2>
      
                  <p className="text-gray-600 leading-relaxed mb-6">
                 <p> Dynamic Innovations was founded with a simple belief: engineering should be reliable, intelligent, and built for the future.</p>

<p className='mt-8'>With decades of combined experience, we design and deliver advanced solutions that support critical infrastructure, power systems, and high-performance environments. From testing and commissioning to innovation-led engineering services, our work helps organisations operate with confidence in moments where failure is not an option.</p>

<p className='mt-8'>We are a people-driven company—bringing together engineers, problem solvers, experienced professionals, and emerging talent. This mix of expertise and fresh thinking allows us to remain agile, precise, and forward-looking in everything we build.</p>

<p className='mt-8'>At Dynamic Innovations, we don’t just deliver systems.
We deliver assurance, performance, and progress.
   </p>
                  </p>
      
                  <hr className="my-6" />
      
               
                </motion.div>
              </div>
            </div>
      
      <motion.div {...fadeUp}>
              <div>
                <div className="w-full ">
                  <img src={Background} className="w-screen" />
                </div>
      
               
      
              
                
              </div>
            </motion.div>
      
      <div className="mt-10 px-6 md:px-24">
  <div className="flex flex-col md:flex-row gap-10">
    
    {/* Vision Box */}
    <motion.div
      className="flex-1 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Our Vision</h2>
      <p className="text-gray-600 leading-relaxed">
        To be a trusted leader in innovative engineering solutions that power resilient infrastructure and enable the technologies of tomorrow.
      </p>
    </motion.div>

    {/* Mission Box */}
    <motion.div
      className="flex-1 flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">Our Mission</h2>
      <p className="text-gray-600 leading-relaxed">
       To design, engineer, and deliver dependable, future-ready solutions that solve complex technical challenges—through expertise, innovation, and a commitment to excellence.
      </p>
    </motion.div>

  </div>
</div>
      <div className='mt-6'>
        <p className='text-center text-xl font-medium text-black font-sans'>what makes us special</p>
     
     <h1 className='text-center mt-5 text-black text-5xl'>Our V<span className='text-gray-400'>alues</span></h1>
      </div>
      <div className='mt-5'>
        <OurValues/>

      </div>
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
};

export default About;
