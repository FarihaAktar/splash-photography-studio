import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Bookings from '../Bookings/Bookings';
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

    return (
        <div className='book-section'>
            <Sidebar></Sidebar>
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