import bgImg from "../assets/img/color-sharp2.png";
import educationImg from "../assets/img/education.jpg";
const About = () => {
  return (
    <div
      style={{ backgroundImage: bgImg }}
      className="max-w-7xl mx-auto bg-center bg-cover min-h-[50vh] flex flex-col-reverse lg:flex-row justify-center items-center gap-8 overflow-hidden py-16"
    >
      <div className="space-y-6">
        <h3 className="text-4xl lg:text-6xl font-semibold text-gray-300">
          Education
        </h3>
        <p>
          <span className="text-xl text-gray-400">
            SSC (Secondary School Certificate)
          </span>{" "}
          <br />
          <span className="text-xl text-gray-400">
            Year of Completion: 2023
          </span>{" "}
          <br />
          <span className="text-xl text-gray-400">Currently Studying...</span>
        </p>
      </div>
      <div className="md:w-1/2">
        <img src={educationImg} alt="" />
      </div>
    </div>
  );
};

export default About;
