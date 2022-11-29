import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useToken from '../../hooks/useToken';

const Login = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();

    const from = location.state?.from?.pathname || '/';

    const {signIn, providerLogin} = useContext(AuthContext);
    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    if(token){
        navigate(from, {replace: true});
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(res => {
                console.log(res.user);
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error.message))
    }

    const { register, formState: {errors} , handleSubmit } = useForm();
    const handleLogin = data => {
        signIn(data.email, data.password)
        .then(res => {
            const user = res.user;
            console.log(user);
            setLoginUserEmail(data.email);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div className='h-[500px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input {...register("email", {required: "Email Address is required"})} type="text" placeholder="Enter email" className="input input-bordered w-full max-w-xs"/>
                        {errors.email && <p className='text-error'>{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input {...register("password", {required: "Password is required"})} type="password" placeholder="Enter password" className="input input-bordered w-full max-w-xs"/>
                        {errors.password && <p className='text-error'>{errors.password?.message}</p>}
                        <label className="label"><span className="label-text">Forgot Password?</span></label>
                    </div>

                    <input className='btn btn-primary w-full' value='Login' type="submit" />
                </form>
                <p>New to here? <Link className='text-primary' to='/signup'>Create New Accouont</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>Continue With Google</button>
            </div>
        </div>
    );
};

export default Login;