import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import LogoBisnis from "../assets/images/Chamytwinslogo.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/caresheet", label: "Chameleon Caresheet" },
  { to: "/chamytwinsMember", label: "ChamyTwins Family" },
];

const Navbar = () => {
  const loc = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);
  const closeRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  // Lock page scroll + support Escape while the drawer is open
  useEffect(() => {
    if (!open) return undefined;
    const toggle = toggleRef.current;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      toggle?.focus();
    };
  }, [open]);

  const isHome = loc.pathname === "/";
  const headerClass = [
    "site-header",
    scrolled || !isHome ? "is-solid" : "",
    scrolled ? "is-scrolled" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <header className={headerClass}>
        <div className="container-ct site-header__inner">
          <Link to="/" className="brand" aria-label="ChamyTwins home">
            <img className="brand__logo" alt="" src={LogoBisnis} />
            <span className="brand__name">ChamyTwins</span>
          </Link>

          <nav className="site-nav" aria-label="Main">
            <ul>
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.end} className="site-nav__link">
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <a
            className="nav-ig"
            href="https://www.instagram.com/chamytwins/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ChamyTwins on Instagram"
          >
            <i className="bi bi-instagram" aria-hidden="true"></i>
          </a>

          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={open ? "drawer-backdrop is-open" : "drawer-backdrop"}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <aside
        id="mobile-drawer"
        className={open ? "drawer is-open" : "drawer"}
        aria-label="Menu"
        aria-hidden={!open}
        inert={open ? undefined : ""}
      >
        <div className="drawer__head">
          <span className="brand">
            <img className="brand__logo" alt="" src={LogoBisnis} />
            <span className="brand__name">ChamyTwins</span>
          </span>
          <button
            ref={closeRef}
            type="button"
            className="drawer__close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
        </div>
        <ul className="drawer__links">
          {links.map((l, i) => (
            <li key={l.to} style={{ "--i": i }}>
              <NavLink to={l.to} end={l.end} className="drawer__link">
                <span>{l.label}</span>
                <i className="bi bi-arrow-right" aria-hidden="true"></i>
              </NavLink>
            </li>
          ))}
        </ul>
        <p className="drawer__foot">
          <i className="bi bi-geo-alt" aria-hidden="true"></i> Bandung, Indonesia
        </p>
      </aside>
    </>
  );
};

export default Navbar;
