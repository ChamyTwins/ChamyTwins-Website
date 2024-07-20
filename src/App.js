import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Admin/Login.js";
import DashboardAdmin from "./Admin/Dashboard.js";
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
          <Route exact path="/loginAdmin" element={<Login />} />
          <Route exact path="/dashboardAdmin" element={<DashboardAdmin />} />
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/caresheet" element={<Caresheet />} />
          <Route exact path="/chamytwinsMember" element={<Member />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
