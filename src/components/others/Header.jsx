import React from 'react'

const Header = ({ userName = 'User', onLogout }) => {
  return (
    <div className='flex items-end justify-between'>
      <div>
        <p className='text-sm uppercase tracking-[0.18em] text-slate-500'>Welcome back</p>
        <h1 className='text-2xl font-medium text-white'>Hello <br /> <span className='text-3xl text-white font-semibold'>{userName}</span></h1>
      </div>
      <button
        type='button'
        onClick={onLogout}
        className='bg-red-500 text-white px-5 py-2 rounded-small'
      >
        Log out
      </button>
    </div>
  )
}

export default Header
