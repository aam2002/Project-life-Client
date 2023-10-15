import React from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Dots from "../Dots/dots";

function Hero() {
  return (
    <>
      <div className="homebox">
        <div className="flex justify-between align-middle mx-auto relative">
          <div className="flex w-[80vw] justify-between mx-auto">
            <div className="left-box flex align-middle justify-center">
              <div className="flex flex-column  ">
                <h2 className="bhagvat-heading">Bhagvat Gita:</h2>
                <p className="H2-tag">
                  Your path to <br /> divinity{" "}
                </p>

                <p className="para-text"> read and discover inner peace</p>
                <div className="scroll-button">
                  <span>scroll to read</span>{" "}
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
            </div>
            <div className="right-box">
              <div className="cover-img ">
                <img src="logoblack.png" alt="cover" />
              </div>
            </div>
          </div>
          <div className="absolute bottom-[-193px]">         
            <Dots rows={15} columns={5} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
