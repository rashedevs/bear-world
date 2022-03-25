import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <h1>Bear World</h1>
            <h3>your beloved teddy <FontAwesomeIcon icon={faCat} /></h3>
        </div>
    );
};

export default Header;
