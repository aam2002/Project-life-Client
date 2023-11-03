import React, { useState } from "react";
import "./InsideChapter.css";
import Dots from "../Dots/dots";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCaretDown,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";

function InsideChapter() {
  const [currentVerse, setCurrentVerse] = useState(1);
  const totalVerses = 8;
  const verses = [
    "Verse 1 content goes here.",
    "Verse 2 content goes here.",
    "Verse 3 content goes here.",
    "Verse 4 content goes here.",
    "Verse 5 content goes here.",
    "Verse 6 content goes here.",
    "Verse 7 content goes here.",
    "Summary heading goes herghjhgfjfhgje.",
  ];

  const handleVerseChange = (verse) => {
    if (verse >= 1 && verse <= totalVerses) {
      setCurrentVerse(verse);
    }
  };

  return (
    <>
      <div className="contentbigbox1 h-screen">
        <div className="contentbigbox2">
          <div className="arrowimg">
            <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
          </div>

          <div className="contentverse">
            <div className="verse-section1">
              <FontAwesomeIcon className="icon" icon={faAngleLeft} size="lg" />
              <span className="contentheading">
                Chapter-1 <FontAwesomeIcon icon={faCaretDown} />
              </span>
              <FontAwesomeIcon className="icon" icon={faAngleRight} size="lg" />
            </div>
            <div className="verse-section2">
              <FontAwesomeIcon
                className="icon2"
                icon={faAngleLeft}
                size="2xl"
                onClick={() => handleVerseChange(currentVerse - 1)}
              />
              <span className="verseheading">
                {currentVerse === totalVerses
                  ? "Summary"
                  : `VERSE ${currentVerse}`}
              </span>
              <FontAwesomeIcon
                className="icon2"
                icon={faAngleRight}
                size="2xl"
                onClick={() => handleVerseChange(currentVerse + 1)}
              />
            </div>
          </div>

          <div className="contentdiv2">
            <div className="contentText">
              <p>{verses[currentVerse - 1]}</p>
            </div>
            <div className="contentpageimg">
              <img src="contentpageimg.png" alt="img" />
            </div>
          </div>
        </div>
        <div className="contentcircleimg">
          <img
            src="https://cdn.discordapp.com/attachments/1038763137505169428/1169901294262165524/contentpagecirle.png?ex=6557167c&is=6544a17c&hm=3ffe74cff1ce59e51bf1f9f4ecff81afdd5c5cae170a32786a3198d774748606&"
            alt="circle"
          />
        </div>
        <div className="contentdots">
          <Dots rows={10} columns={5} />
        </div>
      </div>
    </>
  );
}

export default InsideChapter;