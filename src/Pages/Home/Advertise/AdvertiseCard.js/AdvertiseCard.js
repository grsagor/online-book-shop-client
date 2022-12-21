import React from 'react';

const AdvertiseCard = ({ product, setBooking }) => {
    return (
        <div>
            <div className="card bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title mx-auto">{product.bookName}</h2>
                    <div onClick={() => setBooking(product)} className="card-actions justify-end mx-auto">
                        <label htmlFor="booking-modal" className="btn">Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertiseCard;