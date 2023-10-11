import React from 'react';
import PropTypes from 'prop-types';
import './src/css/navbar.css'

class NavBar extends React.Component {
    render() {
        return (
            <div className='navbar'>
                <ul className='navbar-list'>
                    <li>Home</li>
                    <li>Experience</li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Publications</li>
                    <li>Education</li>
                    <li>Resume</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}


export default NavBar;
