import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';
import MyProduct from './MyProduct';

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

    const handleDelete = id => {
        fetch(`https://assignment-12-server-grsagor.vercel.app/book/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                toast.success('Deleted Successfully');
                refetch();
            }
        })
    }

    const addAdvertise = (id) => {
        fetch(`https://assignment-12-server-grsagor.vercel.app/book/advertise/${id}`, {
            method: 'PUT',
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.modifiedCount>0){
                    toast.success('Advertised');
                    refetch();
                }
            })
    }
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
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <MyProduct
                                key={product._id}
                                product = {product}
                                handleDelete = {handleDelete}
                                addAdvertise = {addAdvertise}
                            ></MyProduct>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProducts;