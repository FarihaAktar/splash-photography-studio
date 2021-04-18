import React from 'react';
import './MakeAdmin.css'
import { useForm } from "react-hook-form";
import Sidebar from '../../Customer/Sidebar/Sidebar';

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
            <Sidebar></Sidebar>
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