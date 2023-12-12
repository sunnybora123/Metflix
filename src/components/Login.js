import React from 'react'
import { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignup,setIssignup]=useState(true);
    const toggleSignup=()=>{
        setIssignup(!isSignup);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="netflix_background" />
         </div>
         <form className='absolute w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
             <h1 className='font-bold text-3xl py-4'>{isSignup? "Sign In": "Sign Up"}</h1>
             {!isSignup && <input type="text" placeholder='Your Full Name' className='p-4 my-2 w-full bg-gray-800'/>}
             <input type="text" placeholder='Email Address' className='p-4 my-2 w-full bg-gray-800'/>
             <input type="password" placeholder='Password' className='p-4 my-2 w-full bg-gray-800'/>
            
             <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignup? "SIGN IN": "SIGN UP"}</button>
             <p className='py-4 text-gray-500'>New to Netflix? <span className='text-white cursor-pointer' onClick={toggleSignup}>Sign up</span> now</p>
         </form>
    </div>
       
  )
}

export default Login