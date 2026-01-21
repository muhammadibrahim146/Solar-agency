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
        className="text-center text-4xl md:text-5xl font-semibold tracking-widest mt-8"
      />

      <p className="text-center text-gray-400 max-w-3xl mx-auto text-sm md:text-base px-4 mt-10 ">
  Switch to solar and enjoy lower bills, clean energy, and expert service designed
  <br />
<div className="mt-2">
  for homes, businesses, and beyond.
</div>
  </p>
<div className="
  flex
  flex-col
  md:flex-row md:flex-wrap
  lg:flex-nowrap
  w-full
  justify-start
  gap-8
  px-4 md:px-8 lg:px-12
  mt-8 
  lg:ml[83px]
  xl:ml-[85px]
">

  {/* CARD 1 */}
  <div className="relative flex justify-center w-full md:w-auto ">
    
    <img
      src={Container1}
      className="w-[
410.66px] h-[
410.66px] object-cover rounded-[15px]"
    />

    <div className="
      w-[370px] h-[397px]
      bg-white/95
      text-black
      absolute
      left-2
      top-[308px]
      p-4
      backdrop-blur-sm
      border border-black/10
      rounded-[15px]
      shadow-lg
    ">
      <p className="w-[298px] text-[22px] font-semibold">
        Small Portable Rack mountable . For Server Hall
      </p>

      <p className="w-[328px] text-[20px] leading-[36px] text-[#606060] mt-4">
        Capacity : 125V DC—15KW <br />
        Voltages Available : 12—150VDC & 120VAC—240VAC <br />
        Frequency : 50 / 60 Hz (Optional) <br />
        Load Type : Resistive Bank <br />
        Power Factor : 1 <br />
        Load Steps : 1KW , 2KW, 3KW <br />
        3Phase optional Splitter Box 
      </p>
    </div>
  </div>

  {/* CARD 2 */}
 
  <div className="relative flex justify-center w-full md:w-auto">
    
    <img
      src={Container2}
      className="w-[410.66px] h-[410.66px] object-cover rounded-[15px]"
    />

    <div className="
      w-[370px] h-[420px]
      bg-white/95
      text-black
      absolute
      left-2
      top-[299px]
      p-4
      backdrop-blur-sm
      border border-black/10
      rounded-[15px]
      shadow-lg
    ">
      <p className="w-[298px] text-[22px] font-semibold">
        Server Hall Bank 9KW – 15KW
      </p>

      <p className="w-[314px] text-[20px] leading-[36px] text-[#606060] mt-4 h-[540px] top-[128px]">
       Capacity : 125V DC / 230 / 415V Ac 9 KW —15KW ​
Voltages Available : 240VAC / 425VAC. ​
Frequency : 50 / 60 Hz (Optional)​
Loat Type : Resistive Bank.​
Power Factor : 1​
Load Steps : ,3KW + 3KW +3 KW + 3KW + 3KW ​


      </p>
    </div>
  </div>
  {/* CARD 3 */}
  <div className="relative flex justify-center w-full md:w-auto">
    
    <img
      src={Container3}
      className="w-[410.66px] h-[410.66px] object-cover rounded-[15px]"
    />

    <div className="
      w-[384px] h-[430px]
      bg-white/95
      text-black
      absolute
      left-2
      top-[300px]
      p-4
      backdrop-blur-sm
      border border-black/10
      rounded-[15px]
      shadow-lg
    ">
      <p className="w-[298px] text-[22px] font-semibold">
        SERVER HALL BANK 18KW​
      </p>

      <p className="w-[314px] text-[20px] leading-[36px] text-[#606060] h-[288px] mt-4">
      OPERATING VOLTAGE : 415VAC ​ Voltages Available : 415 VAC ​ Frequency : 50 / 60 Hz​ Loat Type : Resistive Bank.​ Power Factor : 1​ Load Steps : ,4KW +2 KW , + 4KW +2KW . + 4KW +2KW ​ CFM : 3150CFM ​ Digital Control through webserver Software : Optional
      </p>
    </div>
  </div>

</div>


     
            {/* FLOAT CARD */}
<div>
  
  

      </div>
    </section>
  );
};

export default Product;

