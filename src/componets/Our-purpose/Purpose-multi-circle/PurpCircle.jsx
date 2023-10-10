import React from 'react';
import './PurpCircle.css';

function PurpCircle() {
  const numRows = 5; 
  const numCols = 15; 
  const circles = [];

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      circles.push(<div key={`${row}-${col}`} className="circle"></div>);
    }
    circles.push(<br key={`br-${row}`} />);
  }

  return <div>{circles}</div>;
}

export default PurpCircle;