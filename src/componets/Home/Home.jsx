import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import HomeMultiCricle from './Home-multi-circle/HomeMultiCricle';




function Home() {
  return (
    <div className='homebox'>

      <div className='homebox1'>

        <div className='home-div2'>
          <div className='text-box'><h2 className='bhagvat-heading'>Bhagvat Gita:</h2>
            <h2 className='H2-tag'>Your path to </h2>
            <h2 className='H2-tag'>divinity</h2>
            <p className='para-text'> read and discover inner peace</p>
            <div className='scroll-button'><span>scroll to read</span> <FontAwesomeIcon icon={faCaretDown} /></div>
          </div>
          <div className='home-img'><img src='logoblack.png' alt='' /></div>
        </div>

        <div className='home-line'>
          <HomeMultiCricle />
          <img className='home-line-img' src='line.png' alt='' />
        </div>

      </div>



    </div>
  )
}

export default Home