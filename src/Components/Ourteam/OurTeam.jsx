import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import mswctj from "../../images/mswctj.jpg";
import Discord from "../../images/Discord-icon.png";
import Insta from "../../images/Instagram-icon.png";
import Facebook from "../../images/Facebook-icon.png";
import Github from "../../images/Github-icon.png";
// import Linkedin from "../../images/linkedin-Icon.png";
// import Whatsapp from "../../images/Whatsapp-icon.png";
import "./OurTeam.css";
const Example = () => {
  return (
    <div id="our-team" >
      {/* <div className="w-[80vw] flex mx-auto mt-20 flex-col">
        <p className="content-h">Our Team</p>
        <p className="content-p">Meet Our Team Members</p>
      </div> */}
      <HorizontalScrollCarousel />
    </div>
  );
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["43.9%", "-43.3%"]);

  return (
    <section ref={targetRef} className="relative h-[700vh] w-[80vw] mx-auto">
      <div className="sticky top-0 flex h-screen  items-center overflow-hidden flex-col">
        <div className="w-[80vw] flex mx-auto mt-24 flex-col">
          <p className="content-h">Our Team</p>
          <p className="content-p">Meet Our Team Members</p>
        </div>
        <motion.div style={{ x }} className="flex gap-4 motion-div">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return window.screen.availWidth > 768 ? (
    <div
      key={card.id}
      className="flex items-center justify-center group h-[750px] w-[950px] overflow-hidden mx-auto"
    >
      <div className="about-card-parent w-[100%] flex justify-center mx-auto">
        <div className="about-card w-[90%] h-[500px] mx-auto ">
          <div
            className="about-card-image w-[328px] h-[361px] rounded-[16px] "
            style={{
              backgroundImage: `url(${mswctj}) `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="flex items-center">
            <div>
              <p className="about-card-name ">{card.name}</p>
              <p className="about-card-degination">Frontend Developer</p>
              <div className="flex flex-row">
                <ul className="flex flex-row w-[300px] justify-between my-4">
                  <li>
                    <a href=".">
                      <img width="40px" src={Discord} alt="" />{" "}
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img width="40px" src={Insta} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img width="40px" src={Facebook} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href=".">
                      <img width="40px" src={Github} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-row w-[250px] justify-between">
                <button className="about-card-btn mb-4  rounded-lg">
                  Portfolio
                </button>
                <button className="about-card-btn mb-4  rounded-lg">
                  Resume
                </button>
              </div>
              <div>
                <button className="about-card-btn mb-4  rounded-lg">
                  Connect
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div
      key={card.id}
      className=" about-card-parent flex flex-col items-center justify-center group  overflow-hidden mx-auto"
    >
      <div
        className="about-card-image w-[80%] h-[361px] rounded-[16px] mx-auto "
        style={{
          backgroundImage: `url(${mswctj}) `,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex items-center justify-center">
        <div className="flex justify-center flex-col items-center mt-3">
          <p className="about-card-name ">{card.name}</p>
          <p className="about-card-degination">Frontend Developer</p>
          <div className="flex flex-col items-center justify-center">
            <button className="about-card-btn my-2 rounded-lg">
              {" "}
              Portfolio
            </button>
            <button className="about-card-btn my-2 rounded-lg">Resume</button>
            <button className="about-card-btn my-2 rounded-lg">Connect</button>
          </div>

          <div className="flex flex-row">
            <ul className="flex flex-row w-[70vw] justify-between my-4">
              <li>
                <a href=".">
                  <img width="40px" src={Discord} alt="" />{" "}
                </a>
              </li>
              <li>
                <a href=".">
                  <img width="40px" src={Insta} alt="" />
                </a>
              </li>
              <li>
                <a href=".">
                  <img width="40px" src={Facebook} alt="" />
                </a>
              </li>
              <li>
                <a href=".">
                  <img width="40px" src={Github} alt="" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
const cards = [
  {
    name: "Aman soni",
  },
  {
    name: "Md. Sohil",
  },
  {
    name: "Juli kumari Roy",
  },
  {
    name: "Paradox",
  },
  {
    name: "Deepa tatti",
  },
  {
    name: "Aman Choudhary",
  },
  {
    name: "random",
  },
];