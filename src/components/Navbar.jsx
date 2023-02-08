import React from "react";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import logo from "../assets/logow.svg";

const Navbar = () => {
  return (
    <div className="h-20 w-full z-20 absolute flex items-center justify-between bg-[#191970]">
      <div className="mx-6">
        <img src={logo} alt="" className="w-25 h-9" />
      </div>

      <div>
        <ul className="flex text-white font-semibold">
          <li className="mx-2 text-sm">
            <a href="/" className="cursor-pointer">
              Anasayfa
            </a>
          </li>
          <li className="mx-2 text-sm">
            <a href="#about" className="cursor-pointer">
              Hakkımızda
            </a>
          </li>
          <li className="mx-2 text-sm">
            <a href="#services" className="cursor-pointer">
              Servislermiz
            </a>
          </li>
          <li className="mx-2 text-sm">
            <a href="/gallery" className="cursor-pointer">
              Galeri
            </a>
          </li>
          <li className="mx-2 text-sm">
            <a href="/contact" className="cursor-pointer">
              Bize Ulaşın
            </a>
          </li>
        </ul>
      </div>

      <div>
        <div className="flex p-2  text-white text-semibold">
          <div className="flex flex-col  items-center">
            <AiOutlineMail size={12} />
            <p className="my-2 text-[8px]">Neptunus@gmail.com</p>
          </div>
          <div className="mx-4 flex flex-col  items-center">
            <FiMapPin size={12} />
            <p className="my-2 text-[8px]">
              Tepe Mah. Barbaros Cd. Marmaris/Turkey
            </p>
          </div>
          <div className="flex flex-col items-center mr-4">
            <AiOutlinePhone size={12} />
            <p className="my-2 text-[8px]">+90 (542) 716 3010</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
