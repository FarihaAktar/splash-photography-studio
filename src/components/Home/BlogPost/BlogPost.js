import React from 'react';
import post1 from '../../../images/post1.jpg'
import post2 from '../../../images/post2.jpg'
import post3 from '../../../images/post3.jpg'
import './BlogPost.css'


const BlogPost = () => {

    return (
        <div className='blog-post-section'>
            <div className='blog-title'>
                <h6 className='brand-color'>Read</h6>
                <h2 className='logo'>News & Blog</h2>
            </div>
            <div className='blog-posts'>
                <div className='blog'>
                    <div className='blog-img'>
                        <img src={post1} alt="" />

                    </div>
                    <div className='blog-detail'>
                        <h6 className='brand-color'>Fashion</h6>
                        <h3 className='brand-color'>Fashion Glamour</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis sunt animi facere aspernatur, aliquam fugit blanditiis fuga similique, adipisci inventore cupiditate eligendi eius?</p>
                    </div>

                </div>
                <div className='blog'>
                    <div className='blog-img'>
                        <img src={post2} alt="" />

                    </div>
                    <div className='blog-detail'>
                        <h6 className='brand-color'>Wedding</h6>
                        <h3 className='brand-color'>Wedding Glam</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis sunt animi facere aspernatur, aliquam fugit blanditiis fuga similique, adipisci inventore cupiditate eligendi eius?</p>
                    </div>

                </div>
                <div className='blog'>
                    <div className='blog-img'>
                        <img src={post3} alt="" />

                    </div>
                    <div className='blog-detail'>
                        <h6 className='brand-color'>Model</h6>
                        <h3 className='brand-color'>Fashionista</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem perspiciatis sunt animi facere aspernatur, aliquam fugit blanditiis fuga similique, adipisci inventore cupiditate eligendi eius?</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default BlogPost;