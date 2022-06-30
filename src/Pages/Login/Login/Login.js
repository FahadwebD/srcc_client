import React, { useEffect } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import useToken from '../../../hooks/useToken';
import back from '../../../assets/images/imgonline-com-ua-ReplaceColor-AzIzFjxzuK7sB33A.png'
import man from '../../../assets/images/imageedit_48_5998438873.png'
import './loginStyle.css'

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/dashboard";

    useEffect( () =>{
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading) {
        return 'Loading'
    }

    if(error || gError){
        signInError= <p className='text-red-500'><small>{error?.message || gError?.message }</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }








    return (


       <div>
       <img className="wave" src={back} alt=""/>
	<div className="container">
		<div className="img">
			<img src={man} alt=""/>
		</div>
		<div className="login-content">
			
            
            
            
            <form id='lform' onSubmit={handleSubmit(onSubmit)}>
				<img src="https://upload.wikimedia.org/wikipedia/commons/7/74/Bangladesh_Red_Crescent_Society_Logo.png" alt='logo'/>
				<h2 className="title">Admin</h2>
           		<div className="input-div one">
           		   <div className="i">
           		   		<i className="fas fa-user"></i>
           		   </div>
           		   <div className="div">
           		   		<h5>Email</h5>
           		   	
                      <input
                                type="email"
                               
                                className="form-field animation a3 input"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />

                    <label className="label">
                         {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                         {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                     </label>
                        


           		   </div>
           		</div>
           		<div className="input-div pass">
           		   <div className="i"> 
           		    	<i className="fas fa-lock"></i>
           		   </div>
           		   <div className="div">
           		    	<h5>Password</h5>
                                                    <input
                            
                                                        type="password"
                                                   
                                                        className="form-field  input"
                                                        {...register("password", {
                                                            required: {
                                                                value: true,
                                                                message: 'Password is Required'
                                                            },
                                                            minLength: {
                                                                value: 6,
                                                                message: 'Must be 6 characters or longer'
                                                            }
                                                        })}
                                                    />
                                                     <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
            	   </div>
            	</div>
            	<a href="#">Forgot Password?</a>
                {signInError}
            	<input type="submit" className="btn" value="Login"/>
                <button
                        onClick={() => signInWithGoogle()}
                        className="btn"
                    >Continue with Google</button>
            </form>


                 






        </div>
    </div>
       </div>
 
    );
};

export default Login;