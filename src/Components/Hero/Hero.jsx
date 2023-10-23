import React, { useEffect, useContext } from "react";
import "./Hero.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Dots from "../Dots/dots";
import DataContext from "../context/DataContext";

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
      {/* <div className="homemain">
        <div className="homebox">
          <div className="flex md:w-[80vw] justify-between mx-auto text-img md:flex-row flex-col-reverse w-[100vw] gap-24">
            <div className="left-box flex align-middle justify-center">
              <div className="flex flex-column align-middle justify-center">
                <h2 className="bhagvat-heading">Bhagvat Gita:</h2>
                <p className="H2-tag">
                  Your path to <br /> divinity{" "}
                </p>

                <p className="para-text"> Read and Discover Inner Peace</p>
                <div className="scroll-button">
                  <span>Scroll to Read</span>{" "}
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
            </div>
            <div className="right-box">
              <div className="cover-img ">
                <img src="cover-copy-2.png" alt="cover" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[100px] mx-auto dots-container">
          <Dots rows={10} columns={5} />
        </div>
      </div> */}



      {/* JKroy code change here */}
      <div className="homemain">
        <div className="homeboxdiv">
          <div className="homebox">
            <div className="homeboxheading">
              <h2 className="bhagvat-heading">Bhagvat Gita:</h2>
              <p className="H2-tag">
                Your path to <br /> divinity{" "}
              </p>
              <p className="para-text"> Read and Discover Inner Peace</p>
              <div className="scroll-button">
                <span>Scroll to Read</span>{" "}
                <FontAwesomeIcon icon={faCaretDown} />
              </div>
            </div>
            <div className="right-box">
              <img src="cover-copy-2.png" alt="cover" />
            </div>
          </div>


          <div className="dots-container">
            <Dots rows={8} columns={5} />
          </div>
        </div>




      </div>



      <div className="homemain2">  
      <div className="dots-container2">
        <Dots rows={2} columns={5} />
      </div></div>












    </>
  );
}

export default Hero;
