import React from 'react';

const CardSection = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 container mx-auto py-5 p-8 '>
            <div 
            className='bg-white flex flex-col justify-center items-center border border-gray-50 py-10 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]'>
                <h2 className='text-[#244D3F] text-3xl font-semibold'>20</h2>
                <p className='text-[#64748B]'>Total Friends</p>
            </div>
            <div 
            className='bg-white flex flex-col justify-center items-center border border-gray-50 py-10 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]'>
                <h2 className='text-[#244D3F] text-3xl font-semibold'>3</h2>
                <p className='text-[#64748B]'>On Track</p>
            </div>
            <div
             className='bg-white flex flex-col justify-center items-center border border-gray-50 py-10 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]'>
                <h2 className='text-[#244D3F] text-3xl font-semibold'>6</h2>
                <p className='text-[#64748B]'>Need Attention</p>
            </div>
            <div 
            className='bg-white flex flex-col justify-center items-center border border-gray-50 py-10 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]'>
                <h2 className='text-[#244D3F] text-3xl font-semibold'>12</h2>
                <p className='text-[#64748B]'>Interactions This Month</p>
            </div>
        </div>
    );
};

export default CardSection;