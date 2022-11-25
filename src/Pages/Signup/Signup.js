import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Signup = () => {

    const {createUser, updateUser} = useContext(AuthContext);

    const { register, handleSubmit, formState: {errors} } = useForm();

    const handleSignUp = data => {
        createUser(data.email, data.password)
        .then(res => {
            const user = res.user;
            console.log(user);
            toast('User Created Successfully');
            console.log(data.name);
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(()=> {})
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl'>Signup</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input {...register("name")} type="text" placeholder="Enter name" className="input input-bordered w-full max-w-xs"/>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email")} type="email" placeholder="Enter email" className="input input-bordered w-full max-w-xs"/>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password")} type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs"/>
                    </div>

                    <input className='btn btn-primary w-full' value='Login' type="submit" />
                </form>
                <p>Already Have an accouont? <Link className='text-primary' to='/login'>Login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Signup;