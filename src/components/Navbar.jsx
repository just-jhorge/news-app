import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='h-16 drop-shadow-md bg-white fixed top-0 w-full flex items-center justify-between px-10'>
        <div className='uppercase font-bold text-xl'>News.</div>
        <nav>
            <ul className='flex items-center justify-center gap-10'>
                <li className='font-semibold'><NavLink to='/' className={`${({isActive}) => isActive ? 'text-blue-400' : ''}`}>Home</NavLink></li>
                <li className='font-semibold'><NavLink to='/business'>Business</NavLink></li>
                <li className='font-semibold'><NavLink to='/technology'>Technology</NavLink></li>
                <li className='font-semibold'><NavLink to='/sports'>Sports</NavLink></li>
                <li className='font-semibold'><NavLink to='/entertainment'>Entertainment</NavLink></li>
            </ul>
        </nav>
        <div className='border-2 border-gray-500 rounded-md outline-none'>
            <input type='text' placeholder='Search' className='border-none bg-transparent outline-none px-2 py-1' />
            <button className='px-2 py-1 bg-blue-300 text-white'>Submit</button>
        </div>
    </div>
  )
}

export default Navbar