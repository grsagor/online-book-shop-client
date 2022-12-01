import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';

const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>
            <Advertise></Advertise>
        </div>
    );
};

export default Home;