import Image from "next/image";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm:h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/about-img.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 ">
          <Title addClass="text-[40px]">~ BigBoss Ailesi ~</Title>
          <p className="my-5 flex flex-col items-center">
            Biz, sadece bir restoran değil, aynı zamanda bir lezzet macerasıyız.
            Hızlı tempolu yaşamın içinde, lezzetli bir mola arayan herkes için
            buradayız. Kaliteli ve özenle seçilmiş malzemelerle hazırladığımız
            yemeklerimiz, her damak tadına hitap ederken, hızlı servis
            anlayışımız da zamanınızı en iyi şekilde değerlendirmenizi sağlıyor.
            Biz, sadece yemek sunmuyor, aynı zamanda bir deneyim sunuyoruz. Siz
            değerli müşterilerimizi ağırlamaktan büyük mutluluk duyuyor ve her
            birinize özel bir lezzet yolculuğu sunmayı amaçlıyoruz. Gelip bizi
            deneyin, bizden ayrılırken yüzünüzde bir gülümseme ve midenizde
            tatlı bir tat olsun! Hemen sipariş verin ve bu lezzet dolu maceraya
            katılın!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
