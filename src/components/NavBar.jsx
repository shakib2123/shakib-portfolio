const NavBar = () => {
  return (
    <nav
      id="home"
      className="text-gray-200 backdrop-blur-xl  border-b border-gray-200"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="https://i.ibb.co/zZfBPSg/logo.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            SHAKIB
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <a href="https://drive.google.com/file/d/1shXFzQcVmq-vN4RhN_N5MuS9ywwTiXBB/view?usp=sharing">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-pink-500 to-blue-500  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
            >
              View Resume
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
