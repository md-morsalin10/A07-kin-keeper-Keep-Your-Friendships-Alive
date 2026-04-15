import { useState } from "react";
import { FriendsContext } from "./FriendsContext";
import { toast } from "react-toastify";



const FriendsProvider = ({ children }) => {

    const [callDetails, setCallDetails] = useState([]);
    const [textDetails, setTextDetails] = useState([]);
    const [videoDetails, setVideoDetails] = useState([]);

    const handleCall = (expectedFriends) => {
        setCallDetails([...callDetails, expectedFriends]);
         toast.success(`Call With ${expectedFriends.name}`,{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleText = (expectedFriends) => {
        setTextDetails([...textDetails, expectedFriends])
        toast.success(`Text With ${expectedFriends.name}`,{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const handleVideo = (expectedFriends) => {
        setVideoDetails([...videoDetails, expectedFriends]);
         toast.success(`Video With ${expectedFriends.name}`,{
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
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