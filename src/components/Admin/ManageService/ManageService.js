import React, { useEffect, useState } from 'react';
import Manage from '../Manage/Manage';
import Sidebar from '../../Customer/Sidebar/Sidebar';

const ManageService = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('https://ancient-headland-31699.herokuapp.com/manageService')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            })
    }, [])
    return (
        <div className='order-list'>
            <Sidebar></Sidebar>
            <div>
                <h4 className='font brand-color'>Manage Services</h4>
                <table className='table'>
                    <thead className='thead'>
                        <tr>
                            <th>Title</th>
                            <th>price</th>
                            <th>Action</th>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            services.map(service => <Manage key={service._id} service={service}></Manage>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageService;