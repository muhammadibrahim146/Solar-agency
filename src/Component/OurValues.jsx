// OurValues.jsx
import React from "react";
import frame251 from "../assets/frame251.jpg";
import Frame261 from "../assets/Frame261.jpg";
// Agar aur images available ho to import karo
 import Frame271 from "../assets/Frame271.jpg";
 import Frame281 from "../assets/Frame281.jpg";
 import Frame291 from "../assets/Frame291.jpg";

const values = [
  {
    id: "01",
    title: "Engineering Excellence",
    desc: "We believe in getting it right—through precision, deep technical knowledge and uncompromising quality.",
    img: frame251,
  },
  {
    id: "02",
    title: "Innovation with Purpose",
    desc: "Innovation is meaningful only when it solves real problems. We design smarter solutions that add measurable value.",
    img: Frame261,
  },
  {
    id: "03",
    title: "Reliability & Trust",
    desc: "Our clients depend on us in critical moments. We honour that trust with consistency, transparency, and accountability.",
    img: Frame271, // fallback
  },
  {
    id: "04",
    title: "People at the Core",
    desc: "Great engineering is built by great people. We invest in talent, teamwork, and continuous learning.",
    img: Frame281, // fallback
  },
  {
    id: "05",
    title: "Future-Ready Thinking",
    desc: "We anticipate change, embrace new technologies, and design solutions that stand the test of time.",
    img: Frame291, // fallback
  },
];

const OurValues = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-xl overflow-hidden min-h-[300px] md:min-h-[400px] lg:min-h-[500px] ${
              index > 2 ? "md:col-span-1 md:translate-x-1/2" : ""
            }`}
          >
            {/* Background Image */}
            <img
              src={item.img}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-white/40"></div>

            {/* Content */}
            <div className="relative p-6 h-full flex flex-col justify-end text-white">
              <span className="absolute top-5 right-6 text-xs text-gray-200">
                {item.id}
              </span>

              <h3 className="text-lg md:text-xl font-semibold   text-black mb-2">
                {item.title}
              </h3>

              <p className="text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;




