import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import Manage from '../Manage/Manage';

const ManageService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://ancient-headland-31699.herokuapp.com/manageService')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div className='order-list'>
            <ul className='admin-ul'>
                <li>
                    <h3 className='logo'>SPlASH</h3>
                </li>
                <li>
                    <Link to='/addService' className='font'><FontAwesomeIcon className='add-icon' icon={faPlus} /> Add Service</Link>
                </li>
                <li>
                    <Link to='/makeAdmin' className='font'><FontAwesomeIcon className='add-icon' icon={faUserPlus} /> Make Admin</Link>
                </li>
                <li>
                    <Link to='/orderList' className='font'><FontAwesomeIcon className='add-icon' icon={faListAlt} /> Order List</Link>
                </li>
                <li>
                    <Link to='/manageService' className='font'><FontAwesomeIcon className='add-icon' icon={faThLarge} /> Manage Services</Link>
                </li>
            </ul>
            <div>
                <h4 className='font brand-color'>Manage Services</h4>
                <table className='table'>
                    <thead className='thead'>
                        <tr>
                            <th>Title</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            services.map(service => <Manage key={service._id} service={service}></Manage>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageService;