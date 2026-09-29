import React, { useEffect, useRef } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Homepage from "./User/Homepage.js";
import Caresheet from "./User/Caresheet.js";
import Member from "./User/Member.js";
import "./style/login.css";
import "./style/dashboard.css";
import "./style/theme.css";
import "./style/navbar.css";
import "./style/homepage.css";
import "./style/footer.css";
import "./style/caresheet.css";
import "./style/member.css";

// On page change: jump to the top (or to the #hash target) and let AOS
// pick up the new page's elements
const RouteEffects = () => {
  const { pathname, hash } = useLocation();
  const prevPath = useRef(null);

  useEffect(() => {
    // Same page, only the #hash changed: the browser already smooth-scrolls
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    const target = hash && document.getElementById(hash.slice(1));
    if (target) {
      target.scrollIntoView({ behavior: "instant" });
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
    AOS.refreshHard();
  }, [pathname, hash]);

  return null;
};

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-out-cubic",
      offset: 60,
      disable: () =>
        window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    });
  }, []);

  return (
    <div>
      <BrowserRouter basename="/ChamyTwins-Website">
        <RouteEffects />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/caresheet" element={<Caresheet />} />
          <Route path="/chamytwinsMember" element={<Member />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
