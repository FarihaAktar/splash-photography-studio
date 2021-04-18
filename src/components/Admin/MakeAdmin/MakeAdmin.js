import React from 'react';
import './MakeAdmin.css'
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';

const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch('https://ancient-headland-31699.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Admin added successfully')
                }
            })
    }
    return (
        <div className='service-section'>
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
            <div className='add-service-section'>
                <h5 className='font'>Make Admin</h5>
                <form className='admin-form' onSubmit={handleSubmit(onSubmit)}>
                    <label className='font' htmlFor="exampleInputEmail">Email :</label>
                    <br />
                    <br/>
                    <input className='input-text-admin font' name="email" placeholder='Enter Email' required ref={register} />
                    <input className='font add-admin-btn' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default MakeAdmin;