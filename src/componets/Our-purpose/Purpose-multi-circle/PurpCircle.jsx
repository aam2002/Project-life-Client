import React from "react";
import "./PurpCircle.css";

function PurpCircle() {
  const renderdDots = () => {
    const dots = [];
    for (let y = 0; y <= 4; y++) {
      for (let x = 0; x < 15; x++) {
        dots.push(<div className="circle"  key={dots.length}></div>);
      }
      dots.push(<br key={dots.length}/>);
    }
    return dots;
  };
  return (
    <div>
      {renderdDots()}
    </div>
  );
}

export default PurpCircle;
