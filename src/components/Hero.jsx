import React from "react";
import heroVid from "../assets/video/hero.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen" name="hero">
      <video
        autoPlay
        loop
        muted
        className="top-0 left-0 w-full h-screen object-cover"
        src={heroVid}
        alt="/"
      />

      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>Bir Ömür Boyu Maceraya Yelken Açın</p>
          <h1 className="font-bold text-4xl md:text-7xl drop-shadow-2xl">
            AL-SAT-KİRALA
          </h1>
          <button className="bg-white text-black mt-8 py-2 px-3 hover:shadow-xl">
            <a href="/gallery">Göz Atın</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
