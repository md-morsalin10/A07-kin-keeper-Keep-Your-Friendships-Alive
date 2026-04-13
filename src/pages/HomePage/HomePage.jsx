import React from 'react';
import HomeContent from '../../components/HomeSection/HomeContent';
import CardSection from '../../components/HomeSection/CardSection';
import AllFriendsCard from '../../components/HomeSection/AllFriendsCard/AllFriendsCard';

const HomePage = () => {
   
    return (
        <div className='bg-base-200'>
            <HomeContent/>
            <CardSection/>
            <AllFriendsCard/>
        </div>
    );
};

export default HomePage;