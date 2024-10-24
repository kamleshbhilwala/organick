import React from 'react';
import './Service_single.css'
import service_single_cardimg1  from "../../../images/Photo (8).jpg"
import service_single_cardimg2  from "../../../images/Photo (9).jpg"
import Subscribe from '../../../commen coponet/Subscribe/Subscribe';
function Service_single() {
  return (
    <>
      
      <section className='service_single_1'>
        <div className='bgh_img d-flex justify-content-center align-items-center'>
          <h1 className='color font_weight font_family_roboto text-center'>Service-single</h1>
        </div>
      </section>

      <section className='service_single_2'>
        <div className='container'>
          <div className='service_single_intro_img'></div>
        </div>

        <div className='maino'>
          <h1 className="color font_family_roboto font_weight title">
            Organic Store Services
          </h1>

          <div className="dummy_main">
            <p className="dummy_text">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </p>
            <p className="dummy_text">
              Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and uncover many websites still in their infancy. Various versions have evolved over the years.
            </p>
          </div>

          {/* Section for Service Content */}
         
            <div className="section">
              <img src={service_single_cardimg1} alt="Organic Farming" className="img-responsive" />
              <div className="text-box">
                <h2>Why Organic</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Page editors now use Lorem Ipsum as their default model text.</p>
              </div>
            </div>

            <div className="section">
              <div className="text-box">
                <h2>Speciality Produce</h2>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Page editors now use Lorem Ipsum as their default model text.</p>
              </div>
              <img src={service_single_cardimg2} alt="Plant Pots" className="img-responsive" />
            </div>

           
            <div className="features">
              <h2>We farm your land</h2>
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
              <div className="feature-main">
              <div className="feature-item">
                <div className="feature-numbers">01</div>
                <h3>Best quality support</h3>
              </div>

              <div className="feature-item">
                <div className="feature-numbers">02</div>
                <h3>Money back guarantee</h3>
              </div>
              </div>
            </div>
          </div>
        
      </section>
      <div className='container'>
        <Subscribe />
      </div>
    </>
  );
}

export default Service_single;