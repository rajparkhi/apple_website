import Hero from "./components/Hero";
import HightLights from "./components/HightLights";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <HightLights />
    </main>
  );
};

export default App;
