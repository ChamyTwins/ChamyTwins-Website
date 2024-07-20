import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import IMG1 from "../assets/images/1.jpg";
import IMG2 from "../assets/images/2.JPG";
import IMG3 from "../assets/images/3.jpg";
import IMG4 from "../assets/images/4.jpg";
import IMG5 from "../assets/images/5.jpg";
import IMG6 from "../assets/images/6.jpg";
import IMG7 from "../assets/images/7.JPG";

const Member = () => {
  return (
    <div className="con1-member">
      <Navbar />
      <p className="title1-member text-center">ChamyTwins Family Member</p>
      <p className="text1-member">
        Welcome to our special page dedicated to our beloved chameleons. At
        ChamyTwins, our chameleons are not just pets, they are cherished members
        of our family. Each one has its own unique personality and charm, making
        our journey in chameleon breeding truly extraordinary. We are excited to
        introduce you to our wonderful family members.
      </p>
      <div className="custom-col-con position-relative start-50 top-0 translate-middle-x">
        <div className="row custom-row-member align-items-start">
          <div className="col-12 col-xl-6 custom-col-member m-0 p-1">
            <div className="img1-con-member overflow-hidden position-relative start-50 top-0 translate-middle-x bg-dark">
              <img
                src={IMG1}
                alt="ChamyTwins_Member_img"
                className="img1-custom-member object-fit-cover"
              />
            </div>
          </div>
          <div className="col-12 col-xl-6 custom-col-member m-0 p-1">
            <div className="img1-con-member overflow-hidden position-relative start-50 top-0 translate-middle-x bg-dark">
              <img
                src={IMG2}
                alt="ChamyTwins_Member_img"
                className="img1-custom-member object-fit-cover"
              />
            </div>
          </div>
        </div>
        <div className="row custom-row-member align-items-start">
          <div className="col-6 col-xl-3 custom-col-member m-0 p-1">
            <div className="img2-con-member overflow-hidden position-relative start-50 top-0 translate-middle-x bg-dark">
              <img
                src={IMG3}
                alt="ChamyTwins_Member_img"
                className="img2-custom-member-3 object-fit-cover"
              />
            </div>
          </div>
          <div className="col-6 col-xl-3 custom-col-member m-0 p-1">
            <div className="img2-con-member overflow-hidden position-relative start-50 top-0 translate-middle-x bg-dark">
              <img
                src={IMG4}
                alt="ChamyTwins_Member_img"
                className="img2-custom-member-4 object-fit-cover"
              />
            </div>
          </div>
          <div className="col-6 col-xl-3 custom-col-member m-0 p-1">
            <div className="img5-con-member overflow-hidden position-relative start-50 top-0 translate-middle-x ">
              <img
                src={IMG5}
                alt="ChamyTwins_Member_img"
                className="img5-custom-member object-fit-cover"
              />
            </div>
          </div>
          <div className="col-6 col-xl-3 custom-col-member m-0 p-1">
            <div className="img2-con-member overflow-hidden position-relative start-50 top-0 translate-middle-x bg-dark">
              <img
                src={IMG6}
                alt="ChamyTwins_Member_img"
                className="img2-custom-member object-fit-cover"
              />
            </div>
          </div>
        </div>
        <div className="row custom-row-member align-items-start">
          <div className="col-xl-3"></div>
          <div className="col-12 col-xl-6 custom-col-member m-0 p-1">
            <div className="img1-con-member overflow-hidden position-relative start-50 top-0 translate-middle-x bg-dark">
              <img
                src={IMG7}
                alt="ChamyTwins_Member_img"
                className="img1-custom-member object-fit-cover"
              />
            </div>
          </div>
          <div className="col-xl-3"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Member;
