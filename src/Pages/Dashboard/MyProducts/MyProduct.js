import React from 'react';

const MyProduct = ({product, handleDelete, addAdvertise}) => {
    return (
        <tr className="hover">
            <th>{product.bookName}</th>
            <td>{product.categoryName}</td>
            <td><button onClick={() => addAdvertise(product._id)} className='btn btn-xs btn-primary'>Advertise</button></td>
            <td><button onClick={() => handleDelete(product._id)} className='btn btn-xs btn-error'>Delete</button></td>
        </tr>
    );
};

export default MyProduct;