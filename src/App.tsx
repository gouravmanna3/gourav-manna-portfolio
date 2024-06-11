import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Hero from "./components/Hero/Hero";
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience";
import Works from "./components/Works";
import Testimonials from "./components/Testimonials";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <>
      <section className="banner-background relative lg:min-h-[600px] min-h-[250px]">
        <Navbar />
        <Hero />
      </section>
      <AboutMe />
      <section className="skillsSection">
        <Skills />
      </section>
      <Experience />
      <Works />
      <Testimonials />
      <ContactMe />
      <footer className="bg-white shadow text-center dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            &copy; Copyright 2024{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Developed by Gourav with &#10084;
            </a>{" "}
            <a href="https://www.buymeacoffee.com/gouravmanna3">
              Buy me a coffee &#9749;
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
