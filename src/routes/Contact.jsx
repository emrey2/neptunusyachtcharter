import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TopBar from "../components/Topbar";

const Contact = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <section className="text-gray-700 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Bize Ulaşın
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Sorularınız, yorumlarınız veya endişeleriniz için lütfen bize
              ulaşın. Özel destek ekibimiz size yardımcı olmak için burada.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    İsim
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div>
                <form className="w-full">
                  <div className="flex flex-col my-2">
                    <label>Almak İstediğiniz Hizmet</label>
                    <select className="border rounded-md p-2">
                      <option>Yat Taşıma</option>
                      <option>Yıllık Bakımlar</option>
                      <option>Tamir & Tadilat</option>
                      <option>Marina Hizmetleri</option>
                      <option>Yat İşletme</option>
                      <option>Erzak Teminatı</option>
                      <option>Mürettebat Teminatı</option>
                      <option>Yedek Parça</option>
                    </select>
                  </div>
                </form>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  GÖNDER
                </button>
              </div>
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-indigo-500">Neptunus@gmail.com</a>
                <p className="leading-normal my-5">
                  Tepe Mah. Barbaros Cd.
                  <br />
                  Marmaris/Turkey
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
