import React, { useState, useEffect } from "react";
import "./Total.css";
import Button from "../../commen coponet/botton/botton";
import Arrow from "../../images/icons/Aerrow.png";

const Total = () => {
  const [cartItems, setCartItems] = useState(() => {

    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const calculateSubtotal = () =>
    cartItems.reduce((total, { currentP, quantity = 1 }) => total + currentP * quantity, 0);

  const updateQuantity = (index, newQuantity) => {
    setCartItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems[index].quantity = newQuantity;
      return updatedItems;
    });
  };

  const removeItem = (index) => {
    setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <section className="total_sec_1">
      <div className="container">
        <div className="row border-bottom mb-5">
          <div className="col-lg-8">
            {cartItems.map(({ Cardimg, title, currentP, quantity = 1 }, index) => (
              <div className="row" key={index}>
                <div className="col-lg-5">
                  <img src={Cardimg} className="ig" alt="Product" />
                </div>
                <div className="col-lg-5 mt-5">
                  <h2 className="color font_family_roboto">{title}</h2>
                  <p className="color mb-2 font_family_roboto fs-5">${currentP} USD</p>
                </div>
                <div className="col-lg-2 mt-5">
                  <input
                    type="number"
                    className="total_input"
                    value={quantity}
                    onChange={(e) => updateQuantity(index, Number(e.target.value))}
                    min="1"
                    style={{ width: "60px" }}
                  />
                  <button className="btn btn-danger mt-2" onClick={() => removeItem(index)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex justify-content-around">
          <p className="color fs-3 font_family_roboto">Sub Total</p>
          <h4 className="color font_family_roboto">${calculateSubtotal().toFixed(2)} USD</h4>
        </div>
        <div className="text-center">
          <Button
            style={"#274C5B"}
            name={"Continue To Checkout"}
            font={"700"}
            color={"white"}
            icon={Arrow}
          />
        </div>
      </div>
    </section>
  );
};

export default Total;
