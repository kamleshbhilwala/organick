import React from "react";
import back2 from "../../images/Blog_single.png";
import Subscribe from "../../commen coponet/Subscribe/Subscribe";
// import { GoDotFill } from "react-icons/go";
import { IoPerson } from "react-icons/io5";
import "./blog_single.css";

function Blog_single() {
  const bolgsingle = JSON.parse(localStorage.getItem("Items"));
  return (
    <>
      <div className="portfolio-single-section">
        <div>
          <img className="portfolio-single-image" src={bolgsingle.src}></img>
        </div>
        <div className="portfolio-single-content-wrap">
          <div className="container">
            <div className="portfolio-top-content">
              <div className="portfolio-single-title-wrap">
                <div className="blog-single-detail-area">
                  <div className="blog-meta-date-detail">
                    <h3 className="posted-on-text">Posted On:</h3>
                    <h4 className="blog-single-date">January 6, 2022</h4>
                    <h4 className="blog-single-date">
                      {" "}
                      <IoPerson className="color2" /> By Rachi Card
                    </h4>
                  </div>
                </div>
                <h1>Research More Organic Food</h1>
                <div className="width600">
                  <p>
                    {" "}
                    Established fact that a reader will be distracted by the
                    readable content of a page when looking a layout. The point
                    of using Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="portfolio-main-content-wrap">
              <div>
                <p>
                  Uniquely matrix economically sound value through cooperative
                  technology. Competently parallel task fully researched data
                  and enterprise process improvements. Collaboratively expedite
                  quality manufactured products via client-focused results
                  quickly communicate enabled technology and turnkey leadership
                  skills. Uniquely enable accurate supply chains rather than
                  friction technology.
                  {/* <br></br> */}
                </p>

                <h4 className="font40">Preferred Form of Vitamin D?</h4>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking a layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <ul>
                  <li>
                    Publishing packages and web pageLorem Ipsum as their default
                  </li>
                  <li>
                    Content here, content here', making it look like readable
                  </li>
                  <li>Packages and web pageLorem Ipsum as their default</li>
                </ul>
                <div className="sticker">
                  “The first rule of any organic used in a business is that
                  nature applied to an efficient operation will magnify the
                  efficiency. The second is that organic applied to an
                  inefficient operation will magnify the health.”
                </div>
                <h6>Make perfect organic product with us</h6>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking a layout. The
                  point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution of letters, as opposed to using 'Content
                  here, content here', making it look like readable English.
                </p>
                <ol>
                  <li>
                    Publishing packages and web pageLorem Ipsum as their default
                  </li>
                  <li>
                    Content here, content here', making it look like readable
                  </li>
                  <li>Packages and web pageLorem Ipsum as their default</li>
                  <li>more-or-less normal distribution of letters</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container">
        <Subscribe />
      </section>
    </>
  );
}

export default Blog_single;
