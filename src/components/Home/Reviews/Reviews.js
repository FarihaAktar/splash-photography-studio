import { useEffect, useState  } from 'react';
import ReviewList from '../ReviewList/ReviewList';
import './Review.css'


const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://ancient-headland-31699.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])
    return (
        <div className='reviews-section'>
            <h5 className='brand-color'>Testimonials</h5>
            <h2 className='logo'>Happy Clients</h2>
            <div>
                {
                    reviews.map(review => <ReviewList key={review._id} review={review}></ReviewList>)
                }
            </div>
            
        </div>
    );
};

export default Reviews;