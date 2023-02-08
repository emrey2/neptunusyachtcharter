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
          <h1 className="font-bold text-3xl md:text-3xl drop-shadow-2xl">
            İster sevdiklerinizle samimi bir kaçamak, ister arkadaşlarınız ve
            ailenizle unutulmaz bir tatil arıyor olun, sizin için mükemmel
            gemimiz var.
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Her biri en son olanaklar ve teknolojilerle donatılmış geniş yat
            seçeneklerimizle, ihtiyaçlarınıza göre tamamen özelleştirilmiş bir
            yelken deneyiminin keyfini çıkarabilirsiniz. Nefes kesen gün
            batımlarından nefes kesen deniz manzaralarına kadar yolculuğunuzun
            her anı unutulmaz olacak.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
