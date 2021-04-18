import React from 'react';
import post1 from '../../../images/post1.jpg'
import post2 from '../../../images/post2.jpg'
import post3 from '../../../images/post3.jpg'
import Blog from '../Blog/Blog';
import './BlogPost.css'


const BlogPost = () => {


    const blogs = [
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Fashion Glamour',
            title: 'Fashion',
            img: post1,
            id: 1
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Wedding glam',
            title: 'Wedding',
            img: post2,
            id: 2
        },
        {
            quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
            name: 'Ema Jhon Watson',
            title: 'Model',
            img: post3,
            id: 3
        }
    ]
    return (
        <div className='blog-post-section'>
            <div className='blog-title'>
                <h6 className='brand-color'>Read</h6>
                <h2 className='logo'>News & Blog</h2>
            </div>
            <div className='blog-posts'>
                {
                    blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
                }
            </div>
        </div>
    );
};

export default BlogPost;