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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
      {cards.map((card) => (
        <div
          key={card.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Top Image */}
          <div className="w-full h-48 md:h-56 bg-gray-50 flex justify-center items-center">
            <img
              src={card.image}
              alt={card.title}
              className="h-full object-contain"
            />
          </div>

          {/* Bottom Content */}
          <div className="p-5">
            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-3 text-center">
              {card.title}
            </h3>

            <div className="space-y-2 text-sm text-gray-600">
              {card.specs.map((spec, i) => (
                <p key={i} className="flex items-start">
                  <span className="mr-2 text-gray-400">•</span> {spec}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product1;






