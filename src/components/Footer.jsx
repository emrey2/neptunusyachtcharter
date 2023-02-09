import React from "react";
import logo from "../assets/logow.svg";

const Footer = () => {
  return (
    <div classNameName="max-w-[1140px] w-full py-8 m-auto border-t-4 bottom-0">
      <footer className="p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="mx-6">
            <img src={logo} alt="" className="w-25 h-9" />
          </div>

          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Gizlilik Politikası
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Lisanslama
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Bize Ulaşın
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      </footer>
    </div>
  );
};

export default Footer;
