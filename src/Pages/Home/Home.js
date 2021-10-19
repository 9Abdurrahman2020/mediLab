import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from './Doctors/Doctors';
import OurTests from './OurTests/OurTests';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Doctors/>
            <OurTests/>
        </div>
    );
};

export default Home;