import React from "react";
import img1 from "../assets/about1.jpg";
import img2 from "../assets/about2.jpg";
import img3 from "../assets/about3.jpg";
import img4 from "../assets/about4.jpg";
import img5 from "../assets/about5.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-[1140px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4"
    >
      {/* Left Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">Kolaylık tek tıkta</h3>
        <p className="text-2xl py-6">
          30 yılı aşkın gemi ve tekne sektöründeki tecrübemizi sizinle
          paylaşıyoruz.
        </p>
        <p className="pb-6">
          Bir Tekne sahibi olarak yaşadığınız problemleri biliyoruz. Merkezimiz
          Marmaris olmakla birlikte, İstanbul ve İzmir ofislerimiz sayesinde
          tekne bakımlarında oluşacak yedek parça ve işciliklerde tatil
          beldelerinin fiyatlarına maruz bırakmıyor, teslimat zincirimiz ile
          hızlı çözümler üretiyoruz.
        </p>
        <div>
          <button className="bg-blue-600 text-white border py-2 px-3 hover:shadow-xl">
            <a href="/contact">Bize Ulaşın</a>
          </button>
        </div>
      </div>
      {/* Right Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={img1}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={img2}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={img3}
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src={img4}
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src={img5}
          alt="/"
        />
      </div>
    </div>
  );
};

export default About;
