import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SocialLinks from "./components/SocialLinks";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ParticlesComponent from "./components/particles"; // ✅ Make sure file name matches exactly

function App() {
  return (
    <div className="relative">
      
      <ParticlesComponent id="tsparticles" />

      
      <Navbar />
      <Home />
      <SocialLinks />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
