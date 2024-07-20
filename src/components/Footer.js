import React from "react";
import LogoBisnis from "../assets/images/Chamytwinslogo.png";

const Footer = () => {
  return (
    <div className="footer-con position-relative">
      <div className="con-bisnis">
        <div className="img-con-footer position-relative start-50 top-0 translate-middle-x">
          <img
            src={LogoBisnis}
            alt="logo_chamytwins"
            className="custom-img-footer object-fit-contain"
          />
        </div>
        <p className="text-center custom-title-footer">ChamyTwins</p>
      </div>
      <p className="custom-text-footer text-center position-absolute bottom-0 start-50 translate-middle-x">
        © 2022 Chameleon Farm.
        <br />
        All Rights Reserved.
        <br />
        Created and developed by Kristian.
      </p>
    </div>
  );
};

export default Footer;
