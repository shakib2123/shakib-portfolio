import { FaBootstrap, FaCss3, FaFigma, FaHtml5, FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import AOS from "aos";
import {
  SiFirebase,
  SiTailwindcss,
  SiMongoosedotws,
  SiNextdotjs,
} from "react-icons/si";

import skillsBg from "../assets/img/color-sharp.png";
import monogoDB from "../assets/img/mongoDB-removebg-preview.png";
import nodeImg from "../assets/img/node-removebg-preview.png";
import { useEffect } from "react";
const Skills = () =>
{
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  return (
    <div
      style={{ backgroundImage: skillsBg }}
      className="bg-cover min-h-screen py-8 max-w-7xl mx-auto px-3 flex justify-center items-center"
    >
      <div className="text-center max-w-6xl mx-auto bg-gray-950 p-8 rounded-3xl">
        <h2
          data-aos="zoom-out-up"
          className="text-3xl md:text-6xl font-bold text-gray-200"
        >
          Skills
        </h2>
        <p data-aos="zoom-out-up" className="text-gray-400 text-lg mt-4">
          I specialize in crafting robust and scalable applications. I bring a
          keen eye for detail to create visually engaging interfaces. My
          approach prioritizes user-friendly and responsive website development,
          ensuring a seamless and enjoyable user experience.
        </p>

        <div className="bg-gray-900 p-4 w-fit mx-auto mt-4 rounded-2xl">
          <div
            data-aos="zoom-out-up"
            className="text-gray-300 text-5xl font-medium text-center flex flex-wrap gap-4 justify-center items-center mt-4"
          >
            <FaHtml5></FaHtml5>
            <FaCss3></FaCss3>
            <SiTailwindcss />
            <FaBootstrap />
            <FaFigma></FaFigma>
            <RiJavascriptFill />
            <FaReact></FaReact>
            <SiFirebase />
            <img className="w-20" src={monogoDB} alt="" />
            <img className="w-12" src={nodeImg} alt="" />
            <SiMongoosedotws />
            <SiNextdotjs></SiNextdotjs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
