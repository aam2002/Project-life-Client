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
  const totalVerses = 8;
  const verses = [
    "Verse 1 content goes here.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus dolores, ipsum inventore dicta cupiditate. Aspernatur in iusto labore quis molestiae esse minus recusandae dolores error dolorum tempore eveniet delectus, nesciunt perspiciatis ullam at, maiores sunt sapiente ipsum. Dolor voluptates aliquam in, iste dolorem nesciunt quam velit. Sapiente vel, error facere perspiciatis inventore atque ullam suscipit velit hic, non expedita! Inventore iure quasi dolore ab obcaecati? Perferendis quam, ullam iste, corporis, aspernatur tempore quibusdam iure quas hic excepturi explicabo fugit enim obcaecati. Quod doloribus quo dolor facilis quisquam quasi quidem voluptates impedit adipisci eius omnis, pariatur tempora possimus consectetur ab aspernatur debitis inventore sequi vitae molestias! Necessitatibus esse odit, et eveniet provident cum cupiditate corrupti ipsam magnam, modi incidunt vero nesciunt cumque eius quas alias ut. Quasi corrupti quis, vero voluptatibus beatae alias expedita? Quisquam quasi totam aliquid iste repellendus recusandae illum debitis aut facere, hic incidunt quam? Vitae amet nobis, ipsam quidem temporibus fuga harum sapiente laborum itaque! Tenetur qui consectetur quas incidunt illum amet aperiam, omnis accusantium, explicabo molestiae, neque voluptas harum. Est nesciunt at recusandae, quis, atque amet dignissimos expedita minima iste quo, repellat ratione sequi ad quidem neque incidunt iusto? Sunt voluptatem ratione esse expedita repudiandae nostrum iste nam minima, illum ipsa quo saepe in hic est temporibus suscipit sed deleniti eos accusamus modi ipsam asperiores voluptatibus ducimus culpa. Possimus, modi eaque similique impedit accusantium consequuntur repudiandae aut a ea suscipit libero quibusdam aspernatur, nihil incidunt blanditiis, fugiat perferendis! Velit provident est ad reiciendis dolore adipisci nobis officia tempora, harum quod consequuntur dolor fugiat. Rerum culpa, amet at pariatur similique, animi expedita enim tempore dolorum voluptatum sequi error dolor vitae ratione aliquid beatae, quidem nesciunt. Consequatur aperiam illo ipsam, voluptatibus consectetur delectus qui, tempora excepturi minus repellat, rem laboriosam! Tenetur, iste porro dolores esse suscipit nesciunt, veritatis id nam natus officiis dignissimos sed commodi neque. Doloribus autem iusto quasi sint cumque porro adipisci quidem temporibus, necessitatibus veritatis ipsam quos fugiat omnis beatae illum deserunt doloremque iure architecto reprehenderit, dolorem eveniet quis! Eum dicta velit sint sequi sapiente iusto ipsam necessitatibus consequuntur rerum! Mollitia tenetur sunt quibusdam eveniet non facere provident iure veniam quia quam reiciendis, ex amet id, eius, quaerat dolores. Dicta iusto eius illum neque laboriosam fugit quod mollitia suscipit provident velit, voluptates ab, perferendis culpa dolorum optio alias tempore rem autem consectetur officiis sit maxime consequatur. Totam dicta quibusdam impedit debitis nulla, maiores dolore nisi placeat, iusto culpa reiciendis laudantium amet laborum voluptatibus delectus harum, in illo commodi doloremque exercitationem nobis et voluptatum eaque. Architecto, molestiae quis quod eveniet temporibus tempora! Provident quasi fugiat consequatur atque corrupti earum molestias? Dignissimos accusamus debitis, alias non sequi eos ipsam unde corrupti possimus ipsa impedit corporis quo adipisci deleniti soluta dolor totam, nulla maxime eum facere minima! Blanditiis ratione itaque, laborum neque quae natus tenetur vero, eos explicabo odio nesciunt debitis doloribus cum ducimus provident temporibus inventore? Eligendi officia odio et quo veniam cumque magni quos incidunt, libero saepe tempore natus laborum adipisci fuga iure consequuntur molestiae eos laboriosam ipsum praesentium ducimus aut. Earum eaque mollitia tenetur a magnam tempora cupiditate officia fugit architecto, sint minus? Magni ea molestiae dicta, distinctio eveniet sint quasi ipsum vero dolorum, pariatur cupiditate. Asperiores corporis eum provident sint dolorem dolores eaque nobis cupiditate soluta voluptatum blanditiis, ipsam tempore nemo laudantium? Fuga reprehenderit quis quae eos facere iure, at a maiores veritatis fugiat eum repellat in earum iusto soluta recusandae distinctio nam exercitationem non accusamus placeat quia, necessitatibus nihil animi? Repellendus sint laboriosam quisquam ab quidem optio explicabo consectetur rem, animi veritatis cum in totam, ratione deserunt soluta voluptatibus iusto minima molestiae esse error suscipit atque quas doloremque? Impedit voluptas illum, deserunt repellat, ratione molestias eaque quam, delectus nesciunt facere unde illo deleniti nemo sit qui voluptate quos debitis aliquid! Sequi, quaerat qui assumenda iusto iure voluptas atque amet non accusamus accusantium sed explicabo, quidem blanditiis natus. Asperiores, obcaecati. Quibusdam magni inventore laboriosam necessitatibus ea consequatur maxime quia id. Quae soluta quam veniam laborum nulla aliquid voluptatum placeat ipsa dolorum vero assumenda debitis explicabo quidem possimus quibusdam consequuntur, in porro omnis voluptatibus? Quam sunt magni quos modi aliquid ex inventore quis recusandae atque. Nobis suscipit tenetur, distinctio sequi numquam quas culpa ratione vero inventore quisquam? Laudantium debitis quis odio, natus sit ratione officia aspernatur, ullam quod, fugiat error quia molestias dolorum autem culpa. Amet dolorem necessitatibus totam esse natus, sit ullam neque animi dignissimos corrupti aut assumenda id, odit eum, accusamus debitis! Velit laborum nostrum illo consequatur odio minus dolores repudiandae nihil quibusdam sunt exercitationem non voluptas provident deserunt aspernatur doloremque placeat sequi, corrupti necessitatibus quaerat reprehenderit amet? Impedit fugiat quas itaque, consectetur nihil, excepturi rerum tenetur animi illo mollitia deleniti pariatur ipsam accusamus tempora nisi magni dolor architecto reiciendis. Optio dolor nobis inventore qui harum nisi blanditiis perspiciatis totam!",
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dignissimos voluptate enim deserunt tenetur laudantium
                  voluptatem, animi numquam earum nobis, saepe doloribus non!
                  Modi voluptas totam voluptatum sequi hic quae temporibus!
                </p>
                <p className="english">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tenetur sunt excepturi ipsa neque numquam exercitationem,
                  sapiente deserunt ut dolores voluptatum, accusamus odit
                  similique dignissimos impedit nemo delectus officia adipisci
                  amet?
                </p>
                <p className="explaination">{verses[currentVerse - 1]}</p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Contentpage;
