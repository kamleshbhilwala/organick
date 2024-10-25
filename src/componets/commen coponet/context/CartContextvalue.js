import React, { useState } from "react";
import { CartContext } from "./CartContext";

const CartContextValue = ({ children }) => {
  const [userdata, setUserdata] = useState(50);

  return (
    <>
      <CartContext.Provider value={userdata}>{children}</CartContext.Provider>
    </>
  );
};

export default CartContextValue;
