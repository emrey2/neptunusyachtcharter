import React from "react";

import heroVid from "../assets/video/hero.mp4";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <video
        className="w-full h-full object-cover"
        src={heroVid}
        autoPlay={true}
        loop={true}
        controls={false}
        playsInline
        muted
        type="video/mp4"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20"></div>
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h2 className="sm:text-7xl outlineh1 text-5xl py-4 italic font-extrabold text-[#00234D] drop-shadow-lg shadow-[#DAAF00]">
            AL - SAT - KİRALA
          </h2>
          <h1 className="font-bold sm:text-2xl text-xl">
            Bir Ömür Boyu Maceraya Yelken Açın
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
