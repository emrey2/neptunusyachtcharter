import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AllInOne from "./components/AllInOne";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <AllInOne />
      <Footer />
    </div>
  );
}

export default App;
