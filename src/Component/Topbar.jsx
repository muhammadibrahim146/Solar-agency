import {
  FaFacebookF,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
  FaInstagram,
  FaLocationDot,
  FaPhone,
  FaEnvelope
} from "react-icons/fa6";

const TopBar = () => {
  return (
    <div className="hidden lg:block bg-[#f0353a] text-white text-sm w-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 py-2">
        
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row items-center gap-2 lg:gap-6">
          <span className="flex items-center gap-2">
            <FaLocationDot />
            100 Solar Ave, San Diego, CA
          </span>

          <span className="flex items-center gap-2">
            <FaPhone />
            +1 800 987 654
          </span>

          <span className="flex items-center gap-2">
            <FaEnvelope />
            support@solaria.com
          </span>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4 mt-2 lg:mt-0">
          <a href="#" className="hover:opacity-70 transition"><FaFacebookF /></a>
          <a href="#" className="hover:opacity-70 transition"><FaXTwitter /></a>
          <a href="#" className="hover:opacity-70 transition"><FaYoutube /></a>
          <a href="#" className="hover:opacity-70 transition"><FaPinterestP /></a>
          <a href="#" className="hover:opacity-70 transition"><FaInstagram /></a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;

