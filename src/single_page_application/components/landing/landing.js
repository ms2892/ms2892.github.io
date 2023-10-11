import React from 'react';
import PropTypes from 'prop-types';
import './src/css/landing.css'

class Landing extends React.Component {

    render() {
        return (
            <div className='landing-container'>
                <div className='sadiq-image'>
                </div>
                <div className='content'>
                    <h1 className='content-title'>
                        MOHD<br />SADIQ
                    </h1>
                    <p className='content-body'>
                        Specialist in Machine Learning with 2+ years of experience and a Masters Degree from University of Cambridge. 
                        Experienced in deploying end to end systems in production on cloud based platforms around the field on Computer Vision and Reinforcement Learning.
                        Looking forward to collaborate on various data science and machine learning projects. Feel free to scroll down to read more about me.
                    </p>
                    <i class="fa fa-solid fa-arrow-down arrow-style"></i>
                </div>
            </div>
        );
    }
}

export default Landing;
