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
                <Landing></Landing>
                <section>
                    <Experience>
                    </Experience>
                </section>
                <section>
                    <Skills>
                        
                    </Skills>
                </section>
                <section>
                    <Projects>
                    </Projects>
                </section>
                <section>
                    <Publications>
                    </Publications>
                </section>
                <section>
                    <Education></Education>
                </section>
                <section>
                    <Contact></Contact>
                </section>
            </div>
        );
    }
}


export default Home;
