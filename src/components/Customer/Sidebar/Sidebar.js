import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { UserContext } from '../../../App';

const Sidebar = ({ id }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://ancient-headland-31699.herokuapp.com/orderlist?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setData(data)
                console.log(data)
            })
    }, [])

    return (
        <ul className='customer-ul'>
            <li>
                <h3 className='logo'>SPlASH</h3>
            </li>
            <li className='user'>
                <h6>{loggedInUser.name}</h6>
            </li>
            { data.length === 0 ?
                <>
                    <li>
                        <Link to={'/book/' + id} className='font'><FontAwesomeIcon className='add-icon' icon={faCartArrowDown} /> Book</Link>
                    </li>
                    <li>
                        <Link to='/bookingList' className='font'><FontAwesomeIcon className='add-icon' icon={faThList} /> Booking List</Link>
                    </li>
                    <li>
                        <Link to='/review' className='font'><FontAwesomeIcon className='add-icon' icon={faCommentDots} /> Review</Link>
                    </li>

                </>
                :
                <>
                    <li>
                        <Link to={'/book/' + id} className='font'><FontAwesomeIcon className='add-icon' icon={faCartArrowDown} /> Book</Link>
                    </li>
                    <li>
                        <Link to='/bookingList' className='font'><FontAwesomeIcon className='add-icon' icon={faThList} /> Booking List</Link>
                    </li>
                    <li>
                        <Link to='/review' className='font'><FontAwesomeIcon className='add-icon' icon={faCommentDots} /> Review</Link>
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

                </>
            }
        </ul>

    );
};

export default Sidebar;