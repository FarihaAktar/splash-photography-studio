import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Service = ({ service }) => {
    
    return (
        <Link to={`/book/` + service._id}>
            <div className='service'>
                <div className='service-img'>
                    <img src={service.imageURL} alt="" />
                </div>
                <div className='service-detail'>
                    <h4>{service.title}</h4>
                    <p>{service.description} </p>
                    <h5 className='logo'>Book Now</h5>
                    <FontAwesomeIcon className='service-icon' icon={faArrowRight} />
                </div>
            </div>
        </Link>
    );
};

export default Service;