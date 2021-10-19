import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from './Doctors/Doctors';
import Donation from './Donation/Donation';
import OurTests from './OurTests/OurTests';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Doctors/>
            <OurTests/>
            <Donation/>
        </div>
    );
};

export default Home;