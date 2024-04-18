import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <section className="banner-background relative lg:min-h-[600px] min-h-[250px]">
        <Navbar />
        <Hero />
      </section>
      <AboutMe />
      <Skills />
    </>
  );
}

export default App;
