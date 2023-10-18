import React, { useContext } from "react";
import "./Our-purpose.css";
import Dots from "../Dots/dots";
import DataContext from "../context/DataContext";
function OurPurpose() {
  const { data } = useContext(DataContext);
  console.log(data);
  return (
    <div className="purpose">
      <div className="purpose-text">
        <p className="purpose-heading">Our Purpose</p>
        <p className="purpose-para">Our Purpose Behind This Website</p>
      </div>
      <div className="purpose-box">
        <div className="p-p">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus
            quos, beatae deleniti ut delectus consequuntur, pariatur quae
            nostrum est aliquam tenetur quisquam repudiandae. Omnis iure illo
            dolorum exercitationem possimus? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Odio, minus quos, beatae deleniti ut
            delectus consequuntur, pariatur quae nostrum est aliquam tenetur
            quisquam repudiandae. Omnis iure illo dolorum exercitationem
            possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Odio, minus quos, beatae deleniti ut.
            <br />
            <br />
            
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
              minus quos, beatae deleniti ut delectus consequuntur, pariatur
              quae nostrum est aliquam tenetur quisquam repudiandae. Omnis iure
              illo dolorum exercitationem possimus? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Odio, minus quos, beatae deleniti ut
              delectus consequuntur, pariatur quae nostrum est aliquam tenetur
              quisquam repudiandae. Omnis iure illo dolorum exercitationem
              possimus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Odio, minus quos, beatae deleniti ut.
           
          </p>
        </div>
        <div className="purpose-img">
          <img src="logoblack.png" alt="" />
        </div>
      </div>
      <div className="purpose-circle">
        <Dots rows={5} columns={15} />
      </div>
    </div>
  );
}

export default OurPurpose;
