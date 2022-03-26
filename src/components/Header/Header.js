import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h2>Bear World</h2>
            <h6>your beloved teddy <FontAwesomeIcon icon={faCat} /></h6>
        </div>
    );
};

export default Header;
