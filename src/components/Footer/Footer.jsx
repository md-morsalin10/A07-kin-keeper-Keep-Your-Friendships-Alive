import React from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
            <div className='container mx-auto text-center pt-20 pb-10 space-y-3 p-3'>
                <h2 className='text-white text-5xl font-bold'>KeenKeeper</h2>
                <p className='text-white opacity-85 text-[15px]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <div>
                    <p className='text-white font-medium text-xl pb-3'>Social Links</p>
                    <div className='flex gap-2 justify-center items-center'>
                        <span className='p-2 bg-white rounded-full'><FaInstagram /></span>
                        <span className='p-2 bg-white rounded-full'><FaFacebook /></span>
                        <span className='p-2 bg-white rounded-full'><FaXTwitter /></span>
                    </div>
                </div>
            </div>
            <div className='container mx-auto text-center md:text-balance flex flex-col  md:flex-row justify-between py-7'>
                <div >
                    <p className='text-[#FAFAFA] opacity-50 text-[14px]'>© 2026 KeenKeeper. All rights reserved.</p>
                </div>
                <div className='flex gap-3 justify-center items-center text-[#FAFAFA] opacity-50 text-[14px]'>
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;