import React, { useEffect } from "react";
import Navbar from "../components/Navbar.js";
import panther1 from "../assets/images/phanter_Caresheet.JPG";
import cage from "../assets/images/cage.png";
import drinking from "../assets/images/drinking.jpg";
import food from "../assets/images/food.png";
import decor from "../assets/images/decor.png";
import lamp from "../assets/images/uva_uvb.jpg";
import Footer from "../components/Footer.js";
import AOS from "aos";
import "aos/dist/aos.css";

const Caresheet = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="con1-care">
        <Navbar />
        <p className="title1-care text-center">Chameleon Caresheet</p>
        <div className="row custom-row-1 align-items-start m-0 p-0 p-xl-4">
          <div className="col-12 col-lg-6 col-xl-6 order-lg-2 order-xl-2 custom-col-0">
            <p className="sub-title1-care">
              Welcome to our Chameleon Caresheet. Here, you'll find essential
              information to ensure the health and well-being of your
              chameleons.
            </p>
          </div>
          <div className="col-12 col-lg-6 col-xl-6 order-lg-1 order-xl-1">
            <div className="img1-con-care overflow-hidden position-relative start-50 top-0 translate-middle-x bg-dark">
              <img
                src={panther1}
                alt="panther_chameleon_img"
                className="img1-custom-care object-fit-cover"
              />
            </div>
          </div>
        </div>
        <p className="sub-title3-care">
          Before you keep chameleons, you need to pay attention to and prepare
          several things like the following so that your chameleon is happy and
          healty.
        </p>
      </div>
      <div className="con2-care">
        <div className="">
          <div className="row custom-row-1 align-items-start m-0 p-0">
            <div
              className="col-12 col-lg-6 col-xl-6"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="300"
            >
              <li className="sub-title2-care list-group-item">Cage</li>
              <div className="custom-row row">
                <div className="col-6 m-0 p-0">
                  <div className="img2-con-care overflow-hidden position-relative start-50 top-0 translate-middle-x">
                    <img
                      src={cage}
                      alt="cage_img"
                      className="img2-custom-care object-fit-cover"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <ol className="custom-list text-start position-relative top-50 start-0 translate-middle-y">
                    <li className="custom-li">
                      Minimum size:
                      <br />
                      45 x45 x 85 cm.
                    </li>
                    <li className="custom-li">
                      Placement:
                      <br />
                      Indoor / outdoor.
                    </li>
                    <li className="custom-li">1 Chameleon per cage .</li>
                  </ol>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 col-xl-6"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="300"
              data-aos-delay="100"
            >
              <li className="sub-title2-care list-group-item">Misting</li>
              <div className="custom-row row">
                <div className="col-12 col-lg-6 col-xl-6 m-0 p-0">
                  <div className="img3-con-care overflow-hidden position-relative start-50 top-0 translate-middle-x bg-dark">
                    <img
                      src={drinking}
                      alt="drinking_img"
                      className="img3-custom-care object-fit-cover"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 col-xl-6 m-0 p-0">
                  <ol className="custom-list-drinking text-start position-relative top-50 start-50 translate-middle">
                    <li className="custom-li">Chameleon drink from leaf.</li>
                    <li className="custom-li">
                      Spray them 4-5 times a day (Morning and Night)
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="row custom-row-2 m-0 p-0">
            <div
              className="col-12 col-lg-6 col-xl-6"
              data-aos="zoom-in"
              data-aos-offset="300"
              data-aos-duration="500"
            >
              <li className="sub-title2-care list-group-item">Food</li>
              <div className="custom-row row">
                <div className="col-6">
                  <div className="img2-con-care overflow-hidden position-relative start-50 top-0 translate-middle-x">
                    <img
                      src={food}
                      alt="food_img"
                      className="img2-custom-care object-fit-cover"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <ol className="custom-list text-start position-relative top-50 start-0 translate-middle-y">
                    <li className="custom-li">
                      Chameleon eat insects like cricket and dubia.
                    </li>
                    <li className="custom-li">
                      Insect must be gutloaded first using suplemen like repashy
                      superpig, bee pollen, etc.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 col-xl-6"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="300"
              data-aos-delay="100"
            >
              <li className="sub-title2-care list-group-item">Decorations</li>
              <div className="custom-row row">
                <div className="col-12 col-sm-6">
                  <div className="img4-con-care overflow-hidden position-relative start-50 top-0 translate-middle-x">
                    <img
                      src={decor}
                      alt="decor_img"
                      className="img4-custom-care object-fit-cover"
                    />
                  </div>
                </div>
                <div className="col-12 col-sm-6 m-0 p-0">
                  <ol className="custom-list-decor text-start position-relative top-50 start-50 translate-middle">
                    <li className="custom-li">
                      Safe plant like walisongo, sirih gading.
                    </li>
                    <li className="custom-li">
                      Artificial vines or wood for climbing.
                    </li>
                    <li className="custom-li">
                      If your cage is outdoors, you should provide additional
                      leaves for hiding to prevent your chameleon from
                      overheating.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <div className="row custom-row-4 align-items-start m-0 p-0">
            <div className="col-12 col-lg-3 col-xl-4"></div>
            <div
              className="col-12 col-lg-5 col-xl-4"
              data-aos="zoom-in"
              data-aos-duration="500"
              data-aos-offset="300"
              data-aos-delay="100"
            >
              <li className="sub-title2-care list-group-item">
                Extra Equipment for Indoor
              </li>
              <div className="custom-row row">
                <div className="col-6">
                  <div className="img5-con-care overflow-hidden position-relative start-50 top-0 translate-middle-x">
                    <img
                      src={lamp}
                      alt="food_img"
                      className="img2-custom-care object-fit-cover"
                    />
                  </div>
                </div>
                <div className="col-6">
                  <ol className="custom-list text-start position-relative top-50 start-0 translate-middle-y">
                    <li className="custom-li">
                      You need UVA & UVB lamps if you keep them indoor.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3 col-xl-4"></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Caresheet;
