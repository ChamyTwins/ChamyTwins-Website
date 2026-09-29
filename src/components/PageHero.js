import React from "react";
import { Fireflies, Fog, Foliage, Rays } from "./Atmosphere.js";

// Header for inner pages, in the style of the home hero: a misty photo
// backdrop, a giant word with a smaller one overlapping it
// and a lead paragraph.
const PageHero = ({ kicker, big, small, bg, children }) => (
  <header className="page-hero">
    {bg && <div className="melt page-hero__bg" style={{ backgroundImage: `url(${bg})` }} />}
    <Rays />
    <Fog />
    <Fireflies count={10} seed={3} />
    <Foliage
      className="page-hero__foliage"
      style={{ width: "min(46vw, 560px)", aspectRatio: "16 / 9", left: "-12%", top: "-4%", rotate: "160deg" }}
    />

    <div className="container-ct">
      <div className="page-hero__text">
        {kicker && <span className="kicker">{kicker}</span>}
        <h1 className="duo-title">
          <span className="duo-title__big">{big}</span>
          <span className="duo-title__small">{small}</span>
        </h1>
        <p className="page-hero__lead">{children}</p>
      </div>
    </div>
  </header>
);

export default PageHero;
