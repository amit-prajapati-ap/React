import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavigationBar = () => {
  return (
    <div>
      <ul>
        <li className='flex flex-col gap-2 p-4 text-white'>
            <NavLink to="/" className={({isActive}) => isActive ? ' bg-green-600 w-[120px] pr-2 py-1 cursor-pointer rounded-sm text-center' : ' bg-green-500 w-[120px] pr-2 py-1 cursor-pointer rounded-sm text-center'}>Home</NavLink>

            <NavLink to="/about" className={({isActive}) => isActive ? ' bg-green-600 w-[120px] pr-2 py-1 cursor-pointer rounded-sm text-center' : ' bg-green-500 w-[120px] pr-2 py-1 cursor-pointer rounded-sm text-center'}>About</NavLink>

            <NavLink to="/dashboard" className={({isActive}) => isActive ? ' bg-green-600 w-[120px] pr-2 py-1 cursor-pointer rounded-sm text-center' : ' bg-green-500 w-[120px] pr-2 py-1 cursor-pointer rounded-sm text-center'}>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default NavigationBar
