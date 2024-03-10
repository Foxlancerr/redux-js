import React from "react";
import productData from "../assets/productData";

function Home() {
  return (
    <div className="px-20 pt-10 flex flex-wrap justify-between">
      {productData.map((product) => (
        <div className="bg-slate-200 w-96 p-5 mb-10">
          <div className="bg-red-400 w-full h-[250px] overflow-hidden">
            <img src={product.image} alt="product Image" className="object-fill w-auto" />
          </div>
          <div className="mt-2">
            <h1 className="text-2xl font-medium">{product.title}</h1>
            <p className="text-black/70">
              {product.description}
            </p>
            <div className="flex item-center gap-2">
              <p>Rating: {product.rating.rate}</p>
              <p>Price: ${product.price}</p>
            </div>
            <div className="flex gap-5 mt-2 w-full">
              <button className="bg-black text-white py-2 px-6 w-[50%]">
                Add to Cart
              </button>
              <button className="bg-blue-700 text-white py-2 px-6 w-[50%]">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Home;
