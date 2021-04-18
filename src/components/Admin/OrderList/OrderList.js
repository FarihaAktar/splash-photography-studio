import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../App';
import Order from '../Order/Order';
import './OrderList.css'

const OrderList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://ancient-headland-31699.herokuapp.com/orderlist?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                setBookings(data)
                console.log(data)
            })
    }, [])

    return (
        <div className='order-list-section'>

            { bookings?.length === 0 ?
                <div className='non-admin'>
                    <h3 className='font'>Only Admin Can access this page </h3>
                    <Link to='/'><h5 className='font brand-color'>Home</h5></Link>
                </div>

                :
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
                        <h4 className='font brand-color'>Order List</h4>
                        <table className='table'>
                            <thead className='thead'>
                                <tr>
                                    <th>Name</th>
                                    <th>Email ID</th>
                                    <th>Service</th>
                                    <th>Pay With</th>
                                    <th>Status</th>
                                </tr>

                            </thead>
                            <tbody>
                                {
                                    bookings.map(order => <Order key={order._id} order={order}></Order>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    );
};

export default OrderList;