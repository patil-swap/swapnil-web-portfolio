import About from "./components/About";
import BlurBackground from "./components/BlurBackground";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Insight from "./components/Insight";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Insight />
      </main>
    </>
  );
}

export default App;
