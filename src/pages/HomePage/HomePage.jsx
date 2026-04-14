import React, { Suspense } from 'react';
import HomeContent from '../../components/HomeSection/HomeContent';
import CardSection from '../../components/HomeSection/CardSection';
import AllFriendsCard from '../../components/HomeSection/AllFriendsCard/AllFriendsCard';

const friendsPromise = fetch("/data.json").then(res => res.json());

const HomePage = () => {
    return (
        <div className='bg-base-200 pb-20'>
            <HomeContent />
            <CardSection />
            <Suspense fallback={<p>Loading.......</p>}>
                <AllFriendsCard friendsPromise={friendsPromise} />
            </Suspense>
        </div>
    );
};

export default HomePage;