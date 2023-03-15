import React from "react";
import { GoTools } from "react-icons/go";
import { FaCalendarAlt, FaAnchor } from "react-icons/fa";
import {
  GiCargoShip,
  GiKnifeFork,
  GiCaptainHatProfile,
  GiIBeam,
} from "react-icons/gi";
import { MdOutlineSailing } from "react-icons/md";
import { BsGearFill } from "react-icons/bs";

const AllInOne = () => {
  return (
    <div id="services" className="w-full my-32">
      <div className="max-w-[1140px] mx-auto px-2">
        <h2 className="text-5xl font-bold text-center">Servislerimiz</h2>
        <p className="text-2xl py-8 text-gray-500 text-center">
          Sektör devi firmalarla güçlü ilişkilerimiz sayesinde sizin ve
          teknenizin her ihtiyacı, uygun fiyatlara sizle buluşturuyoruz
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          <div className="bg-white rounded-md shadow-md p-6">
            <div className="flex items-center mb-4">
              <GiCargoShip size={36} className="text-blue-500 mr-4 w-7" />
              <a href="/contact" className="text-lg font-semibold">
                Yat Taşıma
              </a>
            </div>
            <p className="text-gray-600">
              Interdolphin ve önerilen yat taşıma fırmaları ile
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaCalendarAlt size={36} className="text-blue-500 mr-4 w-7" />
              <a href="/contact" className="text-lg font-semibold">
                Yıllık Bakımlar
              </a>
            </div>
            <p className="text-gray-600">
              Zehirli Boya, Tik Bakımı, Pasta & Cila, Pervane ve Şaft Temizliği
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <div className="flex items-center mb-4">
              <GoTools size={36} className="text-blue-500 mr-4 w-7" />
              <a href="/contact" className="text-lg font-semibold">
                Tamir & Tadilat
              </a>
            </div>
            <p className="text-gray-600">
              Hasar Onarım, Gelcoat Tamiri, Boya, Döşeme İmalat, Refit,
              Elektrik, Makina Bakım ve Tamirat
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <div className="flex items-center mb-4">
              <FaAnchor size={36} className="text-blue-500 mr-4 w-7" />
              <a href="/contact" className="text-lg font-semibold">
                Marina Hizmetleri
              </a>
            </div>
            <p className="text-gray-600">
              Marmaris, Göcek, Fethiye, Kaş, Bodrum, İzmir, Yalova, İstanbul
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <div className="flex items-center mb-4">
              <MdOutlineSailing size={36} className="text-blue-500 mr-4 w-7" />
              <a href="/contact" className="text-lg font-semibold">
                Yat İşletme
              </a>
            </div>
            <p className="text-gray-600">
              Günlük, Haftalık, Sezonluk Charter İşletme. Charter sırası
              Müretterbat, Bağlama, Bakım ve Acentalık Servisi
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <div className="flex items-center mb-4">
              <GiKnifeFork size={36} className="text-blue-500 mr-4 w-7" />
              <a href="/contact" className="text-lg font-semibold">
                Erzak Teminatı
              </a>
            </div>
            <p className="text-gray-600">
              Charter ve Kişisel Teknelerin Haftalık Erzak ve İhtiyaç Teminatı
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <div className="flex items-center mb-4">
              <GiCaptainHatProfile
                size={36}
                className="text-blue-500 mr-4 w-7"
              />
              <a href="/contact" className="text-lg font-semibold">
                Mürettebat Teminatı
              </a>
            </div>
            <p className="text-gray-600">
              Charter ve Kişisel Teknlere Eğitimli Mürettebat Teminatı
            </p>
          </div>
          <div className="bg-white rounded-md shadow-md p-6">
            <div className="flex items-center mb-4">
              <BsGearFill size={36} className="text-blue-500 mr-4 w-7" />
              <a href="/contact" className="text-lg font-semibold">
                Yedek Parça
              </a>
            </div>
            <p className="text-gray-600">
              MTU, CAT, Volvo Penta, Cummins, Mercury Marine, Yamaha. Motor,
              Şanzuman ve Kuyruk bakımları.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
