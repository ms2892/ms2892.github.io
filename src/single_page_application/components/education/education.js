import React from 'react';
import PropTypes from 'prop-types';
import './src/css/education.css'

class Education extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='education-wrapper'>
                <h1 className='section-title'>Education</h1>
                <div className='education-container'>
                    <div className="left">
                        
                        <div className="education-logo" style={{background:'url(assets/cam_logo.png)',backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>

                        </div>
                        
                        <div className="education-content">
                            <h2 className="education-title">University of Cambridge</h2>
                            <p className="education-date">2022 - 2023</p>
                            <p className='education-degree'>Masters in Machine Learning and Machine Intelligence</p>
                        </div>

                    </div>
                    <div className="right">
                        
                        <div className="education-logo" style={{background:'url(assets/jmi_logo.png)',backgroundSize:'contain',backgroundRepeat:'no-repeat',backgroundPosition:'center'}}>

                        </div>

                        <div className="education-content">
                            <h2 className="education-title">Jamia Millia Islamia</h2>
                            <p className="education-date">2017 - 2021</p>
                            <p className='education-degree'>Bachelors in Technology in Computer Engineering</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

Education.propTypes = {};

export default Education;
