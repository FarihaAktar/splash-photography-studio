import React, { useContext, useEffect, useState } from 'react';
import './Book.css'
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faThList } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import StripePayment from '../StripePayment/StripePayment';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

// const stripePromise = loadStripe('pk_test_51IgndICKzt85luqDFLBHmJNZn9RfATx5Nqzd55mekKuhlrJE19nvngZRNCitEcTyiN161BWN6VKQYxyCLUHriEUQ00KAbcon3P');


const Book = () => {
    const {id} = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState({});

    useEffect(() => {
        fetch('https://ancient-headland-31699.herokuapp.com/book/' + id )
            .then(res => res.json())
            .then(data => setBookings(data[0]))
    }, []);

    const handleBookingPlace = (data, card) =>{
        const status = 'Pending';
        const booking = {...loggedInUser, booking: bookings, data, card, status: status}

        fetch('https://ancient-headland-31699.herokuapp.com/addBooking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Booking is Placed Successfully')
                }
            })
    }

    return (
        <div className='book-section'>
            <Sidebar id={id}></Sidebar>
            <div className='payment-section'>
                <h3 className='font'>Pay:</h3>
                <StripePayment handleBookingPlace={handleBookingPlace}></StripePayment>
            </div>
        </div>
    );
};

export default Book;