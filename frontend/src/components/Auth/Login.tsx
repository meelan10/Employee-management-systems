import { useState } from "react"

const Login = () => {
   
  useState



  const submitHandler = (e) => {
    e.preventDefault()
    console.log("hello guys form submited")

  }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
    <div className='border-2 rounded-xl border-emerald-600 p-20'>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }

      }
      className='flex flex-col items-center justify-center'>
        <input required className=' bg-transparent outline-none border-2 border-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-white' type="email" placeholder='Enter your email' />
        <input required className='bg-transparent outline-none border-2 border-emerald-600 mt-3 py-4 px-5 text-xl rounded-full placeholder:text-white' type="password" placeholder='Enter password' />
        <button  className='text-white mt-5  outline-none border-none bg-emerald-600 py-4 px-5 text-xl rounded-full placeholder:text-white' >Login</button>
      </form>
    </div>
    </div>
  )
}

export default Login
