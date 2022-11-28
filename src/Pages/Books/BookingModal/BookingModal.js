import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const BookingModal = ({booking, setBooking}) => {
    const {bookName, price} = booking;
    const { user } = useContext(AuthContext);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const bookName = form.bookName.value;
        const price = form.price.value;
        const phone = form.phone.value;
        const location = form.location.value;

        const body = {
            name,
            email,
            bookName,
            price,
            phone,
            location
        }

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                setBooking(null);
                toast.success('Booked');
            }
        })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{bookName}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-6'>
                        <input name='name' defaultValue={user?.displayName} disabled type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input name='email' defaultValue={user?.email} disabled type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input name='bookName' defaultValue={bookName} disabled type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input name='price' defaultValue={price} disabled type="text" placeholder="Type here" className="input input-bordered w-full" />
                        <input name='phone' type="text" placeholder="Enter Your Phone Number" className="input input-bordered w-full" />
                        <input name='location' type="text" placeholder="Where do you want to meat?" className="input input-bordered w-full" />

                        <input className='w-full bg-primary btn' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;