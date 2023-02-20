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
          <div className="flex">
            <div>
              <GiCargoShip size={36} className="text-blue-500 mr-4 w-7" />
            </div>
            <div>
              <a
                href="/contact"
                className="font-bold text-lg cursor-pointer hover:text-blue-600"
              >
                Yat Taşıma
              </a>
              <p className="text-lg pt-2 pb-4">
                Neptunus olarak, yat taşımacılığını güçlüklerden kurtarıyoruz.
                Uzman ekibimizle değerli geminizin istediğiniz yere güvenli ve
                verimli bir şekilde taşınacağından emin olabilirsiniz.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <FaCalendarAlt size={36} className="text-blue-500 mr-4 w-7" />
            </div>
            <div>
              <a
                href="/contact"
                className="font-bold text-lg cursor-pointer hover:text-blue-600"
              >
                Yıllık Bakımlar
              </a>
              <p className="text-lg pt-2 pb-4">
                Uzmanlardan oluşan ekibimiz, her şeyin sorunsuz çalıştığından
                emin olmak için teknenizin gövdesinden elektroniğine kadar her
                yönünü inceleyecektir. Ayrıca yatınızı en iyi durumda tutmak
                için gerekli onarımları veya değişimleri yapacağız.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <GoTools size={36} className="text-blue-500 mr-4 w-7" />
            </div>
            <div>
              <a
                href="/contact"
                className="font-bold text-lg cursor-pointer hover:text-blue-600"
              >
                Tamir & Tadilat
              </a>
              <p className="text-lg pt-2 pb-4">
                Neptunus olarak, yatınızı en iyi durumda tutmanın önemini
                anlıyoruz. Bu nedenle, kapsamlı onarım ve yenileme hizmetleri
                sunuyoruz. Uzman ekibimiz geminizi her yönüyle inceleyecek,
                sorunları tespit edecek ve eski ihtişamına kavuşturmak için
                gerekli onarımları yapacaktır. İster küçük bir onarım ister
                büyük bir revizyon olsun, ekibimiz işi bitirecektir.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <FaAnchor size={36} className="text-blue-500 mr-4 w-7" />
            </div>
            <div>
              <a
                href="/contact"
                className="font-bold text-lg cursor-pointer hover:text-blue-600"
              >
                Marina Hizmetleri
              </a>
              <p className="text-lg pt-2 pb-4">
                Neptunus olarak, yatınızı yanaştırmayı sorunsuz bir deneyim
                haline getiriyoruz. Bir rıhtım alanının güvenliğini sağlamaktan
                gerekli bakımın yapılmasına kadar, profesyonellerden oluşan
                ekibimiz her şeyi halledecektir.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <MdOutlineSailing size={36} className="text-blue-500 mr-4 w-7" />
            </div>
            <div>
              <a
                href="/contact"
                className="font-bold text-lg cursor-pointer hover:text-blue-600"
              >
                Yat İşletme
              </a>
              <p className="text-lg pt-2 pb-4">
                Neptunus olarak eksiksiz bir yat yönetim hizmetleri paketi
                sunuyoruz. Bakım ve onarımdan finansal planlama ve sigortaya
                kadar, uzman ekibimiz yat sahipliğinin her aşamasıyla
                ilgilenecek, böylece yatınızın keyfini hiçbir endişe duymadan
                çıkarabilirsiniz. Amacımız, size gönül rahatlığı ve zamanınızı
                sevdiğiniz şeyi yaparak geçirme
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <GiKnifeFork size={36} className="text-blue-500 mr-4 w-7" />
            </div>
            <div>
              <a
                href="/contact"
                className="font-bold text-lg cursor-pointer hover:text-blue-600"
              >
                Erzak Teminatı
              </a>
              <p className="text-lg pt-2 pb-4">
                Malzemelerinizin emniyetinin ve güvenliğinin son derece önemli
                olduğunu anlıyoruz. Bu nedenle, kapsamlı tedarik güvenliği
                hizmetleri sunuyoruz. Profesyonellerden oluşan ekibimiz,
                malzemelerinizin taşınmasını ve depolanmasını denetleyecek ve
                varış yerlerine iyi durumda ulaşmalarını sağlayacaktır. Yerleşik
                güvenlikten tesis dışı depolamaya kadar her konuda yanınızdayız.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <GiCaptainHatProfile
                size={36}
                className="text-blue-500 mr-4 w-7"
              />
            </div>
            <div>
              <a
                href="/contact"
                className="font-bold text-lg cursor-pointer hover:text-blue-600"
              >
                Mürettebat Teminatı
              </a>
              <p className="text-lg pt-2 pb-4">
                Neptuınus olarak, bir yat tatilinin önemli bir yatırım olduğunu
                anlıyoruz ve isteyebileceğiniz son şey beklenmedik maliyetler
                konusunda endişelenmek. Bu nedenle, kapsamlı mürettebat kapsamı
                sunuyoruz. Kendini işine adamış profesyonellerden oluşan
                ekibimiz, tekneye adım attığınız andan indiğiniz ana kadar
                seyahatinizin her aşamasının sorunsuz geçmesini sağlayacaktır.
              </p>
            </div>
          </div>
          <div className="flex">
            <div>
              <BsGearFill size={36} className="text-blue-500 mr-4 w-7" />
            </div>
            <div>
              <a
                href="/contact"
                className="font-bold text-lg cursor-pointer hover:text-blue-600"
              >
                Yedek Parça
              </a>
              <p className="text-lg pt-2 pb-4">
                Doğru yedek parçalara, ihtiyacınız olan her zaman ve her yerde
                erişmenin önemini anlıyoruz. Bu nedenle, birlikte kapsamlı bir
                yedek parça yelpazesi sunuyoruz. Profesyonellerden oluşan
                ekibimiz, yedek parçalarınızın zamanında teslim edilmesini
                sağlayacaktır, böylece yatınızı en iyi durumda tutabilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOne;
