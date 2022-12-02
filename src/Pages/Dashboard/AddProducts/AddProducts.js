import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

const AddProducts = () => {
    const {user} = useContext(AuthContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostKey = process.env.REACT_APP_imgbb_key;
    console.log(imageHostKey)
    const handleAddProducts = (data) => {

        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostKey}`;

        fetch(url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgData => {
            if(imgData.success){
                data.img = imgData.data.url;

                if(data.categoryName === "Nobel"){
                    data.categoryID = "638220f59c0e5f62b38b94fd"
                };
                if(data.categoryName === "Religious"){
                    data.categoryID = "63822a349c0e5f62b39e9de6"
                }
                if(data.categoryName === "Poetry"){
                    data.categoryID = "638775c49c0e5f62b33fafd9"
                };
                if(user){
                    data.sellerEmail = user.email;
                }

                if(user){
                    data.sellerEmail = user.email;
                }

                fetch('https://assignment-12-server-grsagor.vercel.app/books', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data?.acknowledged){
                            toast.success('Product Added')
                        }
                    })
            }
        })

    }

    

    return (
        <div className='flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl'>Signup</h2>
                <form onSubmit={handleSubmit(handleAddProducts)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Enter Book Name</span></label>
                        <input {...register("bookName")} type="text" placeholder="Enter Book Name" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Enter Picture</span></label>
                        <input {...register("image")} type="file" placeholder="Enter Picture" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Enter Description</span></label>
                        <input {...register("description")} type="text" placeholder="Enter Description" className="input input-bordered w-full max-w-xs" />
                    </div>
                    
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Enter Location</span></label>
                        <input {...register("location")} type="text" placeholder="Enter Location" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Enter Phone Number</span></label>
                        <input {...register("phone")} type="text" placeholder="Enter Phone Number" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Enter Price</span></label>
                        <input {...register("price")} type="text" placeholder="Enter price" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Enter Purchasing Year</span></label>
                        <input {...register("year")} type="text" placeholder="Enter Purchasing Year" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select {...register("categoryName")} className="select select-bordered">
                            <option disabled selected>Choose Category</option>
                            <option>Nobel</option>
                            <option>Religious</option>
                            <option>Poetry</option>
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Condition</span>
                        </label>
                        <select {...register("condition")} className="select select-bordered">
                            <option disabled selected>Choose Condition</option>
                            <option>Excellent</option>
                            <option>Good</option>
                            <option>Fair</option>
                        </select>
                    </div>

                    <input className='btn btn-primary w-full mt-4' value='Add Product' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;