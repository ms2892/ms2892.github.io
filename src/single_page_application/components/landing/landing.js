import React from 'react';
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
                        Machine Learning specialist with 3 years of<br />experience and a Cambridge Masters in Machine Learning.
                    </p>
                    <a href="https://www.github.com/ms2892" class="fa fa-github social-media-icon"></a>
                    <a href="https://www.instagram.com/optimisticabsurd" class="fa fa-instagram social-media-icon"></a>
                    <a href="https://www.linkedin.com/in/mohd-sadiq-cam/" class="fa fa-linkedin social-media-icon"></a>
                </div>
            </div>
        );
    }
}

export default Landing;
