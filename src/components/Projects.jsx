import bgImg from "../assets/img/color-sharp2.png";
import project1 from "../assets/img/project1.png";
import project2 from "../assets/img/project2.png";
import project3 from "../assets/img/project3.png";
const Projects = () => {
  return (
    <div
      style={{ backgroundImage: bgImg }}
      className="bg-center bg-cover min-h-screen max-w-7xl mx-auto px-3"
    >
      <div>
        <h1 className="text-3xl md:text-5xl font-semibold text-center text-gray-200 mb-8    ">
          Projects I've Worked On
        </h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <div className="max-w-lg p-3 rounded-xl bg-gray-900 ">
            <img className="rounded-xl" src={project1} alt="" />
            <p className="text-gray-400 mt-2">
              ContestHub offers a seamless experience for users eager to
              participate in exciting contests. Simply pay the entry fee, submit
              your task, and unleash your creativity. Whether you're an artist,
              coder, or enthusiast, there's a contest for everyone.
            </p>
            <div className="flex justify-evenly mt-4">
              <a href="https://contesthub-7485a.web.app/">
                <button className="text-lg font-semibold px-4 py-3  text-gray-300">
                  Live Site
                </button>
              </a>
              <a href="https://github.com/shakib2123/ContestHub-Client-Site">
                <button className="text-lg font-semibold px-4 py-3 text-gray-300">
                  Code Resource
                </button>
              </a>
            </div>
          </div>
          <div className="max-w-lg p-3 rounded-xl bg-gray-900 ">
            <img className="rounded-xl" src={project2} alt="" />
            <p className="text-gray-400 mt-2">
              At Restica Food, we're not just about meals; we're about crafting
              unforgettable dining experiences. Explore the essence of our
              culinary world where every dish is a celebration.
            </p>
            <div className="flex justify-evenly mt-4">
              <a href="https://restica-food.web.app/">
                <button className="text-lg font-semibold px-4 py-3  text-gray-300">
                  Live Site
                </button>
              </a>
              <a href="https://github.com/shakib2123/restica-client">
                <button className="text-lg font-semibold px-4 py-3 text-gray-300">
                  Code Resource
                </button>
              </a>
            </div>
          </div>
          <div className="max-w-lg p-3 rounded-xl bg-gray-900 ">
            <img className="rounded-xl" src={project3} alt="" />
            <p className="text-gray-400 mt-2">
              ContestHub offers a seamless experience for users eager to
              participate in exciting contests. Simply pay the entry fee, submit
              your task, and unleash your creativity. Whether you're an artist,
              coder, or enthusiast, there's a contest for everyone.
            </p>
            <div className="flex justify-evenly mt-4">
              <a href="https://brand-shop-21fa9.web.app/">
                <button className="text-lg font-semibold px-4 py-3  text-gray-300">
                  Live Site
                </button>
              </a>
              <a href="https://github.com/shakib2123/brand-shop-client">
                <button className="text-lg font-semibold px-4 py-3 text-gray-300">
                  Code Resource
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
