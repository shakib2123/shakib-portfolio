import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import footerImg from "../assets/img/footer-bg.png";
const Footer = () => {
  return (
    <div
      style={{ backgroundImage: footerImg }}
      className="bg-cover bg-center h-40 overflow-hidden px-3 pt-8"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="text-gray-300 text-3xl font-bold flex gap-2 items-center">
          <img className="w-24" src="/logo.png" alt="" />
          SHAKIB
        </p>
        <p className="text-gray-100 text-2xl flex gap-4 items-center">
          <a href="https://web.facebook.com/profile.php?id=100092629614657">
            <FaFacebook />
          </a>
          <FaTwitter></FaTwitter>
          <FaInstagram />
        </p>
      </div>
    </div>
  );
};

export default Footer;
