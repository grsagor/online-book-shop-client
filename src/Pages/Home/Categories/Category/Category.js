import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ category }) => {

    const { categoryName, _id } = category;

    return (
        <div>
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title mx-auto">{categoryName}</h2>
                    <div className="card-actions justify-end mx-auto">
                        <Link to={`/books/${_id}`}><button className="btn">See All Products Of {categoryName}</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;