import React from "react";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import logo from "../assets/logow.svg";

const TopBar = () => {
  return (
    <div className="flex justify-between bg-gray-800 items-center px-4 py-2">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-25 h-9" />
      </div>
      <div className="flex text-white">
        <div className="hidden md:flex items-center px-6">
          <FiMapPin size={20} className="mr-2 " />
          <p className="text-sm ">Tepe Mah. Barbaros Cd. Marmaris/Turkey</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiOutlinePhone size={20} className="mr-2 " />
          <p className="text-sm ">+90 (542) 716 3010</p>
        </div>
        <div className="hidden md:flex items-center px-6">
          <AiOutlineMail size={20} className="mr-2 " />
          <p className="text-sm ">Charter@neptunusyacht.net</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
