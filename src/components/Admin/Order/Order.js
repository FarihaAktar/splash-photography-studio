import React, { useState } from 'react';
import './Order.css'

const Order = ({ order }) => {

    const handleStatus = (e, id) =>{
        // console.log(e.target.value, id)
        const status = e.target.value;
        const statusChange = { status }
        // console.log(statusChange)
        fetch(`https://ancient-headland-31699.herokuapp.com/update/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(statusChange)
        })
        .then(res => res.json())
        .then(data => {
            console.log('updated', data);
            alert("Product is updated successfully!")
        })
    }


    return (
        <>
            <tr>
                <td>{order.data.name}</td>
                <td>{order.data.email}</td>
                <td>{order.booking.title}</td>
                <td>Credit Card</td>
                <td>
                    <form onChange={(e)=>handleStatus(e,order._id)}  >
                        <select  id="status" name="status">
                            <option value="pending">Pending</option>
                            <option value="done">Done</option>
                            <option value="ongoing">On Going</option>
                        </select>
                    </form>
                </td>
            </tr>
        </>
    );
};

export default Order;