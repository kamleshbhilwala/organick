import React from "react";
import "./error.css";
import err from "../../images/404.png";
const Error = () => {
  return (
    <>
      <section className="error_sec_1">
        <div className="error_bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6"></div>
              <div className="col-md-6 main">
                <div className="ms-4">
                  <img src={err} className="error4004" alt="" />
                  <p className="color font_family_roboto font_weigth page ms-4 mb-0">
                    Page not found
                  </p>
                  <p className="exist ms-3">
                    The page you are looking for doesn't exist or has been moved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="Blog_news_sec_3"></section>
    </>
  );
};

export default Error;
