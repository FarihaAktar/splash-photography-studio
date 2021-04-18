import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Bookings from '../Bookings/Bookings';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './BookingList.css'
import Sidebar from '../Sidebar/Sidebar';


const BookingList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [booking, setBooking] = useState([]);

    useEffect(() => {
        fetch('https://ancient-headland-31699.herokuapp.com/bookings?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setBooking(data)
            })
    }, [])
    // console.log(booking)
    return (
        <div className='book-section'>
            <Sidebar></Sidebar>
            {/* <ul className='customer-ul'>
                <li>
                    <h3 className='logo'>SPlASH</h3>
                </li>
                <li>
                    <Link to='/book' className='font'><FontAwesomeIcon className='add-icon' icon={faCartArrowDown} /> Book</Link>
                </li>
                <li>
                    <Link to='/bookingList' className='font'><FontAwesomeIcon className='add-icon' icon={faThList} /> Booking List</Link>
                </li>
                <li>
                    <Link to='/review' className='font'><FontAwesomeIcon className='add-icon' icon={faCommentDots} /> Review</Link>
                </li>
            </ul> */}
            <div className='booking-list-section'>
                <h5 className='font'>Your Booked-Service List</h5>
                {
                    booking === undefined || booking.length === 0 ?
                        <h3 className='font'>Book Your Package Today!!</h3>
                        :
                        <div className='booking-list-item'>
                            {
                                booking.map(pd => <Bookings pd={pd}></Bookings>)
                            }
                        </div>
                }
            </div>

        </div>
    );
};

export default BookingList;