import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Book from '../Book/Book';
import BookingModal from '../BookingModal/BookingModal';

const Books = () => {
    const books = useLoaderData();

    const [booking, setBooking] = useState(null);
    return (
        <div>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4'>
                {
                    books?.map(book => <Book
                        key={book._id}
                        book = {book}
                        setBooking = {setBooking}
                    ></Book>)
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

export default Books;