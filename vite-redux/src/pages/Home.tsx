import React from "react";
import productData from "../assets/productData";

function Home() {
  return (
    <div className="px-20 pt-10 gap-3 flex justify-between w-full flex-wrap">
      {productData.map((productItem) => (
        <div
          className="bg-slate-200/20 w-[350px] p-5 rounded"
          key={productItem.id}
        >
          <img
            className="object-cover w-[250px] h-[250px]"
            src={productItem.image}
            alt={productItem.image + productItem.id}
          />

          <div>
            <h1 className="text-2xl font-medium pt-2">{productItem.title}</h1>
            <p>{productItem.description.substring(0, 10)}</p>
            <button className="w-[50%] bg-black font-bold text-white py-2">
              add to cart
            </button>
            <button className="w-[50%] bg-blue-700 font-bold text-white py-2">
              buy now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
