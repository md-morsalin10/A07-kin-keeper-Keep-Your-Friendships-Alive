import React from 'react';
import { GoPlus } from 'react-icons/go';

const HomeContent = () => {
    return (
        <div className='container py-16 mx-auto flex flex-col justify-center items-center text-center'>
            <div className='space-y-3'>
                <h2 className='text-4xl p-2 md:text-5xl font-bold text-[#1F2937]'>Friends to keep close in your life</h2>
                <p className='text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and <br /> nurture the  relationships that matter most.</p>
            </div>
            <div className='pt-4'>
                <button className='btn bg-[#244D3F] text-white'><GoPlus />Add a Friend</button>
            </div>
        </div>
    );
};

export default HomeContent;