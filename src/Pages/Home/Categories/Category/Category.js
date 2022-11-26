import React from 'react';

const Category = ({category}) => {

    const {categoryName} = category;

    return (
        <div>
            <h2>{categoryName}</h2>
        </div>
    );
};

export default Category;