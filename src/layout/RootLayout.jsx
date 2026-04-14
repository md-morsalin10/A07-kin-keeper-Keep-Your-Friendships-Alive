import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <ScrollRestoration />
            <Footer/>
        </div>
    );
};

export default RootLayout;