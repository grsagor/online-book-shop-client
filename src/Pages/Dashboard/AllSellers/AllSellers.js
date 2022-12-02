import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import { MdDone } from 'react-icons/md';

const AllSellers = () => {

        const { data: sellers = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-grsagor.vercel.app/users?role=Seller');
            const data = await res.json();
            return data;
        }
    });

    const handdleAdmin = id => {
        fetch(`https://assignment-12-server-grsagor.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                toast.success('Admin Made');
                refetch();
            }
        })
    }

    const handdleVerifiedSeller = id => {
        fetch(`https://assignment-12-server-grsagor.vercel.app/users/verifyseller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount>0){
                toast.success('Seller Verified');
                refetch();
            }
        })
    }

    const handleDelete = id => {
        fetch(`https://assignment-12-server-grsagor.vercel.app/user/${id}`, {
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

    return (
        <div>
            <h2 className='text-3xl'>All Buyers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Verify</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.map(seller => <tr className="hover">
                                <th>{seller.name}{seller?.verifiedSeller === 'yes' && 
                                <MdDone className='inline text-blue-700 border-blue-700 border rounded-full ml-2'></MdDone>
                                }</th>
                                <td>{seller.email}</td>
                                <td>{seller?.role !== 'admin' && <button onClick={()=> handdleAdmin(seller._id)} className='btn btn-xs btn-primary'>Make Admin</button>}</td>
                                <td>{seller?.verifiedSeller !== 'yes' && <button onClick={()=> handdleVerifiedSeller(seller._id)} className='btn btn-xs btn-primary'>Verify Seller</button>}</td>
                                <td><button onClick={() => handleDelete(seller._id)} className='btn btn-xs btn-error'>Delete</button></td>
                        </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;