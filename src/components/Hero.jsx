import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import heroImg from "../assets/die.jpg";

const Hero = () => {
  return (
    <div className="w-full h-[70vh] relative">
      <img className="w-full h-full object-cover" src={heroImg} />
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/20"></div>
      <div className="max-w-[1140px] m-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
          <h2 className="sm:text-7xl outlineh1 text-5xl py-4 italic font-extrabold shadow-[#00234D] drop-shadow-lg text-[#daae00]">
            AL - SAT - KİRALA
          </h2>
          <h1 className="font-bold tracking-wide sm:text-2xl text-xl">
            Marin İhtiyaçlarınız Tek Adreste
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
