import React from 'react';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Reviews from '../Reviews/Reviews'
import BlogPost from '../BlogPost/BlogPost';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <BlogPost></BlogPost>
            <Footer></Footer>
        </div>
    );
};

export default Home;