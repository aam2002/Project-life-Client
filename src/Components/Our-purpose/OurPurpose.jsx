import React, { useContext } from "react";
import "./Our-purpose.css";
import Dots from "../Dots/dots";
import DataContext from "../context/DataContext";
function OurPurpose() {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <div className="our_purpose">
      <div className="purpose">
        <div className="purpose-text">
          <p className="purpose-heading">Our Purpose</p>
          <p className="purpose-para">Our Purpose Behind This Website</p>
        </div>
        <div className="purpose-bigbox">
          <div className="purpose-box">
            <div className="p-p">
              <p>
                The purpose of a Bhagavad Gita website is to serve as an online platform dedicated to the teachings, wisdom, and philosophy of the Bhagavad Gita, a sacred Hindu scripture.
                <br />
                This website aims to fulfill several important objectives:
                <br />
                <b>Education and Awareness:</b> The primary purpose is to educate people about the Bhagavad Gita's profound teachings. It provides accessible information about the scripture's context, content, and significance, making it available to a global audience.
                <br />
                <b>Spiritual Guidance:</b> The website offers guidance on how individuals can apply the Gita's teachings in their daily lives to attain spiritual growth, inner peace, and a sense of purpose.
                <br />
                <b>Cultural Preservation:</b> It plays a role in preserving and promoting the cultural and philosophical heritage of India, ensuring that the wisdom of the Gita is passed down to future generations.
                <br />
                <b>Inspiration and Motivation:</b> The website can inspire and motivate individuals to lead a purposeful life, emphasizing concepts like duty, righteousness, and self-realization.

              </p>
            </div>
            <div className="purpose-circle">
              <Dots rows={5} columns={15} />
            </div>
          </div>
          <div className="purpose-img">
            <img src="logoblack.png" alt="" />
          </div>
        </div>
      </div>

    </div>
  );
}

export default OurPurpose;
