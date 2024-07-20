import React from "react";
import LogoBisnis from "../assets/images/Chamytwinslogo.png";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  let loc = useLocation();

  return (
    <div>
      <nav className="navbar m-0 p-0">
        <div className="container-fluid con-nav">
          <button
            className="navbar-toggler custom-nav border-0"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span
              className={
                loc.pathname === "/" ? "custom-icon-hmpg" : "custom-icon"
              }
            >
              <i className="bi bi-list"></i>
            </span>
          </button>
          <div className="img1-con-nav position-relative overflow-hidden">
            <a href="/ChamyTwins-Website">
              <img
                className="logobisnis object-fit-contain"
                alt="chamytwinslogo"
                src={LogoBisnis}
              />
            </a>
          </div>
          <div
            className="offcanvas offcanvas-start"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5
                className="offcanvas-title custom-nav-title"
                id="offcanvasNavbarLabel"
              >
                ChamyTwins
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a
                    className={
                      loc.pathname === "/" ? "nav-link active" : " nav-link"
                    }
                    aria-current="page"
                    href="/ChamyTwins-Website"
                  >
                    Homepage
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      loc.pathname === "/caresheet"
                        ? "nav-link active"
                        : "nav-link "
                    }
                    href="/ChamyTwins-Website/caresheet"
                  >
                    Chamelon Caresheet
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className={
                      loc.pathname === "/chamytwinsMember"
                        ? "nav-link active"
                        : "nav-link "
                    }
                    href="/ChamyTwins-Website/chamytwinsMember"
                  >
                    ChamyTwins Family
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
