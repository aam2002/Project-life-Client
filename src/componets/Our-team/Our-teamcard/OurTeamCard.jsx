import React from 'react'
import './OurTeamCard.css'


function OurTeamCard({ image, name, role, connect }) {
  return (
    <div className="card">
      <div className='team-img'>
        <img src={image} alt='porfile-pic' />
        </div>
        <div className='textinfo'>
          <h6 className='H4-tag'>{name}</h6>
          <p className='role-color'>{role}</p>
          <button className='connect-button'><a href={connect} className='button-link' >connect </a> </button>
      </div>
    </div>
  )
}

export default OurTeamCard


