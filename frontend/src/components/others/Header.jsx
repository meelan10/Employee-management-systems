import React from 'react'

const Header = () => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>Hello <br /> <span className='text-3xl text-white font-semibold'>Milan </span></h1>
      <button className="bg-red-500 text-white px-5 py-2 rounded-small">Log out </button>
      
    </div>
  )
}

export default Header
