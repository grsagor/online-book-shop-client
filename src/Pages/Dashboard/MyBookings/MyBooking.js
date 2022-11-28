import React from 'react';

const MyBooking = ({mybooking}) => {
    const {bookName, price} = mybooking;
    return (
        <tr className="hover">
            <th>{bookName}</th>
            <td>{price}</td>
        </tr>
    );
};

export default MyBooking;