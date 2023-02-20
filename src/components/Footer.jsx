import React from "react";
import logo from "../assets/logow.svg";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";

const Footer = () => {
  return (
    <div classNameName="max-w-[1140px] w-full py-8 m-auto border-t-4 bottom-0">
      <footer className="p-4 bg-gray-800 shadow md:px-6 md:py-8">
        <div className="sm:flex sm:items-center  sm:justify-between">
          <div className="mx-6">
            <img src={logo} alt="" className="w-25 h-9" />
          </div>
        </div>
        <hr
          className="my-6 border-gray-700 sm:mx-auto 
       lg:my-8"
        />
      </footer>
    </div>
  );
};

export default Footer;
