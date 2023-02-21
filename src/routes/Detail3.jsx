import React from "react";
import detailImg from "../assets/about1.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBar from "../components/Topbar";

const Detail = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <div
        id="about"
        className="max-w-[1140px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-32"
      >
        {/* Left Side */}
        <div className="grid  h-[80vh]">
          <img
            className="row-span-3 object-cover w-full h-full p-2"
            src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="/"
          />
        </div>
        {/* Right Side */}
        <div className="flex flex-col h-full justify-center">
          <h3 className="text-5xl md:text-6xl font-bold">LOREM</h3>
          <p className="text-2xl py-6"></p>
          <p className="pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at
            lorem lorem. Aenean et ligula sem. Aliquam in libero sagittis arcu
            rhoncus rhoncus vel et lorem. Nulla vulputate tellus non massa
            aliquam, at blandit sem viverra. Morbi lectus lorem, lobortis a
            hendrerit et.
          </p>
          <div>
            <button className="bg-blue-600 text-white border py-2 px-3 hover:shadow-xl">
              <a href="/contact">Bize Ulaşın</a>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
