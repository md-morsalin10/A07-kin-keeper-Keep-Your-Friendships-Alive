import React from 'react';
import { IoMdTime } from 'react-icons/io';
import { RiHome4Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
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
                        <li className='mr-2'><NavLink
                            className={({ isActive }) => isActive ? 'bg-[#244D3F] text-white' : 'text-[#64748B]'}
                            to={"/"}><RiHome4Line />Home</NavLink></li>

                        <li className='mr-2'><NavLink
                            className={({ isActive }) => isActive ? 'bg-[#244D3F] text-white' : 'text-[#64748B]'}
                            to={"/timeline"}><IoMdTime/>Timeline</NavLink></li>

                        <li><NavLink
                            className={({ isActive }) => isActive ? 'bg-[#244D3F] text-white' : 'text-[#64748B]'}
                            to={"/stats"}><TfiStatsUp/>Stats</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;