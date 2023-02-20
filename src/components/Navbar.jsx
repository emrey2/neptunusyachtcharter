import React, { useState } from "react";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="w-full min-h-[50px] flex sm:justify-between justify-end items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/" className="cursor-pointer">
            Anasayfa
          </a>
        </li>
        <li>
          <a href="#services" className="cursor-pointer">
            Servislerimiz
          </a>
        </li>
        <li>
          <a href="/gallery" className="cursor-pointer">
            Market
          </a>
        </li>
        <li>
          <a href="/contact" className="cursor-pointer">
            Bize Ulaşın
          </a>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div onClick={handleNav} className="sm:hidden z-10">
        <FaBars size={20} className=" cursor-pointer" />
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/" className="cursor-pointer">
              Anasayfa
            </a>
          </li>
          <li className="text-2xl py-8">
            <a href="#services" className="cursor-pointer">
              Servislerimiz
            </a>
          </li>
          <li className="text-2xl py-8">
            <a href="/gallery" className="cursor-pointer">
              Market
            </a>
          </li>
          <li className="text-2xl py-8">
            <a href="/contact" className="cursor-pointer">
              Bize Ulaşın
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
