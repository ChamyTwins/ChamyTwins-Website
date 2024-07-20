import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./User/Homepage.js";
import Caresheet from "./User/Caresheet.js";
import Member from "./User/Member.js";
import "./style/login.css";
import "./style/dashboard.css";
import "./style/navbar.css";
import "./style/homepage.css";
import "./style/footer.css";
import "./style/caresheet.css";
import "./style/member.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/caresheet" element={<Caresheet />} />
          <Route path="/chamytwinsMember" element={<Member />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
