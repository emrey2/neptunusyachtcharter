import React, { useState } from "react";
import { data } from "../data/data.jsx";

const Category = () => {
  //   console.log(data);
  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };
  return (
    <div className="max-w-[1640px] m-auto  px-4 py-12">
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row mt-32 items-center">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-gray-700">Filtreler</p>
          <div className="flex justfiy-between items-center flex-wrap">
            <button
              onClick={() => setFoods(data)}
              className="m-1 border-blue-600 text-blue-600"
            >
              Hepsi
            </button>
            <button
              onClick={() => filterType("yat")}
              className="m-1 border-blue-600 text-blue-600"
            >
              Yat
            </button>
            <button
              onClick={() => filterType("motor")}
              className="m-1 border-blue-600 text-blue-600"
            >
              Motor
            </button>
            <button
              onClick={() => filterType("araba")}
              className="m-1 border-blue-600 text-blue-600"
            >
              Araba
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 mt-16 gap-6 pt-4">
        {foods.map((item, index) => (
          <a href="">
            <div
              key={index}
              className="border shadow-lg rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-t-lg"
              />
              <div className="flex justify-between px-2 py-4">
                <p className="font-bold">{item.name}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Category;
