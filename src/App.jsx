import React from "react";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AllInOne from "./components/AllInOne";
import Footer from "./components/Footer";
import TopBar from "./components/Topbar";

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Hero />
      <About />
      <AllInOne />
      <Footer />
    </div>
  );
}

export default App;
