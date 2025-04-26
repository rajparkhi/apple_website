import Hero from "./components/Hero";
import HightLights from "./components/HightLights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HightLights />
      <Model />
    </main>
  );
};

export default App;
