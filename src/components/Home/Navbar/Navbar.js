import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav>
                <h4 className='logo'>SPLASH</h4>
                <ul className='ul'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    <li>
                        <Link to="/orderList">Admin</Link>
                    </li>
                    <li>
                        <Link to="/">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/users">Gallery</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;