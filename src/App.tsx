import Navbar from "./components/Navbar/Navbar";

import "./App.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <>
      <section className="banner-background relative lg:min-h-[600px]">
        <Navbar />
        <Hero />
      </section>
    </>
  );
}

export default App;
