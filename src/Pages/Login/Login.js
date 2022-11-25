import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {

    const { register, handleSubmit } = useForm();
    const handleLogin = data => {
        console.log(data);
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email")} type="text" placeholder="Enter email" className="input input-bordered w-full max-w-xs"/>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password")} type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs"/>
                        <label className="label"><span className="label-text">Forgot Password?</span></label>
                    </div>

                    <input className='btn btn-primary w-full' value='Login' type="submit" />
                </form>
                <p>New to here? <Link className='text-primary' to='/signup'>Create New Accouont</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;