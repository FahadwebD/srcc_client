import React from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navbar from '../../../Shared/Navbar/Navbar';



import About from '../About/About';
import Carousel from '../AboutCarousel/Carousel';

const AboutUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            
            <About></About>
           <Carousel></Carousel>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;