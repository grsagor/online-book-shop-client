import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import BookingModal from '../../Books/BookingModal/BookingModal';
import AdvertiseCard from './AdvertiseCard.js/AdvertiseCard';

const Advertise = () => {
    const [booking, setBooking] = useState(null);

    const { data: products = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-grsagor.vercel.app/books?advertise=yes');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className='bg-base-300 p-6 border rounded m-4'>
            <h2 className='text-3xl'>Advertisements</h2>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-2 md:m-4'>
                {
                    products?.length > 0 && products.map(product => <AdvertiseCard
                        key={product._id}
                        product={product}
                        setBooking={setBooking}
                    ></AdvertiseCard>)
                }
            </div>
            {
                booking && 
                <BookingModal
                booking = {booking}
                setBooking = {setBooking}
            >
            </BookingModal>
            }
        </div>
    );
};

export default Advertise;