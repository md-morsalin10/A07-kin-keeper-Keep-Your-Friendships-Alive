import React from 'react';
import { FaVideo } from 'react-icons/fa';

const VideoDetails = ({ frd }) => {
    return (
        <div className='flex items-center gap-4 border my-6 p-5 rounded-2xl border-gray-300 bg-base-200'>
            <div>
                <FaVideo className='h-8 w-8 text-blue-500' />
            </div>
            <div>
                <h2 className='text-[#244D3F] font-semibold'>Video <span className='text-[#64748B] font-medium text-[14px]'>With {frd.name}</span></h2>
                <p className='text-[#64748B]'>{new Date().toLocaleDateString()}</p>
            </div>
        </div>
    );
};

export default VideoDetails;