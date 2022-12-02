import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider';
import MyOrder from './MyOrder';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: products = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch(`https://assignment-12-server-grsagor.vercel.app/bookings?email=${user?.email}`);
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
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.map(product => <MyOrder
                                key={product._id}
                                product = {product}
                            ></MyOrder>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;