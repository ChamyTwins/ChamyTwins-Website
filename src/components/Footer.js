import React from "react";
import { Link } from "react-router-dom";
import LogoBisnis from "../assets/images/Chamytwinslogo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container-ct">
        <Link to="/" className="site-footer__brand" aria-label="ChamyTwins home">
          <img src={LogoBisnis} alt="" />
        </Link>
        <p className="site-footer__tagline">Bringing nature's wonders to your home.</p>

        <nav aria-label="Footer">
          <ul className="site-footer__links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/caresheet">Caresheet</Link>
            </li>
            <li>
              <Link to="/chamytwinsMember">Family</Link>
            </li>
            <li>
              <a
                href="https://www.instagram.com/chamytwins/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>

        <p className="site-footer__wordmark" aria-hidden="true">
          ChamyTwins
        </p>

        <div className="meta-row site-footer__bottom">
          <span>© 2022–{year} Chameleon Farm · Bandung</span>
          <span>
            Created and developed by{" "}
            <a
              className="site-footer__credit"
              href="https://www.instagram.com/k.webworks/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kristian
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
