import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import OurTeamCard from "./Our-teamcard/OurTeamCard";

const OutTeam = () => {
  return (
    <div className="team">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-87%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] team ">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4 ">
          {cards.map((member, index) => (
            <OurTeamCard key={index} {...member} />
          ))}
        </motion.div>
      </div>
      <a href=""></a>
    </section>
  );
};

//

export default OutTeam;

const cards = [
  {
    image:
      "https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    name: "Aman Soni",
    role: "Backend developer",
    connect: " https://julikray.github.io/ ",
  },
  {
    image:
      "https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    name: "Sohail bhaiya",
    role: "Graphic Desginer",
    connect: " https://julikray.github.io/ ",
  },
  {
    image:
      "https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    name: "Aman Choudhary",
    role: "UI/UX Designer",
    connect: " https://julikray.github.io/ ",
  },
  {
    image:
      "https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    name: "Shreyash",
    role: "UI/UX Designer",
    connect: " https://julikray.github.io/ ",
  },
  {
    image:
      "https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    name: "Deepa dii",
    role: "Graphic Desginer",
    connect: " https://julikray.github.io/ ",
  },
  {
    image:
      "https://artriva.com/media/k2/items/cache/c889234799e865bbe90cee71f6cd2e53_XL.jpg",
    name: "Juli Kumari",
    role: "Frontend developer",
    connect: " https://julikray.github.io/ ",
  },
];
