import React from 'react';
import { useQuery } from '@tanstack/react-query';
import Category from './Category/Category';

const Categories = () => {

    const {data: categories = []} = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('http://localhost:5000/categories')
                .then(res => res.json())
    });

    console.log(categories);

    return (
        <div>
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