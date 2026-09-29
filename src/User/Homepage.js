import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { Fireflies, Fog, Foliage } from "../components/Atmosphere.js";
// Unsplash photos — credits in assets/images/unsplash/CREDITS.md
import jungleFog from "../assets/images/unsplash/jungle-fog.jpg";
import mistyForest from "../assets/images/unsplash/misty-forest.jpg";
import heroPanther from "../assets/images/panther.JPG";
import pantherGreen from "../assets/images/instagram/ig-panther-studio.jpg";
import veiled from "../assets/images/veiled.jpg";
import careImg from "../assets/images/phanter_Caresheet.JPG";

// ig.me opens a DM thread directly (the Instagram app on phones)
const INSTAGRAM_DM = "https://ig.me/m/chamytwins";
const INSTAGRAM_PROFILE = "https://www.instagram.com/chamytwins/";

const facts = [
  { text: "Founded in 2022, during the pandemic" },
  { text: "Bred at our own farm in Bandung" },
  { text: "Two varieties: Panther & Veiled" },
];

const cards = [
  {
    title: "Panther",
    latin: "Furcifer pardalis",
    text: "Madagascar's living rainbow — bold bands of red, blue, green and yellow.",
    img: pantherGreen,
    to: "/chamytwinsMember",
  },
  {
    title: "Veiled",
    latin: "Chamaeleo calyptratus",
    text: "From Yemen & Saudi Arabia, crowned with a tall casque.",
    img: veiled,
    to: "/chamytwinsMember",
  },
  {
    title: "Care",
    latin: "The essentials",
    text: "Cage, misting, food, plants and UV — everything they need.",
    img: careImg,
    to: "/caresheet",
  },
];

const pad = (n) => String(n).padStart(2, "0");

const Homepage = () => (
  <>
    <Navbar />
    <main id="main" className="scene">
      {/* ---------- Hero ---------- */}
      <section className="home-hero">
        {/* our own studio shot (1616 x 1080). It's shown no wider than its
            native size so it stays sharp, and its black backdrop melts into
            the page via `lighten`. */}
        <img
          className="home-hero__photo"
          src={heroPanther}
          width="1616"
          height="1080"
          alt="Yellow panther chameleon walking along a branch"
          fetchpriority="high"
        />
        <div className="home-hero__vignette" aria-hidden="true" />

        <div className="container-ct home-hero__inner">
          <p className="meta-row">
            <span>Bandung, Indonesia</span>
            <span>Est. 2022</span>
          </p>

          <div className="home-hero__center">
            <span className="kicker">Chameleon breeder</span>
            <h1 className="duo-title">
              <span className="duo-title__big">Chamy</span>
              <span className="duo-title__small">Twins.</span>
            </h1>
            <p className="home-hero__sign">
              Bringing nature's quiet wonders
              <br />
              from the forest to your home.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Facts panel ---------- */}
      <section className="facts" id="story" aria-label="ChamyTwins at a glance">
        <div className="container-ct facts__wrap">
          <p className="meta-row facts__meta" data-aos="fade-up">
            <span>
              First facts <span className="tag">ChamyTwins</span>
            </span>
          </p>
          <div className="facts__stack" data-aos="zoom-in-up">
            <div className="facts__ghost" aria-hidden="true" />
            <div className="glass facts__panel">
              <div
                className="facts__photo"
                style={{ backgroundImage: `url(${jungleFog})` }}
                aria-hidden="true"
              />
              <ul className="facts__list">
                {facts.map((f, i) => (
                  <li key={f.text}>
                    <span className="facts__num">{pad(i + 1)}</span>
                    <span className="facts__text">{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="meta-row facts__meta facts__meta--end">
            <span></span>
            <span>Since 2022</span>
          </p>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section className="section about" id="about">
        <Foliage className="about__foliage" flip />
        <Fireflies count={10} seed={5} />
        <div className="container-ct">
          <h2 className="stack-title" data-aos="fade-up">
            <strong>Our Journey.</strong>
            <span>From hobby to expertise</span>
          </h2>
          <p className="lead-center" data-aos="fade-up" data-aos-delay="100">
            Founded in 2022 during the COVID-19 pandemic, our passion for
            chameleons began as a hobby born out of curiosity. Today, from
            Bandung, we raise healthy and vibrant chameleons — each one with care
            and love.
          </p>
          <div className="about__cta" data-aos="fade-up" data-aos-delay="200">
            <Link to="/chamytwinsMember" className="btn-ct">
              Meet the family
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Tilted glass cards ---------- */}
      <section className="section cards-section" id="varieties" aria-label="Our chameleons">
        <div className="container-ct">
          <ul className="tilt-cards">
            {cards.map((c, i) => (
              <li key={c.title} data-aos="fade-up" data-aos-delay={i * 120}>
                <Link to={c.to} className="tilt-card">
                  <span className="tilt-card__ghost" aria-hidden="true" />
                  <span className="tilt-card__face glass">
                    <img src={c.img} alt="" loading="lazy" decoding="async" />
                    <span className="tilt-card__body">
                      <span className="tilt-card__title">{c.title}</span>
                      <em className="tilt-card__latin">{c.latin}</em>
                      <span className="tilt-card__text">{c.text}</span>
                      <span className="tilt-card__num">{pad(i + 1)}</span>
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Contact ---------- */}
      <section className="section join" id="contact">
        <div className="melt join__photo" style={{ backgroundImage: `url(${mistyForest})` }} />
        <Fog />
        <Fireflies count={16} seed={9} />
        <div className="container-ct">
          <h2 className="stack-title" data-aos="fade-up">
            <strong>Don't miss it.</strong>
            <span>Bring one home</span>
          </h2>
          <p className="lead-center" data-aos="fade-up" data-aos-delay="100">
            Interested in adopting one of our chameleons, or have a question
            about caring for one? Send us a message on Instagram — what are you
            waiting for?
          </p>
          <div className="join__actions" data-aos="fade-up" data-aos-delay="200">
            <a
              href={INSTAGRAM_DM}
              className="btn-ct btn-ct--solid"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-instagram" aria-hidden="true"></i>
              Chat on Instagram
            </a>
            <a
              href={INSTAGRAM_PROFILE}
              className="link-arrow"
              target="_blank"
              rel="noopener noreferrer"
            >
              @chamytwins <i className="bi bi-arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="join__dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Homepage;
