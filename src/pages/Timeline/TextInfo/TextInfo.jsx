import React from 'react';
import { IoMdText } from 'react-icons/io';

const TextInfo = ({frd}) => {
    return (
        <div className='flex items-center gap-4 border my-6 p-5 rounded-2xl border-gray-300 bg-base-200'>
                    <div>
                        <IoMdText className='h-8 w-8 text-yellow-500'  />
                    </div>
                    <div>
                        <h2 className='text-[#244D3F] font-semibold'>Text <span className='text-[#64748B] font-medium text-[14px]'>With {frd.name}</span></h2>
                        <p className='text-[#64748B]'>{new Date().toLocaleDateString()}</p>
                    </div>
                </div>
    );
};

export default TextInfo;