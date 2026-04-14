import { useState } from "react";
import { FriendsContext } from "./FriendsContext";



const FriendsProvider = ({ children }) => {
    
    const [callDetails, setCallDetails] = useState([]);
    const [textDetails, setTextDetails] = useState([]);
    const [videoDetails, setVideoDetails] = useState([]);

    const handleCall = (expectedFriends) => {
        // const callDetails = details.find((item )=> item.id === expectedFriends.id);
        setCallDetails([...callDetails, expectedFriends])
    }

    const handleText =(expectedFriends)=>{
        setTextDetails([...textDetails, expectedFriends])
    }

    const handleVideo = (expectedFriends) =>{
        setVideoDetails([...videoDetails, expectedFriends])
    }

    const data = {
        handleCall,
        setCallDetails,
        callDetails,
        handleText,
        textDetails,
        handleVideo,
        videoDetails,
        setVideoDetails
        
    }

    return <FriendsContext.Provider value={data}>{children}</FriendsContext.Provider>
    
};

export default FriendsProvider;