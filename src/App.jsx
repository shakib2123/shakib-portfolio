import Banner from "./components/Banner";
import NavBar from "./components/NavBar";

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
      </div>
    </div>
  );
}

export default App;
