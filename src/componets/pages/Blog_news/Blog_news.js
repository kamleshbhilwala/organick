import React from "react";
import "./Blog_news.css";
import Subscribe from "../../commen coponet/Subscribe/Subscribe";
import Card3 from "../../commen coponet/Cardproduct3/Card3";
import section_9img1 from "../../images/sec_9img1.png";
import section_9img2 from "../../images/sec_9img2.png";
import Blognews1 from "../../images/Blognews1.png";
import Blognews2 from "../../images/Blognews2.png";
import Blognews3 from "../../images/Blognews3.png";
import Blognews4 from "../../images/Blognews4.png";
const Blog_news = () => {
  const cardData = [
    { src: section_9img1 },
    { src: section_9img2 },
    { src: Blognews1 },
    { src: Blognews2 },
    { src: Blognews3 },
    { src: Blognews4 },
  ];

  return (
    <>
      <section className="Blog_news_sec_1">
        <div className="news_bg d-flex align-items-center justify-content-center">
          <h1 className="color font_family_roboto text-center font_weigth">
            Recent News
          </h1>
        </div>
      </section>

      <section className="section_9">
        <div className="container">
          <div className="row og">
            {cardData.map((card, index) => (
              <div className="col-md-4 col-md-6" key={index}>
                <Card3 src={card.src} h />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="Blog_news_sec_3">
        <Subscribe />
      </section>
    </>
  );
};

export default Blog_news;
