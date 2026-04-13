import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const RootLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
            <footer>Footer</footer>
        </div>
    );
};

export default RootLayout;