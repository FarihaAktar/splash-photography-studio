import React, { useState } from 'react';
import './Services.css'
import { useEffect } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://ancient-headland-31699.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div className='services-section'>
            <div className='container'>
                <h2 className='logo'>My Services</h2>
                <div className='services'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;