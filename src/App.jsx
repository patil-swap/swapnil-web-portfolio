import About from "./components/About";
import BlurBackground from "./components/BlurBackground";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <BlurBackground />
      <Navbar />
      <main className="antialiased max-w-7xl mx-auto relative z-10">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Contacts />
      </main>
    </>
  );
}

export default App;
