import React from "react";
import Link1 from "../assets/Link1.png";
import Container4 from "../assets/Container4.png";

const Product1 = () => {
  const cards = [
    {
      id: 4,
      title: "18KW – 100KW Smart Load Bank",
      image: Link1,
      specs: [
        "Smart Monitoring & Control System",
        "Wireless Connectivity (Remote Access)",
        "Individual / Group Switching",
        "Real-time Load, Voltage & Current Monitoring",
        "Temperature Monitoring (Inlet & Outlet)",
        "Graph & Report Generation",
      ],
    },
    {
      id: 5,
      title: "Rack Design Load Bank – 12.6KW",
      image: Container4,
      specs: [
        "Dimensions : 2000 x 500 x 900 MM",
        "Self Standing – No Shrouding Required",
        "3 Phase / Single Phase Convertible",
        "Voltage : 230 – 415V Changeover Isolator",
        "Load Steps : 3.2KW x 4",
        "CFM : 160 CFM / KW",
        "Power Cable : 3 Meter with IEC Socket",
        "Power Factor : 1",
        "Load Type : Resistive",
        "Optional : Web / Mobile / Tab Control (Up to 200 Units)",
      ],
    },
  ];

  return (
   <div className="
     flex
     flex-col
     md:flex-row md:flex-wrap
     lg:flex-nowrap
     w-full
     justify-start
     gap-8
     px-4 md:px-8 lg:px-12
     mt-[250px]
     lg:ml[83px]
  xl:ml-[85px]
   ">
   
     {/* CARD 1 */}
     <div className="relative flex justify-center w-full md:w-auto">
       
       <img
         src={Link1}
         className="w-[384px] h-[397px] object-cover rounded-[15px]"
       />
   
       <div className="
         w-[370px] h-[609px]
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
         <p className="w-[298px] text-[22px] font-semibold h-[65px]">
          18KW - 100KW-
SMART LOAD bank.​
         </p>
   
         <p className="w-[280px] text-[20px] leading-[36px] text-[#606060] mt-4 h-[432px]">
           Features:​ - 
Smart Monitoring and Control System​
 - Wireless Connectivity for Remote Access​ - 
Individual or Group Switching Capability​ - 
Real-time Monitoring of Load, Voltage, and Current, KW​ - Temperature Monitoring (Inlet and Outlet)​ 
- Graph Printing Capability​
         </p>
       </div>
     </div>
   
     {/* CARD 2 */}
    
     <div className="relative flex justify-center w-full md:w-auto">
       
       <img
         src={Container4}
         className="w-[813.66px] h-[411px] object-cover rounded-[15px]"
       />
   
       <div className="
         w-[785px] h-[609px]
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
         <p className="w-[298px] text-[22px] font-semibold top-[42px]">
           RACK Design : 12.6KW​
         </p>
   
         <p className="w-[400px] text-[20px] leading-[36px] text-[#606060] mt-8 h-[360px] top-[86px]">
  DIMENSIONS : 2000MM X 500MM X 900MM ​ 
ADVANTAGE : SELF STANDING , 
No need for Shrouding 
​ HIGH CFM : ​ 3PHASE—SINGLE PHASE CONVERTIBLE ​ 230—415V CHENGEOVER ISOLATOR​ INDIVIDUAL MCB FOR EACH STEP ​ 
Load steps : 3.2 KW x 4 ​ 
CFM : 160 CFM / KW ​
 POWER WIRE : 3 MTR WITH IEC SOCKET ​ 
POWER FACTOR : 1 ​ 
LOAD TYPE : RESISITIVE ​ ​
   
<p className="w-[697px] text-[20px] leading-[36px] text-[#606060] mt-4 h-[540px] top-[457px]">
           OPTIONAL : DIGITAL CONTROLLED SOFTWARE
THOUGH WEB CONTROL. UP TO 200 UNITS.​CAN BE CONTROLLED THOUGH MOBILE / TAB /
COMPUTER FOR CONTINUOUS MONITORING &CONROL. ​
         </p>
         </p>
       </div>
     </div>
     {/* CARD 3 */}
     
   
   </div>
     
        
          
   
  );
};

export default Product1;






