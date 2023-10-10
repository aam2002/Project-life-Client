import React, { useRef, useState, useEffect } from 'react';
import OurTeamCard from './Our-teamcard/OurTeamCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

import './OurTeam.css'


function OurTeam() {
  const teamMembers = [
    {
      image: 'https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg',
      name: 'Aman Soni',
      role: 'Backend developer',
      connect: ' https://julikray.github.io/ ',
    },
    {
      image: 'https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg',
      name: 'Sohail bhaiya',
      role: 'Graphic Desginer',
      connect: ' https://julikray.github.io/ ',
    },
    {
      image: 'https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg',
      name: 'Aman Choudhary',
      role: 'UI/UX Designer',
      connect: ' https://julikray.github.io/ ',
    },
    {
      image: 'https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg',
      name: 'Shreyash',
      role: 'UI/UX Designer',
      connect: ' https://julikray.github.io/ ',
    },
    {
      image: 'https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg',
      name: 'Deepa dii',
      role: 'Graphic Desginer',
      connect: ' https://julikray.github.io/ ',
    },
    {
      image: 'https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg',
      name: 'Juli Kumari',
      role: 'Frontend developer',
      connect: ' https://julikray.github.io/ ',
    }

  ];


  const containerRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleMembers, setVisibleMembers] = useState([]);
  const [scrollDirection, setScrollDirection] = useState('next');

  const slidesToShow = 3;

  useEffect(() => {
    const startIndex = currentSlide * slidesToShow;
    const endIndex = startIndex + slidesToShow;
    setVisibleMembers(teamMembers.slice(startIndex, endIndex));
  }, [currentSlide, teamMembers, slidesToShow]);

  const scrollToLeft = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
      setScrollDirection('prev');
    }
  };

  const scrollToRight = () => {
    const maxSlides = Math.ceil(teamMembers.length / slidesToShow);
    if (currentSlide < maxSlides - 1) {
      setCurrentSlide(currentSlide + 1);
      setScrollDirection('next');
    }
  };

  return (
    <div className="team">
      <h2>Our Team</h2>
      <div className="slider-controls">
        <button className="scroll-button prev-button" onClick={scrollToLeft}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </button>
        <div className="card-slider-container" ref={containerRef}>
          <div className="card-slider">
            {visibleMembers.map((member, index) => (
              <OurTeamCard key={index} {...member} />
            ))}
          </div>
        </div>
        <button className="scroll-button next-button" onClick={scrollToRight}>
          <FontAwesomeIcon icon={faAngleRight} />
        </button>
      </div>
      <div
        className={`scroll-line ${scrollDirection === 'next' ? 'next-line' : 'prev-line'
          }`}
      ></div>

      <div className="team-thank">Thank for visiting</div>
    </div>

  );
}

export default OurTeam;