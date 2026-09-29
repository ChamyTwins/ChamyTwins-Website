import React from "react";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import { Fireflies, Fog } from "../components/Atmosphere.js";
import heroPanther from "../assets/images/2.JPG";
import pantherYellow from "../assets/images/panther.JPG";
import igPanther from "../assets/images/instagram/ig-panther-branch.webp";
import igVeiled from "../assets/images/instagram/ig-veiled-outdoor.webp";
import igHatchling from "../assets/images/instagram/ig-hatchling.jpg";
import cage from "../assets/images/cage.png";
import drinking from "../assets/images/drinking.jpg";
import food from "../assets/images/food.png";
import decor from "../assets/images/decor.png";
import lamp from "../assets/images/uva_uvb.jpg";

const INSTAGRAM_DM = "https://ig.me/m/chamytwins";

// The five care topics. `product` images have a white background and are
// shown uncropped on a pale plate; photos fill their frame.
const topics = [
  {
    id: "cage",
    title: "Cage",
    icon: "bi-bounding-box",
    img: cage,
    alt: "Mesh chameleon cage",
    product: true,
    items: [
      <>
        <strong>Minimum size:</strong> 45 x 45 x 85 cm.
      </>,
      <>
        <strong>Placement:</strong> Indoor / outdoor.
      </>,
      "1 Chameleon per cage.",
    ],
  },
  {
    id: "misting",
    title: "Misting",
    icon: "bi-droplet-half",
    img: drinking,
    alt: "Chameleon drinking water droplets from a leaf",
    items: [
      "Chameleon drink from leaf.",
      <>
        Spray them <strong>4–5 times a day</strong> (morning and night).
      </>,
    ],
  },
  {
    id: "food",
    title: "Food",
    icon: "bi-bug",
    img: food,
    alt: "Cricket and dubia roach",
    product: true,
    items: [
      "Chameleon eat insects like cricket and dubia.",
      "Insect must be gutloaded first using supplements like Repashy Superpig, bee pollen, etc.",
    ],
  },
  {
    id: "decorations",
    title: "Decorations",
    icon: "bi-tree",
    img: decor,
    alt: "Cage decorated with plants and branches",
    product: true,
    items: [
      "Safe plant like walisongo, sirih gading.",
      "Artificial vines or wood for climbing.",
      "If your cage is outdoors, provide additional leaves for hiding to prevent your chameleon from overheating.",
    ],
  },
  {
    id: "indoor",
    title: "Extra Equipment for Indoor",
    icon: "bi-lightbulb",
    img: lamp,
    alt: "Indoor enclosure with UVA and UVB lamps",
    items: [
      <>
        You need <strong>UVA &amp; UVB lamps</strong> if you keep them indoor.
      </>,
    ],
  },
];

const species = [
  { name: "Panther", latin: "Furcifer pardalis", from: "Madagascar" },
  { name: "Veiled", latin: "Chamaeleo calyptratus", from: "Yemen & Saudi Arabia" },
];

const traits = [
  "They live in trees and shrubs (arboreal), so height matters more than floor space.",
  "Their eyes move independently — they can look in two directions at once.",
  "Their feet are zygodactyl: toes fused into two opposing groups to grip branches.",
  "They change colour mainly to communicate and to regulate body temperature.",
];

const pad = (n) => String(n).padStart(2, "0");

// One care topic as a glass panel of the infographic
const Topic = ({ t, n, className = "" }) => (
  <article className={`glass info-panel topic ${className}`} id={t.id}>
    <div className={t.product ? "topic__media is-product" : "topic__media"}>
      <img src={t.img} alt={t.alt} loading="lazy" decoding="async" />
    </div>
    <div className="topic__body">
      <p className="topic__num">{pad(n)}</p>
      <h2 className="info-panel__title">
        <i className={`bi ${t.icon}`} aria-hidden="true"></i> {t.title}
      </h2>
      <ul className="info-list">
        {t.items.map((item, j) => (
          <li key={j}>{item}</li>
        ))}
      </ul>
    </div>
  </article>
);

const Caresheet = () => {
  const [cageT, mistT, foodT, decorT, indoorT] = topics;

  return (
    <>
      <Navbar />
      <main id="main" className="scene">
        {/* ---------- Poster header ---------- */}
        <header className="care-head">
          <Fog />
          <Fireflies count={8} seed={3} />
          <div
            className="care-head__photo"
            role="img"
            aria-label="Green panther chameleon on a branch"
            style={{ backgroundImage: `url(${heroPanther})` }}
          />
          <div className="container-ct care-head__inner">
            <div className="care-head__text">
              <h1 className="care-head__title">Chameleon</h1>
              <p className="care-head__sub">The Keeper's Caresheet</p>
              <p className="care-head__lead">
                Welcome to our Chameleon Caresheet. Here, you'll find essential
                information to ensure the health and well-being of your
                chameleons.
              </p>
            </div>
          </div>
        </header>

        {/* ---------- Bento infographic ---------- */}
        <section className="section care-board" aria-label="Care essentials">
          <div className="container-ct">
            <div className="bento">
              <article className="glass info-panel know" data-aos="fade-up">
                <h2 className="info-panel__title info-panel__title--caps">Know your chameleon</h2>
                <ul className="know__species">
                  {species.map((s) => (
                    <li key={s.name}>
                      <strong>{s.name}</strong>
                      <em>{s.latin}</em>
                      <span>
                        <i className="bi bi-geo-alt" aria-hidden="true"></i> {s.from}
                      </span>
                    </li>
                  ))}
                </ul>
                <ul className="info-list">
                  {traits.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <img
                  className="know__photo"
                  src={pantherYellow}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </article>

              <Topic t={cageT} n={1} className="bento--cage" />
              <Topic t={mistT} n={2} className="bento--wide" />
              <Topic t={foodT} n={3} className="bento--food" />
              <Topic t={decorT} n={4} className="bento--decor" />
              <Topic t={indoorT} n={5} className="bento--wide bento--indoor" />

              <article className="glass info-panel ask" data-aos="fade-up">
                <div className="ask__text">
                  <h2 className="info-panel__title info-panel__title--caps">Still unsure?</h2>
                  <p>
                    Have a question about cages, lighting or feeding? Send us a
                    message and we'll gladly help you set up the right home.
                  </p>
                  <a
                    href={INSTAGRAM_DM}
                    className="btn-ct"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="bi bi-instagram" aria-hidden="true"></i> Ask us on Instagram
                  </a>
                </div>
                <ul className="ask__strip">
                  {[igPanther, igVeiled, igHatchling].map((src) => (
                    <li key={src}>
                      <img src={src} alt="" loading="lazy" decoding="async" />
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <p className="care-slogan">Happy home, healthy chameleon.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Caresheet;
