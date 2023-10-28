import React from 'react';
import './team.css'
import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';

function Team() {
  return (
    <div className='teambigdiv'>
      <div className='teamdiv'>
        <p className="team-p">Our Team</p>
        <div className="app-container">
          <HorizontalScrollCarousel />
        </div>
        <p className="team-para">Thanks for visiting</p>

      </div>

    </div>
  )
}


const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  return (
    <section ref={targetRef} className="carousel-container">
      <div className="carousel-content">
        <motion.div style={{ x }} className="card-container">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div key={card.name} className="card">
      <div className='team-img'>
        <img src={card.image} alt='porfile-pic' />
      </div>
      <div className='textinfo'>
        <h6 className='H4-tag'>{card.name}</h6>
        <p className='role-color'>{card.role}</p>
        <button className='connect-button'><a href={card.connect}>connect </a> </button>
      </div>
    </div>

  );
};



const cards = [
  {
    image:"https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    name: "Aman Soni",
    role: "Backend developer",
    connect: " https://julikray.github.io/ ",
  },
  {
    image:"https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    name: "Sohail bhaiya",
    role: "Graphic Desginer",
    connect: " https://julikray.github.io/ ",
  },
  {
    image:"https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    name: "Aman Choudhary",
    role: "UI/UX Designer",
    connect: " https://julikray.github.io/ ",
  },
  {
    image:"https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    name: "Shreyash",
    role: "UI/UX Designer",
    connect: " https://julikray.github.io/ ",
  },
  {
    image:"https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    name: "Deepa dii",
    role: "Graphic Desginer",
    connect: " https://julikray.github.io/ ",
  },
  {
    image:"https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    name: "Juli Kumari",
    role: "Frontend developer",
    connect: " https://julikray.github.io/ ",
  },

];

export default Team