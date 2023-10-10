import React from 'react';
import './HomeMultiCricle.css';

function HomeMultiCricle() {
  const numRows = 12; // Number of rows
  const numCols = 5; // Number of columns
  const circles = [];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      circles.push(<div key={`${row}-${col}`} className="circle"></div>);
    }
    if (row < numRows - 1) {
      circles.push(<br key={`br-${row}`} />);
    }
  }

  return <div>{circles}</div>;
}

export default HomeMultiCricle;