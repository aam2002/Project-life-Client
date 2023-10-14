import React, { useState } from 'react';
import './Navbar.css';
import DarkMode from './Darkmode/DarkMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Navbar() {

    const [isMobile, setIsMobile] = useState(false);
    return (
        <>
        <div className='nav-container'>
        <div className='navbar'>
            <div className='navlogo'><img src='logoblack.png' alt='logo' /></div>

            <div className='nav-list-item'>
                <ul>
                    <li> Home</li>
                    <li>Content</li>
                    <li>Our Purpose</li>
                    <li>Our Team</li>
                </ul>
            </div>
            <div className='darkmode'><DarkMode /></div>
            <button className='toggle-button' onClick={() => setIsMobile(!isMobile)} >
                {isMobile ? (<FontAwesomeIcon icon={faTimes} size='lg' />) : (<FontAwesomeIcon icon={faBars} size='lg'/>)}
            </button>


        </div>
        </div>
        </>
        
    );
}

export default Navbar;