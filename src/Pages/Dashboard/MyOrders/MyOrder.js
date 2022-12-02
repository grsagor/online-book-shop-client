import React from 'react';

const MyOrder = ({ product }) => {
    const {bookName, price} = product;
    return (
        <tr>
            <th>{bookName}</th>
            <tr>{price}</tr>
            <tr><button className='btn btn-primary'>Pay</button></tr>
        </tr>
    );
};

export default MyOrder;