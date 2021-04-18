import React from 'react';
import './Gallery.css'
import photo1 from '../../../images/photo1.jpg';
import photo2 from '../../../images/photo2.jpg';
import photo3 from '../../../images/photo3.jpg';
import photo4 from '../../../images/photo4.jpg';
import photo5 from '../../../images/photo5.jpg';
import photo6 from '../../../images/photo6.jpg';

const Gallery = () => {
    return (
        <div className='gallery-section'>
            <h2 className='brand-color'>Gallery</h2>
            <div className='gallery'>
                <img src={photo1} alt="" />
                <img src={photo4} alt="" />
                <img src={photo2} alt="" />
                <img src={photo3} alt="" />
                <img src={photo6} alt="" />
                <img src={photo5} alt="" />
            </div>
        </div>
    );
};

export default Gallery;