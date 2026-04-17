import React from 'react'

const Header = () => {
  return (
    <div classname='flex items-end justify-between'>
      <h1 classname='text-2xl font-medium'>Hello <br /> <span classname ='text-3xl font-semibold'>Milan </span></h1>
      <button>Log out </button>
      
    </div>
  )
}

export default Header
