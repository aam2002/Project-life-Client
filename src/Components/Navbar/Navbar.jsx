import React, { useState } from "react";
import "./Navbar.css";
import DarkMode from "./Darkmode/DarkMode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
// import logoLight from "./logo.png";
// import logoDark from "./logoblack.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="nav-container">
        <div className="navbar">
          <div className="navlogo">
            <img src="ylogo.png" alt="logo" />
            {/* <img
              className="nav_logo"
              src={
                document.body.getAttribute("data-theme") === "dark"
                  ? logoDark
                  : logoLight
              }
              alt="Logo"
            /> */}
          </div>

          <div className={isMobile ? "nav-list-item-mobile" : "nav-list-item"}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#content">Content</a>
              </li>
              <li>
                <a href="#our-purpose">Our Purpose</a>
              </li>
              <li>
                <a href="#our-team">Our Team</a>
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
              <FontAwesomeIcon className="fonticon" icon={faTimes} size="lg" />
            ) : (
              <FontAwesomeIcon className="fonticon" icon={faBars} size="lg" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;

