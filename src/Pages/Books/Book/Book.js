import React from 'react';

const Book = ({ book, setBooking }) => {
    const { bookName, img, location, resalePrice, originalPrice, year, time, sellerName } = book;
    return (
        <div>
            <div className="card card-side bg-base-300 shadow-xl">
                <figure className='ml-4'><img src={img} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{bookName}</h2>
                    <p className='text-left'>Location: {location}</p>
                    <p className='text-left'>Resale Price: {resalePrice}</p>
                    <p className='text-left'>Original Price: {originalPrice}</p>
                    <p className='text-left'>Year of Purchase: {year} years</p>
                    <p className='text-left'>Posted Time: {time}</p>
                    <p className='text-left'>Seller Name: {sellerName}</p>
                    <div onClick={() => setBooking(book)} className="card-actions mx-auto">
                        <label htmlFor="booking-modal" className="btn btn-primary">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;