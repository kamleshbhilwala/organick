import React from "react";
import "./Project.css";
import Card1 from "./project_componets/card1";
import img1 from "../../images/project_1.png";
import img2 from "../../images/project_2.png";
import img3 from "../../images/project_3.png";
import img4 from "../../images/project_4.png";
import img5 from "../../images/project_5.png";
import img6 from "../../images/project_6.png";
import Subscribe from "../../commen coponet/Subscribe/Subscribe";

const Project = () => {
  

  const cards = [
    {
      img: img1,
      title: "Green & Tasty Lemon",
      type: "Fruits",
    },
    {
      img: img2,
      title: "Organic Carrot",
      type: "Farmer",
    },
    {
      img: img3,
      title: "Organic Betel Leaf",
      type: "Leaf",
    },
    {
      img: img4,
      title: "Natural Tomato",
      type: "Fruits",
    },
    {
      img: img5,
      title: "Black Raspberry",
      type: "Farmer",
    },
    {
      img: img6,
      title: "Honey Orange",
      type: "Farmer",
    },
  ];

  return (
    <>
      
      <section className="proj-section-1">
        <div className="proj-bg">
          <div>
            <h1 className="color font-weight font-family-roboto text-center">
              Portfolio Standard
            </h1>
          </div>
        </div>
      </section>

      <section className="proj-section-2">
        <div className="container">
          <div className="row">
            {cards.map((card, index) => (
              <div
                className=" col-xl-6 col-xxl-4"
                key={index}
              >
                <Card1 img={card.img} title={card.title} type={card.type} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section-10">
        <Subscribe />
      </section>
    </>
  );
};

export default Project;
