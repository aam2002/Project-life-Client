// import React, { useState } from "react";
// import "./Contentpage.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faAngleLeft,
//   faAngleRight,
//   faCaretDown,
//   faArrowLeft,
// } from "@fortawesome/free-solid-svg-icons";
// import Layout from "../Layout/Layout";

// function Contentpage() {
//   const [currentVerse, setCurrentVerse] = useState(1);
//   const totalVerses = 8;
//   const verses = [
//     "Verse 1 content goes here.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus dolore maiores dolore nisi placeat, iusto culpa reiciendis laudantium amet laborum voluptatibus delectus harum, in illo commodi doloremque exercitationem nobis et voluptatum eaque. Architecto, molestiae quis quod eveniet temporibus tempora! Provident quasi fugiat consequatur atque corrupti earum molestias? Dignissimos accusamus debitis, alias non sequi eos ipsam unde corrupti possimus ipsa impedit corporis quo adipisci deleniti soluta dolor totam, nulla maxime eum facere minima! Blanditiis ratione itaque, laborum neque quae natus tenetur vero, eos explicabo odio nesciunt debitis doloribus cum ducimus provident temporibus inventore? Eligendi officia odio et quo veniam cumque magni quos incidunt, libero saepe tempore natus laborum adipisci fuga iure consequuntur  ",
//     "Verse 2 content goes here.",
//     "Verse 3 content goes here.",
//     "Verse 4 content goes here.",
//     "Verse 5 content goes here.",
//     "Verse 6 content goes here.",
//     "Verse 7 content goes here.",
//     "Summary heading goes herghjhgfjfhgje.",
//   ];
//   const handleVerseChange = (verse) => {
//     if (verse >= 1 && verse <= totalVerses) {
//       setCurrentVerse(verse);
//     }
//   };

//   return (
//     <>
//       <p></p>
//       <Layout>
//         <div className="contentbigbox1">
//           <div className="contentbigbox2">
//             <div className="arrowimg">
//               <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
//             </div>

//             <div className="contentverse">
//               <div className="verse-section1">
//                 <FontAwesomeIcon
//                   className="icon"
//                   icon={faAngleLeft}
//                   size="lg"
//                 />
//                 <span className="contentheading">
//                   Chapter-1 <FontAwesomeIcon icon={faCaretDown} />
//                 </span>
//                 <FontAwesomeIcon
//                   className="icon"
//                   icon={faAngleRight}
//                   size="lg"
//                 />
//               </div>
//               <div className="verse-section2">
//                 <FontAwesomeIcon
//                   className="icon2"
//                   icon={faAngleLeft}
//                   size="2xl"
//                   onClick={() => handleVerseChange(currentVerse - 1)}
//                 />
//                 <span className="verseheading">
//                   {currentVerse === totalVerses
//                     ? "Summary"
//                     : `VERSE ${currentVerse}`}
//                 </span>
//                 <FontAwesomeIcon
//                   className="icon2"
//                   icon={faAngleRight}
//                   size="2xl"
//                   onClick={() => handleVerseChange(currentVerse + 1)}
//                 />
//               </div>
//             </div>

//             <div className="contentdiv2">
//               <div className="contentText">
//                 <p className="sanskrit">
//                   <b>Sanskrit</b> Lorem ipsum dolor sit amet consectetur adipisicing elit.
//                   Dignissimos voluptate enim deserunt tenetur laudantium
//                   voluptatem, animi numquam earum nobis, saepe doloribus non!
//                   Modi voluptas totam voluptatum sequi hic quae temporibus!
//                 </p>
//                 <p className="english">
//                   <b>English</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   Tenetur sunt excepturi ipsa neque numquam exercitationem,
//                   sapiente deserunt ut dolores voluptatum, accusamus odit
//                   similique dignissimos impedit nemo delectus officia adipisci
//                   amet?
//                 </p>
//                 <p className="explaination">{verses[currentVerse - 1]}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Layout>
//     </>
//   );
// }

// export default Contentpage;


import React, { useState } from "react";
import "./Contentpage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faCaretDown,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Layout from "../Layout/Layout";

function Contentpage() {
  const [currentVerse, setCurrentVerse] = useState(1);
  
  const verses = [
    {
      sanskrit: "।। अथ प्रथमोऽध्यायः ।। धृतराष्ट्र उवाच धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः। मामकाः पाण्डवाश्चैव किमकुर्वत संजय।।1।।",
      english: "।। Then the first chapter ।। Dhritarashtra said, They gathered at Kurukshetra in the field of Dharma and were eager to fight. What did my Pandavas and I do, O Sanjaya?",
      explanation: "Explanation for verse 1 goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
    },
    {
      sanskrit: "संजय उवाच दृष्टवा तु पाण्डवानीकं व्यूढं दुर्योधनस्तदा। आचार्यमुपसंङगम्य राजा वचनमब्रवीत्।।2।।",
      english: "Sanjay said Then Duryodhana, seeing the army of the Pandavas in battle array. The king approached the teacher and said these words.",
      explanation: "Explanation for verse 2 goes here.",
    },
    
    {
      sanskrit: "पश्यैतां पाण्डुपुत्राणामाचार्य महतीं चमूम्। व्यूढां द्रुपदपुत्रेण तव शिष्येण धीमता।।3।।",
      english: "Behold, O teacher, this great army of the sons of Pandu. Arranged by your wise disciple the son of Drupada.",
      explanation: "Explanation for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
    },
    {
      sanskrit: "Sanskrit content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      english: "English content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      explanation: "Explanation for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
    },
    {
      sanskrit: "Sanskrit content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      english: "English content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      explanation: "Explanation for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
    },
    {
      sanskrit: "Sanskrit content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      english: "English content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      explanation: "Explanation for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
    },
    {
      sanskrit: "Sanskrit content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      english: "English content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      explanation: "Explanation for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
    },
    {
      sanskrit: "Sanskrit content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      english: "English content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      explanation: "Explanation for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
    },
    {
      sanskrit: "Sanskrit content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      english: "English content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      explanation: "Explanation for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
    },
    {
      sanskrit: "Sanskrit content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      english: "English content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      explanation: "Explanation for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
    },
    {
      sanskrit: "Sanskrit content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      english: "English content for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      explanation: "Explanation for summary goes here dfjhgfjkslhgshhhhhhhhshshshshshshshshshssssdfjkghseroihweoihrgtjerfdsaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.",
      img:"contentpageimg.png",
    },
  ];
  const totalVerses = verses.length;
  const handleVerseChange = (verse) => {
    if (verse >= 1 && verse <= totalVerses) {
      setCurrentVerse(verse);
    }
  };

  return (
    <>
      <p></p>
      <Layout>
        <div className="contentbigbox1">
          <div className="contentbigbox2">
            <div className="arrowimg">
              <FontAwesomeIcon icon={faArrowLeft} size="2xl" />
            </div>

            <div className="contentverse">
              <div className="verse-section1">
                <FontAwesomeIcon
                  className="icon"
                  icon={faAngleLeft}
                  size="lg"
                />
                <span className="contentheading">
                  Chapter-1 <FontAwesomeIcon icon={faCaretDown} />
                </span>
                <FontAwesomeIcon
                  className="icon"
                  icon={faAngleRight}
                  size="lg"
                />
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
                <p className="sanskrit">
                 {verses[currentVerse - 1].sanskrit}
                </p>
                <p className="english">
                  {verses[currentVerse - 1].english}
                </p>
                <p className="explaination">{verses[currentVerse - 1].explanation}</p>
              </div>
          
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contentpage;



