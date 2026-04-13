import React from 'react';
import HomeContent from '../../components/HomeSection/HomeContent';
import CardSection from '../../components/HomeSection/CardSection';

const HomePage = () => {
    return (
        <div className='bg-base-200'>
            <HomeContent/>
            <CardSection/>
        </div>
    );
};

export default HomePage;