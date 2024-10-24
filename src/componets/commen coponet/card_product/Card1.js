import React from "react";
import '../../../componets/pages/home/style.css'
import { useNavigate } from "react-router-dom";

function Card1({ Card2 }) {
  
  const navigate = useNavigate();
  

  const handleClick = (item) => {
    navigate("/shop_singel");
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
    localStorage.setItem("selectitem", JSON.stringify(item));
    console.log(item);
  };
  
  return (
    <>
      <div className="card_main mb-4  col-sm-6 col-lg-3 w-100">
        <div className="card_tag bg-color text-white mb-4">{Card2.Tages}</div>
        <div>
          <img
            className="cardimg img-fluid ratio ratio-4x3 mb-2"onClick={()=>handleClick(Card2)}
            src={Card2.Cardimg}
            alt=""
          />
        </div>
        <p className="color font_family_roboto card_title mb-2">
          {Card2.title}
        </p>
        <div className="border"></div>
        <div className="d-flex  justify-content-between d-block">
          <div className="gap-2 d-flex">
            <strike>{Card2.price}</strike>
            <span className="price_tag color">${Card2.currentP}</span>
          </div>
          <div className="star">
            <img alt="" src={Card2.Rating} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Card1;
