import React, { useContext } from 'react';
import './Review.css'
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) =>{
        const review = {...loggedInUser, data}
        
        fetch('https://ancient-headland-31699.herokuapp.com/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Thank You For Your Review.')
                }
            })
    }
    return (
        <div className='review-section'>
            <Sidebar></Sidebar>
            <div className='add-review'>
                <h5 className='font'>Review</h5>
                <p>Give us your feedback</p>
                <form className='review-form' onSubmit={handleSubmit(onSubmit)}>
                    <label className='font' htmlFor="exampleInputTitle">Name</label>
                    <br />
                    <input className='input-text' name="name" placeholder='Enter Name' required ref={register} />
                    <br />

                    <label className='font' htmlFor="exampleInputDescription">Company's Name</label>
                    <br />
                    <input className='input-text' name="company" placeholder="Enter Company's Name" ref={register} />
                    <br />

                    <label className='font' htmlFor="exampleInputDescription">Description</label>
                    <br />
                    <input className='input-text' name="description" placeholder='Enter Description' required ref={register} />
                    <br />
                    <br />
                    <input className='font add-review-btn' type="submit" />
                </form>
            </div>

        </div>
    );
};

export default Review;