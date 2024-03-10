import React from "react";
import { useSelector } from "react-redux";

function App() {
  const cartList = useSelector((state) => state.cartList);

  return (
    <div>
      {cartList?.map(({ id, quantity }) => {
        return (
          <p key={id}>
            Id:{id} Quantity:{quantity}
          </p>
        );
      })}
    </div>
  );
}

export default App;
