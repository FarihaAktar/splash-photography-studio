import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css';
import { UserContext } from '../../../App';

const Sidebar = ({ id }) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser)
    return (
        <ul className='customer-ul'>
            <li>
                <h3 className='logo'>SPlASH</h3>
            </li>
            <li className='user'>
                <h6>{loggedInUser.name}</h6>
            </li>
            <li>
                <Link to={'/book/' + id} className='font'><FontAwesomeIcon className='add-icon' icon={faCartArrowDown} /> Book</Link>
            </li>
            <li>
                <Link to='/bookingList' className='font'><FontAwesomeIcon className='add-icon' icon={faThList} /> Booking List</Link>
            </li>
            <li>
                <Link to='/review' className='font'><FontAwesomeIcon className='add-icon' icon={faCommentDots} /> Review</Link>
            </li>
        </ul>

    );
};

export default Sidebar;