import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import './Manage.css';

const Manage = ({ service }) => {

    const deleteService = (id) => {
        fetch("https://ancient-headland-31699.herokuapp.com/delete/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log("deleted successfully", result);
                alert("Product is deleted successfully!")
            })
    }
    return (
        <tr>
            <td>{service.title}</td>
            <td>{service.price}</td>
            <td className='delete' onClick={()=> deleteService(service._id)}><FontAwesomeIcon className='add-icon' icon={faTrashAlt} /></td>
        </tr>
    );
};

export default Manage;