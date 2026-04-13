import { use } from "react";
import SingleFriendCard from "./SingleFriendCard";

const friendsPromise = fetch("/data.json").then(res=> res.json())

const AllFriendsCard = () => {
   const friendsData = use(friendsPromise);
   
    
    return (
        <div className="container mx-auto p-9 md:p-6 mt-8">
            <hr className="text-gray-200 pb-8" />
            <h1 className="text-[#1F2937] font-semibold text-2xl py-2">Your Friends</h1>
            <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    friendsData.map(friend=> <SingleFriendCard friend={friend} key={friend.id}></SingleFriendCard>)
                }
            </div>
        </div>
    );
};

export default AllFriendsCard;