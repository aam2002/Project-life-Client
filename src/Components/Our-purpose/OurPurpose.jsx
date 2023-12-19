import React, { useContext } from "react";
import "./Our-purpose.css";
import Dots from "../Dots/dots";
import DataContext from "../context/DataContext";
function OurPurpose() {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <div id="our-purpose" className="our_purpose">
      <div className="purpose">
        <div className="purpose-text">
          <p className="purpose-heading">Our Purpose</p>
          <p className="purpose-para">Our Purpose Behind This Website</p>
        </div>
        <div className="purpose-bigbox">
          <div className="purpose-box">
            <div className="p-p">
              <p>
                The purpose of our website is to provide a profound and
                accessible resource for the timeless teachings and wisdom of the
                Bhagavad Gita. We are dedicated to making this sacred text
                available to people of all backgrounds, aiming to be a source of
                spiritual enlightenment, introspection, and inspiration. Through
                a carefully curated collection of content, including
                translations, commentaries, articles, videos, and interactive
                resources, our mission is to offer a deep and meaningful
                exploration of the Bhagavad Gita's profound messages.
                <br />
                In a world filled with challenges and uncertainties, the
                Bhagavad Gita's wisdom serves as a guiding light, offering
                insights into the complexities of life, duty, and spirituality.
                Our website is designed to facilitate a better understanding of
                these ancient teachings, enabling individuals to apply them to
                their daily lives. Whether you are a seeker of spiritual truth,
                a scholar of religious texts, or simply curious about the wisdom
                contained within the Bhagavad Gita, our platform is here to
                welcome you.
                <br />
                We believe that the Bhagavad Gita holds the key to personal
                growth, inner peace, and a profound connection with the
                universal truths it conveys. It is a timeless scripture that
                transcends boundaries and speaks to the human spirit on a
                profound level. Our website strives to be a sanctuary where
                individuals can come together to explore, learn, and reflect on
                the eternal wisdom of the Bhagavad Gita. We hope that, through
                our efforts, we can help people find solace, guidance, and
                profound meaning in the verses of this sacred text, and in doing
                so, contribute to a more enlightened and harmonious world.
              </p>
            </div>
            <div className="purpose-circle">
              <Dots rows={5} columns={15} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurPurpose;
