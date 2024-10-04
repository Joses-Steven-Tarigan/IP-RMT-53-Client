

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='h-16 bg-cyan-600 flex justify-between px-24 items-center fixed w-full'>
      <h1 className='text-xl font-bold tracking-wide'>JockKey</h1>
      <div className='space-x-6'>
        <a className='hover:text-white' href="">Home</a>
        <a className='hover:text-white'  href="">Service</a>
        <a className='hover:text-white'  href="">Sign In</a>
      </div>
      <Link to="/register">
      <button className='border-indigo-700 border-2 px-4 py-2 rounded-full hover:bg-indigo-600 hover:text-white'>Join Now</button>
      </Link>
    </nav>
  )
}

export default Navbar