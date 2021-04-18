import React from 'react';
import './ReviewList.css'

const ReviewList = ({ review }) => {
    return (
        <div className='review'>
            <div className='review-img'>
                <img src={review.photo} alt=""/>
            </div>
            <div className='text-align-left'>
                <h3 className='brand-color'>{review.data.name}</h3>
                <h6 className='font'>Customer</h6>
                <p className='font'>{review.data.description}</p>
            </div>
        </div>
    );
};

export default ReviewList;