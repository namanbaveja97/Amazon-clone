import React, { useState } from 'react'
import './Login.css'
import { Link } from "react-router-dom";




function Login() {


    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = e =>{
        e.preventDefault();

        // firebase stuff

    }

    const register = e => {
        e.preventDefault();
// firebase stuff

    }


  return (
    <div className='Login'>

        <Link to="/">
        <img
        className='Login__logo'
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
        </Link>


        <div className='Login__container'>
            <h1>Sign in</h1>
            
            <form className='Login__form'>
                <h5>Email</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                <h5>Password</h5>
                <input type='password'value={password} onChange={e => setPassword(e.target.value)}></input>
                <button className='Login__signIN' onClick={signIn}>Sign in</button>


                <p>
                By continuing, you agree to Amazon's 
                Conditions of Use and Privacy Notice.
                </p>

                
               
                <button onClick={register} className='Login__signUP'> create your account </button>
            </form>
        </div>

    </div>
  )
}

export default Login