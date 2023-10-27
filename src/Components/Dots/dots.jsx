import React from "react";
import "./dots.css";

function Dots({ rows, columns }) {
  const numRows = rows; 
  const numCols = columns; 
  const circles = [];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      circles.push(<div key={circles.length} className="dots"></div>);
    }
    circles.push(<br key={circles.length} />);
  }
  return <div className="">{circles}</div>;
}
export default Dots;
