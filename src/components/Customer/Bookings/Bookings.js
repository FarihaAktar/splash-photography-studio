import React from 'react';

const Bookings = ({ pd }) => {
    return (
        <div className='booking-list'>
            <div>
                
                <h6>Your Order is <span className='status font'>{pd.status}</span></h6>
            </div>
            <h4 className='font'>{pd.booking.title}</h4>
            <p className='font'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id nemo, nihil cumque voluptatem modi odio voluptatibus illum asperiores praesentium hic.</p>
        </div>

    );
};

export default Bookings;