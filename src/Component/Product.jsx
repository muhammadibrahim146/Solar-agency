import React from "react";
import Container1 from "../assets/Container1.png";
import Container2 from "../assets/Container2.png";
import Container3 from "../assets/Container3.png";
import Link1 from "../assets/Link1.png";

const Product = () => {
  const cards = [
    {
      id: 1,
      title: "Small Portable Rack Mountable",
      subtitle: "For Server Hall",
      image: Container1,
      specs: [
        "Capacity : 125V DC – 15KW",
        "Voltage Range : 12–150VDC & 120–240VAC",
        "Frequency : 50 / 60 Hz (Optional)",
        "Load Type : Resistive Bank",
        "Power Factor : 1",
        "Load Steps : 1KW, 2KW, 3KW",
        "3 Phase Optional Splitter Box",
      ],
      span: "col-span-1",
    },
    {
      id: 2,
      title: "Server Hall Bank 9KW – 15KW",
      image: Container2,
      specs: [
        "Capacity : 125V DC / 230 / 415V AC",
        "Power Range : 9KW – 15KW",
        "Voltages Available : 240VAC / 425VAC",
        "Frequency : 50 / 60 Hz (Optional)",
        "Load Type : Resistive Bank",
        "Power Factor : 1",
        "Load Steps : 3KW + 3KW + 3KW",
      ],
      span: "col-span-1",
    },
    {
      id: 3,
      title: "Server Hall Bank 18KW",
      image: Container3,
      specs: [
        "Operating Voltage : 415VAC",
        "Frequency : 50 / 60 Hz",
        "Load Type : Resistive Bank",
        "Power Factor : 1",
        "Load Steps : 4KW + 2KW + 4KW + 2KW",
        "CFM : 3150",
        "Digital Control via Web Server (Optional)",
      ],
      span: "col-span-1",
    },
   
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 px-4">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`bg-white rounded-xl shadow-lg overflow-hidden ${card.span}`}
        >
          {/* Image */}
          <img
            src={card.image}
            alt={card.title}
            className={`w-full object-cover ${
              card.span === "col-span-2" ? "h-56" : "h-72"
            }`}
          />

          {/* Content */}
          <div className="p-6 min-h-[340px] flex flex-col">
            <h3 className="text-lg font-semibold text-center mb-1">
              {card.title}
            </h3>

            {card.subtitle && (
              <p className="text-sm text-gray-600 text-center mb-4">
                {card.subtitle}
              </p>
            )}

            <div className="space-y-2 text-sm text-gray-600 flex-1">
              {card.specs.map((spec, i) => (
                <p key={i}>• {spec}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;



