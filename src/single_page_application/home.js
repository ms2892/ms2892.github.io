import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './global_components/navbar/navbar';
import Landing from './components/landing/landing';
import Experience from './components/experience/experience';
import './src/css/home.css'
import Projects from './components/projects/projects';
import Publications from './components/publications/publications';
import Education from './components/education/education';
import Contact from './components/contact/contact';
import Skills from './components/skills/skills';

class Home extends React.Component {
    render() {
        return (
            <div className='homepage-canvas'>
                <NavBar></NavBar>
                <section>
                    <Landing></Landing>
                </section>
                <section id='Experience'>
                    <Experience>
                    </Experience>
                </section>
                <section id='Skills'>
                    <Skills>
                    </Skills>
                </section>
                <section id='Projects'>
                    <Projects>
                    </Projects>
                </section>
                <section id='Publications'>
                    <Publications>
                    </Publications>
                </section>
                <section id='Education'>
                    <Education></Education>
                </section>
                <section id='Contact'>
                    <Contact></Contact>
                </section>
            </div>
        );
    }
}


export default Home;
