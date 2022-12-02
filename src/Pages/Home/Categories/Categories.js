import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Category from './Category/Category';

const Categories = () => {

    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://assignment-12-server-grsagor.vercel.app/categories')
            .then(res => res.json())
    });

    return (
        <div className='mx-4 mt-4 bg-base-300 p-6 border rounded'>
            <h2 className='text-3xl'>Categories</h2>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4'>
                {
                    categories?.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>)
                }
            </div>
        </div>
    );
};

export default Categories;