import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";
import PageHero from "../components/PageHero.js";
import mistyForest from "../assets/images/unsplash/misty-forest.jpg";
import igXmas from "../assets/images/instagram/ig-veiled-xmas.webp";
import igOutdoor from "../assets/images/instagram/ig-veiled-outdoor.webp";
import igSanta from "../assets/images/instagram/ig-veiled-santa.webp";
import igHand from "../assets/images/instagram/ig-veiled-hand.webp";
import igPantherBranch from "../assets/images/instagram/ig-panther-branch.webp";
import igPantherStudio from "../assets/images/instagram/ig-panther-studio.jpg";
import igHatchling from "../assets/images/instagram/ig-hatchling.jpg";
import IMG1 from "../assets/images/1.jpg";
import IMG2 from "../assets/images/2.JPG";
import IMG3 from "../assets/images/3.jpg";
import IMG4 from "../assets/images/4.jpg";
import IMG5 from "../assets/images/5.jpg";
import IMG6 from "../assets/images/6.jpg";
import IMG7 from "../assets/images/7.JPG";
import veiledLights from "../assets/images/BG1.jpg";
import pantherYellow from "../assets/images/panther.JPG";
import veiledPortrait from "../assets/images/veiled.jpg";
import pantherLeaves from "../assets/images/phanter_Caresheet.JPG";

const INSTAGRAM_PROFILE = "https://www.instagram.com/chamytwins/";

// Our own shots plus the ones posted on @chamytwins. `kind` drives the filter.
const photos = [
  { src: IMG4, kind: "little", alt: "Two young veiled chameleons climbing a bamboo stick" },
  { src: pantherYellow, kind: "panther", alt: "Yellow panther chameleon walking along a branch" },
  { src: igOutdoor, kind: "veiled", alt: "Veiled chameleon on a branch in the garden" },
  { src: IMG5, kind: "little", alt: "Chameleon hatching out of its egg" },
  { src: igPantherStudio, kind: "panther", alt: "Green panther chameleon climbing a branch" },
  { src: igXmas, kind: "veiled", alt: "Veiled chameleon among Christmas lights" },
  { src: IMG3, kind: "little", alt: "Young veiled chameleon in an umbrella plant" },
  { src: igPantherBranch, kind: "panther", alt: "Panther chameleon on a branch in the yard" },
  { src: igHand, kind: "veiled", alt: "Veiled chameleon resting on a hand" },
  { src: igHatchling, kind: "little", alt: "Newly hatched chameleon among its eggs" },
  { src: IMG1, kind: "panther", alt: "Yellow panther chameleon with its mouth open" },
  { src: veiledPortrait, kind: "veiled", alt: "Veiled chameleon standing on a hand" },
  { src: IMG6, kind: "little", alt: "Young veiled chameleons on pothos leaves" },
  { src: igSanta, kind: "veiled", alt: "Veiled chameleon perched on a Santa ornament" },
  { src: pantherLeaves, kind: "panther", alt: "Close-up of a panther chameleon among leaves" },
  { src: veiledLights, kind: "veiled", alt: "Veiled chameleon in a Christmas tree" },
  { src: IMG2, kind: "panther", alt: "Green panther chameleon on a branch" },
  { src: IMG7, kind: "veiled", alt: "Young veiled chameleon on a leafy stem" },
];

const filters = [
  { id: "all", label: "All" },
  { id: "panther", label: "Panther" },
  { id: "veiled", label: "Veiled" },
  { id: "little", label: "Little ones" },
];

const Member = () => {
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);
  const shown = useMemo(
    () => (filter === "all" ? photos : photos.filter((p) => p.kind === filter)),
    [filter]
  );
  const closeRef = useRef(null);
  const lastTrigger = useRef(null);

  const open = (i, e) => {
    lastTrigger.current = e.currentTarget;
    setActive(i);
  };
  const close = useCallback(() => setActive(null), []);
  const step = useCallback(
    (dir) => setActive((i) => (i + dir + shown.length) % shown.length),
    [shown.length]
  );

  useEffect(() => {
    if (active === null) return undefined;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [active, close, step]);

  // Return focus to the photo that opened the lightbox
  useEffect(() => {
    if (active === null) lastTrigger.current?.focus();
  }, [active]);

  return (
    <>
      <Navbar />
      <main id="main" className="scene">
        <PageHero
          bg={mistyForest}
          kicker="ChamyTwins"
          big="Family"
          small="Members."
        >
          At ChamyTwins, our chameleons are not just pets, they are cherished
          members of our family. Each one has its own unique personality and
          charm. We are excited to introduce you to them.
        </PageHero>

        <section className="section gallery-section" aria-label="Photo gallery">
          <div className="container-ct">
            <div className="gallery-bar">
              <div className="gallery-filters" role="group" aria-label="Filter photos">
                {filters.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    className={filter === f.id ? "gallery-filter is-active" : "gallery-filter"}
                    aria-pressed={filter === f.id}
                    onClick={() => setFilter(f.id)}
                  >
                    {f.label}
                    <span>
                      {f.id === "all" ? photos.length : photos.filter((p) => p.kind === f.id).length}
                    </span>
                  </button>
                ))}
              </div>
              <a className="link-arrow" href={INSTAGRAM_PROFILE} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram" aria-hidden="true"></i> @chamytwins
              </a>
            </div>

            {/* re-keyed on filter so the fade-in replays */}
            <ul className="gallery" key={filter}>
              {shown.map(({ src, alt }, i) => (
                <li className="gallery__item" key={src} style={{ "--i": i }}>
                  <button
                    type="button"
                    className="gallery__btn"
                    onClick={(e) => open(i, e)}
                    aria-label={`View photo ${i + 1} of ${shown.length}: ${alt}`}
                  >
                    <img src={src} alt={alt} loading="lazy" decoding="async" />
                    <span className="gallery__zoom" aria-hidden="true">
                      <i className="bi bi-arrows-angle-expand"></i>
                    </span>
                  </button>
                </li>
              ))}
              <li className="gallery__item gallery__cta glass" style={{ "--i": shown.length }}>
                <i className="bi bi-heart" aria-hidden="true"></i>
                <p>Want one of our chameleons to join your family?</p>
                <Link to={{ pathname: "/", hash: "#contact" }} className="link-arrow">
                  Bring one home <i className="bi bi-arrow-right" aria-hidden="true"></i>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />

      {active !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${active + 1} of ${shown.length}`}
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            className="lightbox__btn lightbox__close"
            aria-label="Close"
            onClick={close}
          >
            <i className="bi bi-x-lg" aria-hidden="true"></i>
          </button>
          <button
            type="button"
            className="lightbox__btn lightbox__prev"
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
          >
            <i className="bi bi-chevron-left" aria-hidden="true"></i>
          </button>
          <img
            key={active}
            src={shown[active].src}
            alt={shown[active].alt}
            className="lightbox__img"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            className="lightbox__btn lightbox__next"
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
          >
            <i className="bi bi-chevron-right" aria-hidden="true"></i>
          </button>
          <p className="lightbox__count">
            {active + 1} / {shown.length}
          </p>
        </div>
      )}
    </>
  );
};

export default Member;
