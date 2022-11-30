import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Category from './Category/Category';

const Categories = () => {

    const {data: categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://assignment-12-server-grsagor.vercel.app/categories')
                .then(res => res.json())
    });

    return (
        <div className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-4'>
            {
                categories?.map(category => <Category
                    key={category._id}
                    category = {category}
                ></Category>)
            }
        </div>
    );
};

export default Categories;