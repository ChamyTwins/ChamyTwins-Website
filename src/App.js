import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter basename="/ChamyTwins-Website">
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
