import React from "react";
import "./Portfolio_Single.css";
import img1 from "../../../images/proj.p1.png";
import Subscribe from "../../../commen coponet/Subscribe/Subscribe";

const Portfolio_Single = () => {
  const portfolio = JSON.parse(localStorage.getItem("portfolio"));
  return (
    <>
      
      <section className="proj_p1_sec_1">
        <div
          className="p1_bg"
          style={{
            backgroundImage: `url(${portfolio.img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            objectFit:"contain",  
           
          }}
        ></div>

        <div className="container">
          <div className="box_main">
            <div className="row">
              <div className="col-md-7">
                <div className="right_main">
                  <h1 className="heading color font_weigth font_family_roboto">
                    {portfolio.title}
                  </h1>
                  <p className="dummy_text">
                    Established fact that a reader will be distracted by the
                    readable content of a page when looking a layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed
                  </p>
                </div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4 left_box">
                <ul className="client-info-list">
                  <li>
                    <span className="label">Date:</span> December 4, 2022
                  </li>
                  <li>
                    <span className="label">Client:</span> Kevin Martin
                  </li>
                  <li>
                    <span className="label">Category:</span> Agriculture, Eco
                  </li>
                  <li>
                    <span className="label">Service:</span> Organic Products
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proj_p1_sec_2">
        <div className="container">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
              <div>
                <h2 className="color font_family_roboto font_weigth mb-4">
                  About The Farm:
                </h2>
                <p className="dummy_text">
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking a layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </p>
                <p className="dummy_text mb-4">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and auncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years
                </p>
                <img src={img1} className="w-100 img1 mb-3" alt="" />
                <p className="text-center mb-4">The Organic Products</p>
                <h2 className="color font_family_roboto font_weigth mb-3">
                  How To Farm:
                </h2>
                <p className="dummy_text">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking a layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </p>
                <p className="dummy_text">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and auncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years
                </p>
                <h2 className="color font_family_roboto font_weigth">
                  Conclusion:
                </h2>
                <p className="dummy_text">
                  t is a long established fact that a reader will be distracted
                  by the readable content of a page when looking a layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.{" "}
                </p>
                <p className="dummy_text">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and auncover many web
                  sites still in their infancy. Various versions have evolved
                  over the years
                </p>
              </div>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>

      <section className="section_10 container">
        <Subscribe />
      </section>
    </>
  );
};

export default Portfolio_Single;
