import React from 'react'
import Header from '../others/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header />

      <div>
        <form className='flex flex-wrap bg-red-300 w-full items-start justify-between text-white'>
          <div className='w-1/2'> 
            <div>  <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] bg-white text-black' type='text' placeholder='Make a UI design' />
          </div> 
          <div>  <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
          <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] text-black bg-white' type='date' />
          </div>
         <div> <h3 className='text-sm text-gray-300 mb-0.5 '>Assign to</h3>
          <input className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] bg-white text-black' type='text' placeholder='employee name' />
          </div>
         <div>  <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
          <input className='text-sm py-1 px-2 w-4/5 rounded outline-none border-[1px] text-black bg-white' type='text' placeholder='design, dev, etc' />
          </div>
          </div>
          <div className='w-1/2'>
            <h3>Description</h3>
          <textarea name='' id='' cols="30" rows="10" ></textarea>
          </div>
        
          <button>Create Task</button>
        </form>
      </div>
    </div>
  )
}

export default AdminDashboard
