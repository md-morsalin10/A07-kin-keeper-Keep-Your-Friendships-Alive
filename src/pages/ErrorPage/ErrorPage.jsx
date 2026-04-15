import React from 'react';
import { FaArrowLeft, FaHome } from 'react-icons/fa';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>

            <div>
                <div className="animate-bounce mb-2">
                    <div className="w-44 h-44 rounded-full bg-base-200 border-4 border-green-100 hover:border-green-400 flex flex-col items-center justify-center shadow-sm relative mx-auto">
                        <span className="text-5xl font-extrabold text-[#244D3F] leading-none">404</span>
                        <span className="text-xs font-bold text-[#5a9e7c] tracking-widest mt-1">NOT FOUND</span>
                        <span className="absolute top-2 right-3 w-3 h-3 rounded-full bg-[#244D3F] opacity-15"></span>
                        <span className="absolute bottom-3 left-2 w-2 h-2 rounded-full bg-[#244D3F] opacity-20"></span>
                    </div>
                </div>
            </div>

            <div>
                <div className="card bg-base-100 shadow-sm border border-base-200 mb-4">
                    <div className="card-body flex-row items-center gap-4 py-4 px-5">
                        <div className="w-12 h-12 rounded-full bg-white hover:bg-green-200 border-2  border-green-200 flex items-center justify-center text-xl shrink-0">
                            ?
                        </div>
                        <div className="text-left">
                            <p className="font-bold text-sm text-base-content">Unknown Friend</p>
                            <p className="text-[12px] text-base-content/40 mb-2">last seen: never</p>
                            <div className="flex gap-2">
                                <span className="badge badge-sm bg-gray-200 text-red-500 border-none font-bold gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                                    lost
                                </span>
                                <span className="badge badge-sm bg-gray-200 text-purple-500 border-none font-semibold">
                                    PAGE
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold text-center++-  text-[#244D3F] mb-3">
                This page got lost
            </h1>
            <p className="text-base-content/50 text-base max-w-sm text-center mb-5">
                Looks like this page wandered off and we can't track it down.
                Let's get you back to your connections
            </p>

            <div className="flex gap-3 flex-wrap justify-center mb-8">
                <Link
                    to="/"
                    className="btn bg-[#244D3F] hover:bg-transparent  text-white hover:text-[#244D3F] border-green-200 hover:border-green-400 rounded-xl px-6 font-semibold"
                >
                    <FaArrowLeft /> Go Back
                </Link>
                <Link
                    to="/"
                    className="flex justify-center items-center btn btn-outline border-green-100 text-[#244D3F] hover:bg-white hover:border-green-400 hover:text-[#244D3F] rounded-xl px-6 font-semibold"
                >
                    <FaHome /> Home
                </Link>
            </div>
        </div>
    );
};

export default ErrorPage;