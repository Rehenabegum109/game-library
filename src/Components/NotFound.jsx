import React from 'react';
import image from '../assets/image/error-404.png'
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';
import { Link } from 'react-router';

const NotFound = () => {
    return (
       <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={image} alt=''/>
      <Link to='/' className='btn btn-primary'>Go to back home</Link>
      
    </div>
    );
};

export default NotFound;