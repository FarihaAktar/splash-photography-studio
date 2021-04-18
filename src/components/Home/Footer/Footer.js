import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='about'>
                <h4>About Us</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi aperiam totam numquam quae cupiditate ea voluptatibus soluta, aliquid neque quia.</p>
            </div>
            <div className='feature'>
                <h4>Features</h4>
                <ul>
                    <li><a href="">About Us</a></li>
                    <li><a href=""></a>Testimonials</li>
                    <li><a href=""></a>Terms of Service</li>
                    <li><a href=""></a>Contact Us</li>
                </ul>
            </div>
            <div className='contact'>
                <h4>Contact US</h4>
                <h6>EMAIL: yellowfariha@gmail.com</h6>
                <h6>PHONE: 0427427472</h6>
                <div>
                    <a href="https://www.facebook.com/">
                        <FontAwesomeIcon className='brand-icon' icon={faFacebookF} />
                    </a>
                    <a href="https://www.instagram.com/">
                        <FontAwesomeIcon className='brand-icon' icon={faInstagram} />

                    </a>
                    <a href="https://twitter.com/">
                        <FontAwesomeIcon className='brand-icon' icon={faTwitter} />

                    </a>
                    <a href="https://bd.linkedin.com/">
                        <FontAwesomeIcon className='brand-icon' icon={faLinkedin} />

                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;