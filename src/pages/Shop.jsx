import React, { useEffect, useState } from "react";
import userShopStore from "../store/userShopStore";

const Shop = () => {
  const { products } = userShopStore();
  const [activeIndex, setActiveIndex] = useState(0);
  const displayCount = 3; // Number of products to show in the slideshow
  const featuredProducts = products.slice(0, displayCount);

  // Auto-slide functionality for the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex === displayCount - 1 ? 0 : prevIndex + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-10 px-4 space-y-12">
      {/* Featured Product Slideshow */}
      <div className="max-w-xl mx-auto mb-10">
        {featuredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`transition-opacity slideShowSection duration-700 ${activeIndex === index ? 'opacity-100' : 'opacity-0'} ${activeIndex === index ? 'flex' : 'hidden'} flex-col items-center border border-gray-200 rounded-lg shadow-lg pb-6 bg-white transform transition-transform duration-500 hover:scale-105`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[250px] object-cover shadow-md  rounded-t-lg"
            />
            <h2 className="text-2xl font-semibold mt-4 text-gray-800">{product.name}</h2>
            <p className="text-lg text-gray-600 mt-2">Price: <span className="font-bold text-gray-800">${product.price}</span></p>
            {/* <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-8 rounded-lg shadow-md transition-transform transform hover:scale-105">
              Order Now
            </button> */}
          </div>
        ))}

        {/* Slideshow Navigation Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {featuredProducts.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${activeIndex === index ? 'bg-blue-500' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>

      {/* All Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center border border-gray-100 rounded-lg shadow-lg pb-6 bg-white transition-transform duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[220px] object-cover rounded-t-lg shadow-md"
            />
            <h2 className="text-lg font-semibold mt-4 text-gray-800">{product.name}</h2>
            <p className="text-md text-gray-600 mt-1">Price: <span className="font-bold text-gray-800">${product.price}</span></p>
            {/* <button className="mt-5 bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105">
              Order Now
            </button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
