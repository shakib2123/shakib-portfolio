import headerImg from "../assets/img/header-img.svg";
import "./Button.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import resume from "../../public/Resume-Shakib.pdf";
const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto px-3 flex justify-center items-center min-h-[calc(100vh-100px)] mt-8 py-8">
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-center">
        <div className="">
          <h1 className="text-xl p-3 border border-white w-fit rounded bg-gradient-to-r from-pink-500 to-blue-500 font-semibold   text-gray-200 ">
            Welcome To My Portfolio
          </h1>
          <h1 className="text-5xl mt-5 lg:text-7xl font-bold text-white">
            Hi! I'm Shakib <br /> Web Developer
          </h1>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl">
            A passionate and innovative web developer dedicated to bringing
            digital ideas to life. With a keen eye for detail and a commitment
            to creating seamless user experiences, I specialize in crafting
            dynamic and visually stunning websites.
          </p>
          <a download="shakib's resume" href={resume}>
            <button className="mt-7 px-4 py-3 flex gap-2 group items-center text-gray-100 font-semibold">
              Download Resume{" "}
              <FaLongArrowAltRight className="group-hover:ml-4 transition-all" />
            </button>
          </a>
        </div>
        <div>
          <img className="animate-pulse" src={headerImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
