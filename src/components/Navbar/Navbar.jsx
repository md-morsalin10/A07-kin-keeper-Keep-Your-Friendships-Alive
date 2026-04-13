import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='bg-base-100 shadow-sm'>
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <h3 className='text-[#1F2937] text-xl font-extrabold'>Keen<span className='text-[#244D3F] font-bold'>Keeper</span></h3>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink 
                        className={({isActive})=> isActive && 'bg-green-500'}
                        to={"/"}>Home</NavLink></li>
                        
                        <li><NavLink to={"/trending"}>Trending</NavLink></li>
                        <li><NavLink to={"/stats"}>Stats</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;