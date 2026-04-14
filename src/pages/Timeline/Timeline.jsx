import React, { useContext } from 'react';
import { FriendsContext } from '../../context/FriendsContext';
import CallingInfo from './CallingInfo/CallingInfo';
import TextInfo from './TextInfo/TextInfo';
import VideoDetails from './VideoDetails/VideoDetails';

const Timeline = () => {
    const { callDetails,textDetails,videoDetails } = useContext(FriendsContext);
    

    return (
        <div className='container mx-auto'>
            <div className='py-6'>
                <h2 className='text-5xl font-bold text-[#1F2937]'>Timeline</h2>

            </div>
            <div>
                <div>
                    {
                        callDetails.map(frd=> <CallingInfo frd={frd} key={frd.id}></CallingInfo>)
                    }
                </div>
                <div>
                    {textDetails.map(frd=> <TextInfo frd={frd} key={frd.id}></TextInfo>)}
                </div>
                <div>
                    {
                        videoDetails.map(frd=> <VideoDetails frd={frd} key={frd.id}></VideoDetails>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Timeline;