import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-[1280px] mx-auto px-4 lg:px-8'>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;