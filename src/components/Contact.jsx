import { FaArrowRight, FaMailBulk, FaPhone } from "react-icons/fa";
import bgImg from "../assets/img/color-sharp.png";

const Contact = () => {
  const handleSend = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const description = form.description.value;
    const info = {
      name: name,
      email,
      description,
    };
    console.log(info);
  };
  return (
    <div
      style={{ backgroundImage: bgImg }}
      className="max-w-7xl mx-auto px-3 bg-center bg-cover min-h-screen flex flex-col md:flex-row gap-10 py-16"
    >
      <div className="">
        <h2 className="text-4xl md:text-5xl mb-2 font-bold  text-pink-400">
          Contact Me
        </h2>
        <h4 className="text-2xl text-gray-300 mb-2">Let's work together!</h4>
        <p className="text-gray-400 max-w-xl">
          Collaborative and enthusiastic, I thrive on teamwork to create
          innovative solutions. Let's join forces to bring ideas to life and
          build exceptional projects together.
        </p>
        <p className="text-gray-200 flex gap-2 items-center mt-2 text-lg">
          <FaMailBulk /> mshakibalhasan21@gmail.com
        </p>
        <p className="text-gray-200 flex gap-2 items-center mt-2 text-lg">
          <FaPhone /> +8801641991384
        </p>
      </div>
      <form onSubmit={handleSend} className="w-full">
        <div className="mb-6 w-full">
          <label className="block mb-2 text-sm font-medium text-green-300 ">
            Your name
          </label>
          <input
            type="text"
            name="name"
            className="bg-green-50 border border-green-500 text-green-800  placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            placeholder="Your name.."
          />
        </div>
        <div className="mb-6 w-full">
          <label className="block mb-2 text-sm font-medium text-green-300 ">
            Your email
          </label>
          <input
            type="email"
            name="email"
            className="bg-green-50 border border-green-500 text-green-800  placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            placeholder="Your email.."
          />
        </div>
        <div className="mb-6 w-full">
          <label className="block mb-2 text-sm font-medium text-green-300 ">
            Your description
          </label>
          <textarea
            type="text"
            name="description"
            className="bg-green-50 border border-green-500 text-green-800  placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
            placeholder="Your name.."
          />
        </div>
        <button className="flex justify-center items-center gap-2 px-4 py-3 w-full text-gray-300 font-semibold">
          Send <FaArrowRight />
        </button>
      </form>
    </div>
  );
};

export default Contact;
