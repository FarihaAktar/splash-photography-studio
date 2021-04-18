import React from 'react';
import './Blog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Blog = ({ blog }) => {
    return (
        <div className='blog'>
            <div className='blog-img'>
                <img src={blog.img} alt="" />

            </div>
            <Link to={'/singleBlog/' + blog.id} className='blog-link'>
                <div className='blog-detail'>
                    <h6 className='brand-color'>{blog.title}</h6>
                    <h3 className='brand-color'>{blog.name}</h3>
                    <p>{blog.quote}</p>
                    <h5 className='logo'>Read More <FontAwesomeIcon className='service-icon' icon={faArrowRight} /></h5>
                </div>
            </Link>
        </div>
    );
};

export default Blog;