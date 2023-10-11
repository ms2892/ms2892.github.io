import React from 'react';
import PropTypes from 'prop-types';
import './src/css/contact.css';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <center><hr width='80%'></hr></center>
                <div className='contact-container'>
                    <p>Wish to collaborate? Feel free to get in touch...</p>
                    <br></br>
                    <p>msadiq074@gmail.com</p>
                    <br></br>
                    <a href="https://www.github.com/ms2892" class="fa fa-github social-media-icon"></a>
                    <a href="https://www.instagram.com/optimisticabsurd" class="fa fa-instagram social-media-icon"></a>
                    <a href="https://www.linkedin.com/in/mohd-sadiq-cam/" class="fa fa-linkedin social-media-icon"></a>
                </div>
            </div>
        );
    }
}

Contact.propTypes = {};

export default Contact;
