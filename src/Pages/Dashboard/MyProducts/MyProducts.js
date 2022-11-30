import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';

const MyProducts = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-grsagor.vercel.app/books?sellerEmail=${user?.email}`);
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <h2 className='text-3xl'>My Products</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Book Name</th>
                            <th>Category Name</th>
                            <th>Advertise</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr className="hover">
                                <th>{product.bookName}</th>
                                <td>{product.categoryName}</td>
                                <td><button className='btn btn-xs btn-primary'>Advertise</button></td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;