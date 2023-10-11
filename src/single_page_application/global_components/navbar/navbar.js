import React from 'react';
import PropTypes from 'prop-types';
import './src/css/navbar.css'

class NavBar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <ul className='navbar-list'>
                    <li><a href='#Home'>Home</a></li>
                    <li><a href='#Experience'>Experience</a></li>
                    <li><a href='#Skills'>Skills</a></li>
                    <li><a href='#Projects'>Projects</a></li>
                    <li><a href='#Publications'>Publications</a></li>
                    <li><a href='#Education'>Education</a></li>
                    <li><a href='Mohd_Sadiq_Resume.pdf'>Resume</a></li>
                    <li><a href='#Contact'>Contact</a></li>
                </ul>
            </div>
        );
    }
}


export default NavBar;
