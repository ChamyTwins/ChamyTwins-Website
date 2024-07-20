import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import panther from "../assets/images/panther.JPG";
import veiled from "../assets/images/veiled.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

const Homepage = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);
    gsap.fromTo(
      ".title-hmpg1",
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
    gsap.to(".text-hmpg1", {
      duration: 2,
      delay: 0.6,
      text: "Bringing Nature's Wonders to Your Home",
    });
  }, []);

  const formRef = useRef(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAlert, setisAlert] = useState(false);
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwHQ-WtcRzT735MKR-TeL9gQuAjvlsK9eedQanQE-ejHpAFcFJ8Q93U_rimZ-pBzcmK/exec";

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    fetch(scriptURL, { method: "POST", body: new FormData(formRef.current) })
      .then((response) => {
        console.log("Success!", response);
        setIsSubmitted(false);
        setisAlert(true);
        formRef.current.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  };

  useEffect(() => {
    const form = formRef.current;
    if (form) {
      form.addEventListener("submit", handleSubmit);
    }

    return () => {
      if (form) {
        form.removeEventListener("submit", handleSubmit);
      }
    };
  }, [formRef]);

  return (
    <div>
      <div className="con1-hmpg position-relative">
        <Navbar />
        <div className="title-con1 text-light position-absolute start-50 top-50 translate-middle text-center">
          <p className="title-hmpg1">ChamyTwins</p>
          <p className="text-hmpg1"></p>
        </div>
      </div>
      <div className="con2-hmpg">
        <p className="title-hmpg2 text-center">About Us</p>
        <p className="sub-title-hmpg2">
          From Hobby to Expertise:
          <br /> Our Journey in Chameleon Breeding
        </p>
        <div>
          <p className="text-hmpg2">
            Founded in 2022 during the COVID-19 pandemic, our passion for
            chameleons began as a hobby born out of curiosity and a desire to
            bring joy into our lives.
          </p>
          <p className="text-hmpg2">
            Today, based in Bandung, we are proud to be known as one of the
            leading chameleon breeders. We focus on providing healthy and
            vibrant chameleons, ensuring each one is raised with care and love.
          </p>
          <p className="text-hmpg3">
            Join us in discovering the beauty of these exotic creatures. Welcome
            to our world of passion and expertise in chameleon breeding.
          </p>
        </div>
      </div>
      <div className="con3-hmpg">
        <p
          className="title-hmpg3 text-center"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-offset="200"
        >
          Our Chameleon Varieties
        </p>
        <div className="text-center">
          <div className="row custom-row-hmpg align-items-start m-0 p-0 overflow-hidden">
            <div
              className="col-12 col-lg-6 col-xl-6 custom-col-hmpg"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="100"
              data-aos-offset="200"
            >
              <p className="sub-title-hmpg3">Panther Chameleon</p>
              <div className="img2-con-hmpg overflow-hidden position-relative start-50 top-0 translate-middle-x bg-dark">
                <img
                  src={panther}
                  alt="panther_chameleon_img"
                  className="img2-custom object-fit-cover"
                />
              </div>
            </div>
            <div
              className="col-12 col-lg-6 col-xl-6 custom-col-hmpg"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay="150"
              data-aos-offset="100"
            >
              <p className="text-hmpg4">
                Panther Chameleons (Furcifer pardalis) are known for their
                vibrant coloration and ability to change colors. Originating
                from Madagascar, they exhibit a wide range of colors including
                bright reds, blues, greens, and yellows.
              </p>
              <a href="/caresheet" className="custom-link">
                <p className="text-hmpg6-left">See chameleon caresheet &gt;</p>
              </a>
            </div>
          </div>
          <div className="row align-items-start m-0 p-0 overflow-hidden">
            <div
              className="col-12 col-lg-6 col-xl-6 order-lg-2 order-xl-2 custom-col-hmpg"
              data-aos="fade-left"
              data-aos-duration="1000"
              // data-aos-delay="200"
              data-aos-offset="100"
            >
              <p className="sub-title-hmpg4">Veiled Chameleon</p>
              <div className="img2-con-hmpg overflow-hidden position-relative start-50 top-0 translate-middle-x bg-dark">
                <img
                  src={veiled}
                  alt="panther_chameleon_img"
                  className="img3-custom object-fit-cover"
                />
              </div>
            </div>
            <div
              className="col-12 col-lg-6 col-xl-6 order-lg-1 order-xl-1 custom-col-hmpg"
              data-aos="fade-right"
              data-aos-duration="1000"
              data-aos-delay="50"
              data-aos-offset="100"
            >
              <p className="text-hmpg5">
                Veiled Chameleons (Chamaeleo calyptratus) originate from Yemen
                and Saudi Arabia. They are known for the casque (crest) on their
                heads and their ability to change skin color for communication
                and temperature regulation.
              </p>
              <a href="/caresheet" className="custom-link">
                <p className="text-hmpg6-right">See chameleon caresheet &gt;</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="con4-hmpg">
        <p className="title-hmpg4 text-center">
          Bring This Exotic Pet to Your Home
        </p>
        <form name="chamytwins" ref={formRef}>
          <div className="con-form-hmpg position-relative">
            <div className="custom-form-hmpg display-flex flex-column d-inline-flex position-relative start-50 top-0 translate-middle-x">
              <div
                className={
                  isAlert === true
                    ? "alert alert-success alert-dismissible fade show"
                    : "alert d-none alert-success alert-dismissible fade show"
                }
                role="alert"
              >
                <strong>Thankyou!</strong> We will contact you soon !
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="alert"
                  aria-label="Close"
                ></button>
              </div>
              <input
                type="text"
                className="custom-box-hmpg"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="custom-form-hmpg display-flex flex-column d-inline-flex position-relative start-50 top-0 translate-middle-x">
              <input
                type="tel"
                className="custom-box-hmpg"
                placeholder="Phone Number"
                name="phoneNumber"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className={
                  isSubmitted === true
                    ? "custom-button-hmpg d-none position-relative start-50 top-0 translate-middle-x"
                    : "custom-button-hmpg position-relative start-50 top-0 translate-middle-x"
                }
              >
                Submit
              </button>
              <button
                className={
                  isSubmitted === true
                    ? "custom-button-hmpg-load position-relative start-50 top-0 translate-middle-x"
                    : "custom-button-hmpg-load d-none position-relative start-50 top-0 translate-middle-x"
                }
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  aria-hidden="true"
                ></span>
                <span role="status">Loading...</span>
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
