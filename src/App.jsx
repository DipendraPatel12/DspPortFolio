import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Scene3D from "./components/Scene3D";

const App = () => {
  return (
    <>
      <Scene3D />
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16 relative z-10">
        <Navbar />
        <Hero />
        <Tech />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
