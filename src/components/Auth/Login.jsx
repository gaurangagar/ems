import React from 'react'
import { useState } from 'react'

const Login = (e) => {

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const submitHandler=(e)=>{
        e.preventDefault()
        console.log(`email is ${email} and password is ${password}`)
        setemail("")
        setpassword("")
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl' >
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>{
                    setemail(e.target.value)
                }}
                required 
                className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'
                />
                <input 
                value={password}
                onChange={(e)=>{
                    setpassword(e.target.value)
                }}
                required className='outline-none bg-transparent border-2 border-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-gray-400 mt-3' type="password" placeholder='Enter your password'/>
                <button className='mt-5 text-white outline-none border-none bg-emerald-600 py-3 px-5 text-xl rounded-full placeholder:text-white'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login