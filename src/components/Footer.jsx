import { FaCopyright } from "react-icons/fa";
import footerImg from "../assets/img/footer-bg.png";
const Footer = () => {
  return (
    <div
      style={{ backgroundImage: footerImg }}
      className="bg-cover bg-center h-40 overflow-hidden px-3 pt-8"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-300 text-3xl font-bold flex gap-2 items-center">
          <img className="w-20" src="/logo.png" alt="" />
          SHAKIB
        </p>
        <p className="flex gap-2 text-gray-300 items-center">
          Developed with love by Shakib <FaCopyright /> 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
