import React, { useEffect, useContext } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Dots from "../Dots/dots";
import DataContext from "../context/DataContext";
import coverimage from "../../images/cover-copy-2.png";

function Hero() {
  const { setData } = useContext(DataContext);
  useEffect(() => {
    try {
      fetch("https://pink-extinct-basket-clam.cyclic.app/api/chapter")
        .then((response) => response.json())
        .then((finalRes) => {
          if (finalRes.success === true) {
            setData(finalRes);
          }
        });
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <div className="main">

      <div className="homelanding w-[100vw]">
        <div className="homemain w-[80vw] mx-auto">
          <div className="headingbox flex flex-col box-border md:w-[500px] w-[337px] ">
            <h2 className="bhagvat-heading">Bhagvat Gita:</h2>
            <p className="H2-tag">
              Your path to <br /> divinity{" "}
            </p>

            <p className="para-text"> Read and Discover Inner Peace</p>
            <div className="scroll-button">
              <span>Scroll to Read</span> <FontAwesomeIcon icon={faCaretDown} />
            </div>
          </div>
          <div
            className="right-box"
            style={{
              backgroundImage: `url(${coverimage}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="w-[100px] dots-container">
            <Dots rows={10} columns={5} />
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Hero;