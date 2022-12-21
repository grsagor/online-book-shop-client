import React from 'react';

const Extra = () => {
    return (
        <div className='m-2 md:m-4 grid grid-cols-1 md:grid-cols-2 bg-base-300 p-6 border rounded'>
            <div className='my-auto'>
                <h2 className='text-3xl'>Respecting to our 16th December we are offering 16% DISCOUNT on every book during the whole december month.</h2>
            </div>
            <div className="card mx-auto shadow-xl image-full">
                <figure><img src="https://i.ibb.co/DG0zLRR/discount.jpg" alt="Shoes" /></figure>
                <div className="card-body my-auto">
                    <p className='text-xl font-extrabold'></p>
                    {/* <div className="card-actions justify-end">
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Extra;