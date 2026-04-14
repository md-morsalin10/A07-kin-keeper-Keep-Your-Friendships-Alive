import React from 'react';
import { Link } from 'react-router';

const SingleFriendCard = ({ friend }) => {
    // console.log(friend);
    const {id, name, days_since_contact, picture, tags, status } = friend

    return (
        <Link to={`/${id}`} className='border border-gray-50 rounded-2xl shadow-2xl bg-white p-5'>
            <div className='flex justify-center items-center'>
                <div className='flex justify-center items-center h-24 w-24 rounded-full overflow-hidden border-2 border-gray-100 mb-4'>
                    <img src={picture} className='h-full w-full object-cover' alt="" />
                </div>
            </div>
            <div className='text-center space-y-1.5'>
                <h3 className='text-[#1F2937] text-xl font-semibold'>{name}</h3>
                <p className='text-[14px] text-[#64748B]'>{days_since_contact}d ago</p>
                <div>
                    {tags.map((tag, ind) => <div key={ind} className="badge mx-1 bg-green-200 text-green-500 font-semibold badge-success">{tag}</div>)}
                </div>
                <div>
                    <p className={`${status === "overdue" ? "badge badge-error": status === "almost due" ? "badge badge-warning" : "badge badge-success"}`}>{status}</p>
                </div>
            </div>
        </Link>
    );
};

export default SingleFriendCard;