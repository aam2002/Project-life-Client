import React from 'react'
import './Our-purpose.css'
import PurpCircle from './Purpose-multi-circle/PurpCircle'

function OurPurpose() {
    return (
        <div className='purpose'>
            <div className='purpose-text'>
            <h2>Our Purpose</h2>
            <p className='purpose-para'>our purpose behind this website</p>
           </div>
           <div className='purpose-box'>
           <div className='p-p'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus quos, beatae deleniti ut delectus consequuntur, pariatur quae nostrum est aliquam tenetur quisquam repudiandae. Omnis iure illo dolorum exercitationem possimus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus quos, beatae deleniti ut delectus consequuntur, pariatur quae nostrum est aliquam tenetur quisquam repudiandae. Omnis iure illo dolorum exercitationem possimus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus quos, beatae deleniti ut.
                <br/><br/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus quos, beatae deleniti ut delectus consequuntur, pariatur quae nostrum est aliquam tenetur quisquam repudiandae. Omnis iure illo dolorum exercitationem possimus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus quos, beatae deleniti ut delectus consequuntur, pariatur quae nostrum est aliquam tenetur quisquam repudiandae. Omnis iure illo dolorum exercitationem possimus?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, minus quos, beatae deleniti ut.
                </p>
                </p>
            </div>
            <div className='purpose-img'><img src='logoblack.png' alt='' /></div>
            </div> 
            <div className='purpose-circle'><PurpCircle/></div>
         


        </div>
    )
}

export default OurPurpose