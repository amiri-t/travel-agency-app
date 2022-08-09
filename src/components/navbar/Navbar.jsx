import React from "react";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const [activeTab, setActiveTab] = useState("#");
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h3>
            Dream<span>FLY</span>
          </h3>
        </div>
        <ul className={toggle ? "nav-menu active" : "nav-menu"}>
          <a
            href="#"
            className="nav-item"
            id={activeTab === "#" ? "active" : "nav-item"}
            onClick={() => setActiveTab("#")}
          >
            Home
          </a>
          <a
            href="#plan-your-trip"
            className="nav-item"
            id={activeTab === "#plan-your-trip" ? "active" : "nav-item"}
            onClick={() => setActiveTab("#plan-your-trip")}
          >
            Plan Your Trip
          </a>
          <a
            href="#premium"
            className="nav-item"
            id={activeTab === "#premium" ? "active" : "nav-item"}
            onClick={() => setActiveTab("#premium")}
          >
            Premium
          </a>
          <a
            href="#contact"
            className="nav-item"
            id={activeTab === "#contact" ? "active" : "nav-item"}
            onClick={() => setActiveTab("#contact")}
          >
            Contact
          </a>
        </ul>
        <div className="mobile-menu" onClick={handleToggle}>
          {toggle ? (
            <FaTimes style={{ color: "white", cursor: "pointer" }} size={22} />
          ) : (
            <FaBars style={{ color: "white", cursor: "pointer" }} size={22} />
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
