import React from "react";
import "./About.css";

import Sec_2_1 from "../../images/Image (1).png";
import Tactor from "../../images/icons/Tractor.png";
import Factory from "../../images/icons/Chemical Plant.png";
import Button from "../../commen coponet/botton/botton";
import img1 from "../../images/Photo.jpg";
import icon1 from "../..//images/icons/Return Purchase.svg";
import icon2 from "../../images/icons/Natural Food.svg";
import icon3 from "../../images/icons/Phone Time.svg";
import icon4 from "../../images/icons/Card Security.svg";
import expert1 from "../../images/Photo (1).jpg";
import expert2 from "../../images/Photo (2).jpg";
import expert3 from "../../images/Photo (3).jpg";
import Card from "../about/about_compo/Card";
import ExportCard from "../about/about_compo/ExportCard";
import insta from "../../images/icons/Instagram.png";
import face from "../../images/icons/facebook.png";
import twiter from "../../images/icons/Twiter.png";
import Arrow from "../../images/icons/Aerrow.png";
import Card2 from "./about_compo/Card2";
import  Spicy from "../../images/Photo (4).jpg"
import Nuts from "../../images/Photo (5).jpg"
import Vegetable from "../../images/Photo (6).jpg"
import Fruits from "../../images/Photo (7).jpg"
import Subscribe from "../../commen coponet/Subscribe/Subscribe"
const About = () => {
  const Card3 = [
    {
      icons: icon1,
      heading: "Return Policy",
      text: "Simply dummy text of the printintypesetting industry.",
    },
    {
      icons: icon2,
      heading: "100% Fresh",
      text: "Simply dummy text of the printintypesetting industry.",
    },
    {
      icons: icon3,
      heading: "Support 24/7",
      text: "Simply dummy text of the printintypesetting industry.",
    },
    {
      icons: icon4,
      heading: "Secured Payment",
      text: "Simply dummy text of the printintypesetting industry.",
    },
  ];

  const experts = [
    {
      img: expert1,
      heading: "Giovani Bacardo",
      job: "Farmer",
      instagram: insta,
      facebook: face,
      twiter: twiter,
    },
    {
      img: expert2,
      heading: "Marianne Loreno",
      job: "Designer",
      instagram: insta,
      facebook: face,
      twiter: twiter,
    },
    {
      img: expert3,
      heading: "Riga Pelore",
      job: "Farmer",
      instagram: insta,
      facebook: face,
      twiter: twiter,
    },
  ];
 
  const offer_card = [
    {
      img: Spicy,
      heading: "Spicy"
    },
    {
      img: Nuts,
      heading: "Nuts & Feesd"
    },
    {
      img: Vegetable,
      heading: "Fruits"
    },
    {
      img: Fruits,
      heading: "Vegetable"
    },
  ]
  return (
    <>
    
      <section className="about_sec_1">
          <div className="relative">
          <div className="bg_img">
            <div className="about">
              <h1 className="color vm">About Us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="about_sec_2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div>
                <img src={Sec_2_1} className="w-100" alt="" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="oj">
                <div className="heading">
                  <h2 className="About_head mb-1">About Us</h2>
                  <h1 className="color font_family_roboto font_weigth title">
                    We can do Creative Things for Success
                  </h1>
                </div>
                <div className="dummy_main mb-4">
                  <p className="dummy_text">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                  </p>
                  <p className="dummy_text">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley.
                  </p>
                </div>
                <div className="d-flex mb-4 main_icon">
                  <div className="fx gap-2">
                    <img src={Tactor} className="w-51 h-48 ic" alt="" />
                    <h5 className="color op ">
                      Modern Agriculture Equipment
                    </h5>
                  </div>
                  <div>
                    <div className="fx gap-2">
                      <img src={Factory} className="w-35 h-35 m-0 ic" alt="" />
                      <h5 className="color op m-0 ">
                        No growth hormones are used
                      </h5>
                    </div>
                  </div>
                </div>
                <Button
                  style={"#274C5B"}
                  name={"Explore More"}
                  color={"white"}
                  font={"600"}
                  icon={Arrow}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_sec_3 sec_3_bg">
        <div className="container">
          <div className="row main_market">
            <div className="col-md-6">
              <div>
                <div>
                  <h2 className="sec3_heading">Why Choose Us?</h2>
                  <h1 className="color font_family_roboto font_weigth sec3_heading2">
                    We do not buy from the open market & traders.
                  </h1>
                  <p className="dummy_text">
                    Simply dummy text of the printing and typesetting industry.
                    Lorem had ceased to been the industry's standard the 1500s,
                    when an unknown
                  </p>
                </div>
                <div className="produtcs_main">
                  <div className="button_produts d-flex align-items-center  justify-content-center gap-2">
                    <div className="cricle_icon"></div>
                    <h6 className="color font_family_roboto mt-2 fw-bold">
                      100% Natural Product
                    </h6>
                  </div>
                  <p className="dummy_text2 mt-4 ms-4">
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </p>
                  <div className="button_produts d-flex align-items-center  justify-content-center gap-2">
                    <div className="cricle_icon"></div>
                    <h6 className="color font_family_roboto mt-2 fw-bold">
                      {" "}
                      Increases resistance
                    </h6>
                  </div>
                  <p className="dummy_text2 mt-4 ms-4 mb-4">
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img1} className="w-100 img1" alt="" />
            </div>
          </div>
          <div className="row">
                {Card3.map((items5) => (
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-4 oh">
                    <Card about_card={items5} />
                  </div>
                ))}
              </div>
            </div>
      </section>

      <section className="about_sec_4">
        <div className="mb-4">
          <h2 className="heading text-center mb-0">Team</h2>
          <h1 className="color font_family_roboto font_weigth text-center">
            Our Organic Experts
          </h1>
          <p className="dummy_text text-center w-100">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className="container">
          <div className="row">
            {experts.map((items6) => (
              <div className=" col-md-4 col-sm-6  col-xs-12">
                <ExportCard expert={items6} />
              </div>
            ))}
            
          </div>
        </div>
      </section>

      <section className="about_sec_5">
        <div className="bg_color">
          <div className="container">
            <div>
              <h2 className="heading text-center">About Us</h2>
              <h1 className="font_family_roboto text-center font_weigth text-white mb-5">
                What We Offer for You
              </h1>
            </div>

            <div className="row justify-content-center">
              {offer_card.map((items7) => (
                <div className=" col-sm-6 col-lg-3">
                  <Card2 offer={items7} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <div className="container">
 <Subscribe />
 </div>
    </>
  );
};

export default About;

