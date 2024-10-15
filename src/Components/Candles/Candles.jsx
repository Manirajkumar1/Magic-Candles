import React from "react";
import img1 from "../../assets/img/produkt1.webp";
import img2 from "../../assets/img/produkt2.webp";
import img3 from "../../assets/img/produkt3.webp";
import img4 from "../../assets/img/produkt4.webp";
import img5 from "../../assets/img/produkt5.webp";
import img6 from "../../assets/img/produkt6.webp";

const ProductData = [
  {
    id: 1,
    img: img1,
    title: "Sunshine Fragrance Candle",
    Price: "10 USD",
  },
  {
    id: 2,
    img: img2,
    title: "Verbena Fragrance Candle",
    Price: "10 USD",
  },
  {
    id: 3,
    img: img3,
    title: "Fragrance Candle For Sleep",
    Price: "10 USD",
  },
  {
    id: 4,
    img: img4,
    title: "Fruit Fragrance Candle",
    Price: "10 USD",
  },
  {
    id: 5,
    img: img5,
    title: "Sea Fragrance Candle",
    Price: "10 USD",
  },
  {
    id: 6,
    img: img6,
    title: "Relaxation Fragrance Candlee",
    Price: "10 USD",
  },
];

const Candles = () => {
  return (
    <div className="p-10 mb-20">
      <div className="flex justify-center mb-6">
        <h1 className="text-[30px] font-semibold ">
          Our Candle <br /> <span className="text-stone-600 ml-8">Magic</span>
        </h1>
      </div>
      {/* product  */}
      <div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
          {/* card section  */}
          {ProductData.map((data) => (
            <div key={data.id}>
              <img
                src={data.img}
                alt=""
                className="h-[300px] w-[300px] object-cover"
              />

              <div className="flex flex-col justify-center">
                <h3 className="flex justify-center items-center font-medium">
                  {data.title}
                </h3>
                <p className="flex justify-center items-center">{data.Price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candles;
