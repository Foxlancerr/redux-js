import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useSelector } from "react-redux";

function Header() {
  const cartList = useSelector(state => state?.cartList)
  console.log(cartList)
  return (
    <div className=" py-5 px-20 font-medium flex items-center justify-between bg-slate-50 shadow">
      <h1 className="text-3xl">CartLogo</h1>
      <div className="relative">
        <FiShoppingCart className="text-3xl"></FiShoppingCart>
        <p className="absolute -top-4 -right-3 rounded-full items-center justify-center flex text-[18px]">
          {cartList.length}
        </p>
      </div>
    </div>
  );
}

export default Header;
