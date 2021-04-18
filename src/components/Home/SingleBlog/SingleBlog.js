import React from 'react';
import { useParams } from 'react-router';
import post1 from '../../../images/post1.jpg';
import post2 from '../../../images/post2.jpg';
import post3 from '../../../images/post3.jpg';
import './SingleBlog.css'

const SingleBlog = () => {
    const { id } = useParams()

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
    const intId = parseInt(id)
    const blog = blogs.find(blog => blog.id === intId);

    return (
        <div className='single-blog-section'>
            <div className='single-blog'>
                <img className='single-blog-img' src={blog.img} alt="" />
            </div>
            <div className='single-blog-detail'>
                <h5 className='brand-color'>{blog.title}</h5>
                <h2 className='brand-color'>{blog.name}</h2>
                <p className='font'>{blog.quote}</p>
                <p className='font'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit voluptate sapiente officiis explicabo distinctio? Eligendi voluptatibus deserunt fugiat ab quaerat tempora praesentium amet nemo quo nesciunt laboriosam incidunt totam similique, vero saepe id ipsa veniam architecto nihil dicta? Delectus incidunt quisquam vitae commodi explicabo enim recusandae obcaecati deleniti et modi dolor, corrupti quo sed eaque eum. Rem, corrupti officia est nam quisquam, beatae nobis doloremque necessitatibus eos, numquam explicabo natus aliquam. Sint id tempore iusto, quidem quo repellendus praesentium ex expedita dolor quia quod, delectus enim, sequi nobis ipsa.</p>
            </div>

        </div>
    );
};

export default SingleBlog;