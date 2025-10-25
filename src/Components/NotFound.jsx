import React from 'react';
import image from '../assets/image/error-404.png'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

const NotFound = () => {
    return (
        <div>
            <Navbar/>
            <img src={image} alt="" />
            <Footer/>
        </div>
    );
};

export default NotFound;