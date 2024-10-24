import React, { useState } from "react";
import "./Shop_singel.css";
import star from "../../../images/Star.png";
import Button from "../../../commen coponet/botton/botton";
import Arrow from "../../../images/icons/Aerrow.png";
import { card2 } from "../../../commen coponet/Datall/Data";
import Card1 from "../../../commen coponet/card_product/Card1";
import Subscribe from "../../../commen coponet/Subscribe/Subscribe";
import { useNavigate } from "react-router-dom";

function Shop_singel() {
  const data = JSON.parse(localStorage.getItem("selectitem"));
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const handleClick = (item) => {
    navigate("/shop_singel");    
    localStorage.setItem("selectitem", JSON.stringify(item));
    console.log(item);
  };

  const Addcard = () => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const itemIndex = cartItems.findIndex((item) => item.title === data.title);

    if (itemIndex !== -1) {
      cartItems[itemIndex].quantity += quantity;
    } else {
      cartItems.push({ ...data, quantity });
    }
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    navigate("/total");
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  
  };

  return (
    <>
      <section className="shop_p1_sec_1">
        <div className="bg_img d-flex align-items-center justify-content-center">
          <h1 className="color font_weigth font_family_roboto text-center">
            Shop Single
          </h1>
        </div>
      </section>
      <section className="shop_p1_sec_2">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="box d-flex align-items-center justify-content-center">
                <img src={data.Cardimg} className="w-80 img1" alt={data.title} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="left_main1">
                <h2 className="color font_weigth font_family_roboto mb-0">
                  {data.title}
                </h2>
                <img src={star} className="mb-2" alt="Star Rating" />
                <div className="d-flex gap-2 mb-4">
                  <strike>{data.price}</strike>
                  <span className="color font_family_roboto font_weigth">
                    ${data.currentP}
                  </span>
                </div>
                <p className="dummy_text">
                  Simply dummy text of the printing and typesetting industry...
                </p>
                <div className="d-flex align-items-center iii">
                  <h5 className="color font_weigth font_family_roboto">
                    Quantity :
                  </h5>
                  <input
                    type="number"
                    className="btn color bttn font_family_roboto font_weigth"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min="1"
                  />
                  <div onClick={Addcard}>
                    <Button
                      style={"#274C5B"}
                      name={"Add To Cart"}
                      color={"white"}
                      font={"600"}
                      icon={Arrow}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex button_main mb-4 align-items-center justify-content-center gap-3 iii">
            <Button
              style={"#274C5B"}
              name={"Product Description"}
              color={"white"}
              font={"600"}
            />
            <Button
              style={"#EFF6F1"}
              name={"Additional Info"}
              color={"#274C5B"}
              font={"700"}
            />
          </div>
          <p className="dummy_text1 text-center">
            Welcome to the world of natural and organic...
          </p>
        </div>
      </section>

      <section className="shop_p1_sec_3">
        <div className="container">
          <h1 className="color mb-4 font_weigth font_family_roboto text-center">
            Related Products
          </h1>
          <div className="row">
            {card2
              .filter((item) => item.Cardimg !== data.Cardimg)
              .slice(0, 4)
              .map((item2) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                  onClick={() => handleClick(item2)}
                  key={item2.title}
                >
                  <Card1 Card2={item2} />
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="section_10 container">
        <Subscribe />
      </section>
    </>
  );
}

export default Shop_singel;
