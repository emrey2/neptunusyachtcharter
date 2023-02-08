import React from "react";

import Card from "../components/Card";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

const Gallery = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="grid my-16 grid-cols-2 mx-[2rem] mt-32 md:grid-cols-3 gap-x-16 gap-y-16">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;
