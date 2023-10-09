import React from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons';



function Home() {
  return (
    <div  className='homebox'>

        <div className='text-box'><h2 className='bhagvat-heading'>Bhagvat Gita:</h2>
        <h2>Your path to </h2>
        <h2>divinity</h2>
        <p className='para-text'> read and discover inner peace</p>
        <div className='scroll-button'><span>scroll to read</span> <FontAwesomeIcon icon={faCaretDown} /></div>  
        </div>

        <div className='image'></div>

        



    </div>
  )
}

export default Home