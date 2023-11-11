import React from 'react';
import './src/css/navbar.css'

function NavBar(){

    return (
        <div className='navbar'>
            <ul className='navbar-list'>
                <li onClick={() => {
                    var element = document.getElementById('Home');
                    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
                }}>Home</li>
                <li onClick={() => {
                    var element = document.getElementById('Experience');
                    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
                }}>Experience</li>
                <li onClick={() => {
                    var element = document.getElementById('Skills');
                    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
                }}>Skills</li>
                <li onClick={() => {
                    var element = document.getElementById('Projects');
                    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
                }}>Projects</li>
                <li onClick={() => {
                    var element = document.getElementById('Publications');
                    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
                }}>Publications</li>
                <li onClick={() => {
                    var element = document.getElementById('Education');
                    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
                }}>Education</li>
                <li><a href='Mohd_Sadiq_Resume.pdf'>Resume</a></li>
                <li onClick={() => {
                    var element = document.getElementById('Contact');
                    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
                }}>Contact</li>
            </ul>
        </div>
    );
}



export default NavBar;
