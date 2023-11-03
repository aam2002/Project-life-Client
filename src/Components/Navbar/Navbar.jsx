import React, { useState } from "react";
import "./Navbar.css";
import DarkMode from "./Darkmode/DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="nav-container">
        <div className="navbar">
          <div className="navlogo">
          
            <img src="logoblack.png" alt="logo" />
          </div>


          <div
            className={isMobile ? "nav-list-item-mobile" : "nav-list-item"}
          >
            <ul>
              <li>
                <Link to="/">Home</Link>{" "}
              </li>
              <li>
                <Link to="/content">Content</Link>
              </li>
              <li>
                <Link to="/our-purpose">Our Purpose</Link>
              </li>
              <li>
                <Link to="/our-team">Our Team</Link>
              </li>
              {isMobile && (
                <li className="switch-theme">
                  Switch theme
                  <DarkMode />
                </li>
              )}
            </ul>
          </div>
          <div className="darkmode">
            <DarkMode />
          </div>
          <button
            className="toggle-button"
            onClick={() => setIsMobile(!isMobile)}
          >
            {isMobile ? (
              <FontAwesomeIcon icon={faTimes} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faBars} size="lg" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
