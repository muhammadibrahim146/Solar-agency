import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import logoImage from "../assets/Group.png"

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400">
      {/* TOP FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* LOGO + ABOUT */}
        <div>
          <div className="mb-4">
              <img src={logoImage} alt="Logo" className="h-16 w-auto" />
          </div>

          <p className="text-sm leading-relaxed">
            At Solaria, we're committed to delivering reliable,
            efficient, and sustainable solar energy solutions.
            From residential installations to commercial systems,
            we help you harness the power of the sun and reduce
            your energy bills while protecting the planet.
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-4 mt-6 text-white text-lg">
            <FaFacebookF />
            <FaTwitter />
            <FaWhatsapp />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>

        {/* OUR SERVICES */}
        <div>
          <h4 className="text-white mb-4 font-semibold">Our Services</h4>
          <ul className="space-y-2 text-sm">
            <li>Solar Panel Installation</li>
            <li>Solar Panel Maintenance</li>
            <li>Custom System Design</li>
            <li>Solar Battery Storage</li>
            <li>System Monitoring & Reporting</li>
            <li>Solar Panel Upgrades</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white mb-4 font-semibold">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Our Services</li>
            <li>Projects</li>
            <li>About Us</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white mb-4 font-semibold">Contact Us</h4>

          <div className="flex gap-3 mb-4">
            <FaMapMarkerAlt className="text-yellow-400 mt-1" />
            <p className="text-sm">
              <span className="text-white block font-medium">Head Office</span>
              100 Solar Ave, San Diego, CA
            </p>
          </div>

          <div className="flex gap-3 mb-4">
            <FaPhoneAlt className="text-yellow-400 mt-1" />
            <p className="text-sm">
              <span className="text-white block font-medium">Call Us</span>
              +1 800 987 654
            </p>
          </div>

          <div className="flex gap-3">
            <FaEnvelope className="text-yellow-400 mt-1" />
            <p className="text-sm">
              <span className="text-white block font-medium">Email Us</span>
              support@solaria.com
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-800 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
          <p>© 2025 – Solaria by BravisThemes.</p>
          <div className="flex gap-6">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

