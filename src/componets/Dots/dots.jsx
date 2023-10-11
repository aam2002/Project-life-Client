import React from "react";
import "./dots.css";

function Dots({ rows, columns , section }) {
  const numRows = rows; // Number of rows
  const numCols = columns; // Number of columns
  const circles = [];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      circles.push(<div key={circles.length} className="dots"></div>);
    }
    circles.push(<br key={circles.length} />);
  }
console.log(section)
  return <div>{circles}</div>;
}
export default Dots;
