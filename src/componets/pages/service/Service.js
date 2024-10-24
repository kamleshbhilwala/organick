import React from "react";
import "../../pages/service/Service.css";
import img1 from "../../images/service_img1.png";
import icon1 from "../../images/icons/service_icon1.svg";
import icon2 from "../../images/icons/service_icon2.svg";
import icon3 from "../../images/icons/service_icon3.svg";
import icon4 from "../../images/icons/service_icon4.svg";
import icon5 from "../../images/icons/service_icon5.svg";
import icon6 from "../../images/icons/service_icon5.png";
import Button from "../../commen coponet/botton/botton";
import Arrow from "../../images/icons/Aerrow.png";

const Service = () => {
  return (
    <>
      
      <section className="service_sec_1">
        <div className="bg_img d-flex justify-content-center align-items-center">
          <h1 className="color font_weigth font_family_roboto text-center">
            Our Service
          </h1>
        </div>
      </section>

      <section className="service_sec_2">
        <div className="container">
          <h2 className="heading text-center mb-1">What we Grow</h2>
          <h1 className="color font_weigth font_family_roboto heading2 mb-4">
            Better Agriculture for Better Future
          </h1>
          <div className="row">
            <div className="col-md-3">
              <div className="products_main">
                <div className="mb-4 text-center text-lg-end  ">
                  <img src={icon6} alt="" className="mb-2" />
                  <h5 className="color font_family_roboto font_weigth">
                    Dairy Products
                  </h5>
                  <p className="dummy_text p-0 ">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
                <div className="mb-4 text-center text-lg-end">
                  <img src={icon1} alt="" className="mb-2" />
                  <h5 className="color font_family_roboto font_weigth">
                    Store Services
                  </h5>
                  <p className="dummy_text p-0 ">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
                <div className="mb-4 text-center text-lg-end">
                  <img src={icon2} alt="" className="mb-2" />
                  <h5 className="color font_family_roboto font_weigth">
                    Delivery Services
                  </h5>
                  <p className="dummy_text p-0 ">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img1} className="w-100" alt="" />
            </div>
            <div className="col-md-3">
              <div className="products_main">
                <div className="mb-4 text-center text-lg-start">
                  <img src={icon3} alt="" className="mb-2" />
                  <h5 className="color font_family_roboto font_weigth">
                    Delivery Services
                  </h5>
                  <p className="dummy_text p-0 ">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
                <div className="mb-4 text-center">
                  <img src={icon4} alt="" className="mb-2" />
                  <h5 className="color font_family_roboto font_weigth">
                    Delivery Services
                  </h5>
                  <p className="dummy_text p-0 ">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
                <div className="mb-4 text-center">
                  <img src={icon5} alt="" className="mb-2" />
                  <h5 className="color font_family_roboto font_weigth">
                    Delivery Services
                  </h5>
                  <p className="dummy_text p-0 ">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="button">
            <Button
              style={"white"}
              name={"Explore More"}
              font={"700"}
              color={"#274C5B"}
              icon={Arrow}
              border={"3px solid #274C5B"}
              id={"center"}
            />
          </div>
        </div>
      </section>

      <section className="service_sec_3">
        <div className="img_bkg">
          <div className="main">
            <h2 className="heading text-center">Organic Only</h2>
            <h1 className="color font_weigth text-center font_family_roboto">
              Everyday Fresh & Clean
            </h1>
            <p className="dummy_text mb-4">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the{" "}
            </p>
            <div className="video_box d-flex justify-content-center align-items-center"></div>
          </div>
        </div>
      </section>
      <div className="container">
        
      </div>
    </>
  );
};

export default Service;
