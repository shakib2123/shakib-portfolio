import Banner from "./components/Banner";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <div
        style={{
          backgroundImage: `url("https://i.ibb.co/LgkXpNP/banner-bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="min-h-screen"
      >
        <NavBar />
        <img src="./assets/img/banner-bg.png" alt="" />
        <Banner />
        <Skills />
        <Experience />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
