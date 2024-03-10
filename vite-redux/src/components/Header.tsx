import React from "react";
import { FiShoppingCart } from "react-icons/fi";

function Header() {
  return (
    <div className=" py-5 px-20 font-medium flex items-center justify-between bg-slate-50 shadow">
      <h1 className="text-3xl">CartLogo</h1>
      <div className="relative">
        <FiShoppingCart className="text-3xl"></FiShoppingCart>
        <p className="absolute -top-4 -right-3 rounded-full items-center justify-center flex text-[18px]">
          0
        </p>
      </div>
    </div>
  );
}

export default Header;
