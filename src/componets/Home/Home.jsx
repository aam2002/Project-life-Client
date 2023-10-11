import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Dots from "../Dots/dots";

function Home() {
  return (
    <div className="homebox">
      <div className="homebox1 relative">
        <div className="home-div2 ">
          <div>
            <h2 className="bhagvat-heading">Bhagvat Gita:</h2>
            <p className="H2-tag">
              Your path to <br /> divinity{" "}
            </p>

            <p className="para-text"> read and discover inner peace</p>
            <div className="scroll-button">
              <span>scroll to read</span> <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div className="home-line">
            <Dots rows={12} columns={5} />
          </div>
        </div>
        <img className="home-line-img mx-auto" src="line.png" alt="" />
      </div>
    </div>
  );
}

export default Home;
