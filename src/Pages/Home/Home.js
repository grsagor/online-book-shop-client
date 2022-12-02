import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Advertise from './Advertise/Advertise';
import Banner from './Banner/Banner';
import Categories from './Categories/Categories';
import Extra from './Extra/Extra';

const Home = () => {

    const { data: products = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-grsagor.vercel.app/advertise');
            const data = await res.json();
            return data;
        }
    });

    return (
        <div>
            <Banner></Banner>
            <Categories></Categories>

            {
                products.length>0 &&
                <Advertise></Advertise>
            }
            
            <Extra></Extra>
        </div>
    );
};

export default Home;