import React from "react";
import banner from "../../images/cardimg2.png";
import "./style.css";
import Button from "../../commen coponet/botton/botton";
import Arrow from "../../images/icons/Aerrow.png";
import cardimg1 from "../../images/cardimg1.png";
import cardimg2 from "../../images/Image2.png";
import Cardimg from "../../commen coponet/cardimages/cardimg";
import Fruits from "../../images/Fruits.png";
import icon_1 from "../../images/icons/Orange 1.png";
import icon_2 from "../../images/icons/Orange 2.png";
import Card1 from "../../commen coponet/card_product/Card1";
import { card2 } from "../../commen coponet/Datall/Data";
import Slider1 from "../..//commen coponet/Slider/slider1";
import Counter from "../../commen coponet/Counter raund/counter";

import section_7img from "../../images/Netureimgsec_7.jpg";
import section_8img1 from "../../images/sec_8img1.jpg";
import section_8img2 from "../../images/sec_8_img2.jpg";
import section_8img3 from "../../images/sec_8_img3.jpg";
import section_9img1 from "../../images/sec_9img1.png";
import section_9img2 from "../../images/sec_9img2.png";
import Card3 from "../../commen coponet/Cardproduct3/Card3";
import Subscribe from "../../commen coponet/Subscribe/Subscribe";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleon = () => {
    window.scrollTo({
    top: 0,
    behavior: 'smooth', 
  });
    navigate("/shop_singel");
  };

  const handeshop = () => {
    navigate("./shop");
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  };

  const card1 = [
    {
      img: cardimg1,
      title: "Natural!!",
      heading: "Get Garden Fresh Fruits",
      color: "white",
      headcolor: "white",
    },
    {
      img: cardimg2,
      title: "Offer!!",
      heading: "Get 10% Off on Vegetables",
      color: "#7EB693",
      headcolor: "#274C5B",
    },
  ];

  const counter = [
    {
      counter: "100%",
      name: "Orgaanic",
    },
    {
      counter: "285",
      name: "Active Produts",
    },
    {
      counter: "350+",
      name: "Organic Orchads",
    },
    {
      counter: "25+",
      name: "Years of Farming",
    },
  ];

  return (
    <>
      <div className="main">
        <div className="section-1">
          <div className="bog_img">
            <div className="relative ad">
              <img src={banner} className="banner" alt="Natural Food Banner" />
              <div className="banner_inner">
                <div>
                  <p className="title_food mb-0">100% Natural Food</p>
                  <h2 className="title_life">
                    Choose the best healthier way of life
                  </h2>

                  <Button
                    style={"#EFD372"}
                    name={"Explore Now"}
                    color={"#274C5B"}
                    icon={Arrow}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="section_2">
          <div className="container">
            <div className="row">
              {card1.map((item, index) => (
                <div className="col-md-6" key={index}>
                  <Cardimg card={item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section_3">
          <div className="margin_sec_3">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <img src={Fruits} className="fruits_img" alt="" />
                </div>
                <div className="col-md-6">
                  <div className="dummy_text_main">
                    <p className="section_3_about mb-0">About Us</p>
                    <h2 className="color font_family_roboto Farmers">
                      We believe in Working Accredited Farmers
                    </h2>
                    <p className="dummy_text mb-4">
                      Simply dummy text of the printing and typesetting
                      industry. Lorem has been the industry standard dummy text
                      since 1500s.
                    </p>
                    <div className="gap-4 mb-3 vo">
                      <div className="icon_1 d-flex justify-content-center align-items-center">
                        <img
                          src={icon_1}
                          style={{ width: "53px", height: "46px" }}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="color font_family_roboto font_weight mb-0">
                          Organic Foods Only
                        </h3>
                        <p className="dummy_text2">
                          Simply dummy text of the printing and typesetting
                          industry.
                        </p>
                      </div>
                    </div>
                    <div className="gap-4 mb-4 vo">
                      <div className="icon_1 d-flex justify-content-center align-items-center">
                        <img
                          src={icon_2}
                          style={{ width: "53px", height: "46px" }}
                          alt=""
                        />
                      </div>
                      <div>
                        <h3 className="color font_family_roboto font_weight mb-0">
                          Quality Standards
                        </h3>
                        <p className="dummy_text2">
                          Simply dummy text of the printing and typesetting
                          industry.
                        </p>
                      </div>
                    </div>
                    <div onClick={handeshop}>
                      <Button
                        style={"#274C5B"}
                        name={"Shop Now"}
                        font={"700"}
                        color={"white"}
                        icon={Arrow}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_4">
          <div className="container">
            <div>
              <p className="card_Categories mb-0">Categories</p>
              <h1 className="color font_family_roboto font_weight Products mb-4">
                Our Products
              </h1>
            </div>
            <div className="row">
              {card2.slice(0, 8).map((item2, index) => (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-3 mt-3"
                  key={index}
                >
                  <Card1 Card2={item2} />
                </div>
              ))}
            </div>
            <div className="load_btn text-center mt-4" onClick={handleon}>
              <Button
                style={"#274C5B"}
                name={"Load More"}
                font={"700"}
                color={"white"}
                icon={Arrow}
              />
            </div>
          </div>
        </section>

        <section className="section_5">
          <div className="container">
            <div className="heading_main">
              <div className="">
                <p className="sec5_heading mb-0">Testimonial</p>
                <h1 className="sec5_heading2 color font_weight mb-4">
                  What Our Customer Saying?
                </h1>
              </div>
              <div>
                <Slider1 />
              </div>
              <div className="border_1"></div>
              <div className="row main_row">
                {counter.map((item3) => (
                  <div className="col-12 col-sm-6 col-md-4 col-lg-3 main_counter">
                    <Counter counter1={item3} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section_6">
          <div className="bg-color sec-6_main">
            <div className="container">
              <div className="d-flex flex-column flex-md-row justify-content-between produts_main mb-4">
                <div className="vd">
                  <p className="offer mb-0">Offer</p>
                  <h1 className="text-white font_family_roboto">
                    We Offer Organic For You
                  </h1>
                </div>
                <div className="product mt-3 mt-md-0" onClick={handeshop}>
                  <Button
                    style={"#EFD372"}
                    name={"View More Product"}
                    font={"700"}
                    color={"#274C5B"}
                    icon={Arrow}
                    class={"products_btn"}
                  />
                </div>
              </div>
              <div className="row">
                  {card2.slice(12).map((item4) => (
                    <div
                      className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4"
                      key={item4.id}
                    >
                      <Card1 Card2={item4} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section_7 w-100">
          <div className="row m-0">
            <div className="col-md-6 p-0">
              <div className="right_img">
                <img
                  className="w-100"
                  src={section_7img}
                  alt="Econis Organic Store"
                />
              </div>
            </div>
            <div className="col-md-6 d-flex align-items-center rrr">
              <div className="eco_main">
                <div className="heading mb-4">
                  <p className="Eco_Friendly mb-0">Eco Friendly</p>
                  <h1 className="font_family_roboto font_weight color store">
                    Econis is a Friendly Organic Store
                  </h1>
                </div>
                <div>
                  <h5 className="font_family_roboto color mb-0">
                    Start with Our Company First
                  </h5>
                  <p className="points">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
                <div>
                  <h5 className="font_family_roboto color mb-0">
                    Learn How to Grow Yourself
                  </h5>
                  <p className="points">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
                <div>
                  <h5 className="font_family_roboto color mb-0">
                    Farming Strategies of Today
                  </h5>
                  <p className="points">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremque laudantium. Sed ut perspiciatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_8">
          <div className="bg_sec_8">
            <div className="row m-0">
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="gallery_1">
                  <img src={section_8img1} className="w-100" alt="" />
                  <div className="organic color">Organic Juice</div>
                </div>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <div className="gallery_1">
                  <img src={section_8img2} className="w-100" alt="" />
                  <div className="organic color">Organic Food</div>
                </div>
              </div>
              <div className="col-md-4 col-sm-12">
                <div className="gallery_1">
                  <img src={section_8img3} className="w-100" alt="" />
                  <div className="organic color">Nuts Cookies</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section_9">
          <div className="container">
            <div className="heading mb-4">
              <h2 className="news">News</h2>
              <div className="d-flex flex-column flex-md-row align-items-center justify-content-between">
                <h1 className="font_family_roboto color heading_text">
                  Discover weekly content about organic food, & more
                </h1>
                <div className="sec_9_btn" onClick={handeshop}>
                  <Button
                    style={"white"}
                    name={"Shop Now"}
                    font={"700"}
                    color={"#274C5B"}
                    border={"1px solid #274C5B"}
                    icon={Arrow}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 mb-11">
                <Card3 src={section_9img2} />
              </div>
              <div className="col-md-6 col-12 mb-11">
                <Card3 src={section_9img1} />
              </div>
            </div>
          </div>
        </section>

        <section className="section_10">
          <div className="container">
            <Subscribe />
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
