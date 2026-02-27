import React from 'react'
import { NavLink } from 'react-router'
import { assets } from '../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%]  border-gray-300 border-r-2'>
      <div className='flex flex-col gap-4 pl-[20%] pt-6 text-[15px]'>
        <NavLink to="/add" className='flex items-center gap-3 border border-gray-300 border-r-0 rounded-1 px-3 py-2'>
          <img className='w-5 h-5' src={assets.add_icon} alt="" />
          <p className='hidden md:block'>Add Item</p>
        </NavLink>
        <NavLink to="/list" className='flex items-center gap-3 border border-gray-300 border-r-0 rounded-1 px-3 py-2'>
          <img className='w-5 h-5' src={assets.add_icon} alt="" />
          <p className='hidden md:block'>List Item</p>
        </NavLink>
        <NavLink to='/orders' className='flex items-center gap-3 border border-gray-300 border-r-0 rounder-1 px-3 py-2' >
          <img className='w-5 h-5' src={assets.order_icon} alt="" />
          <p className='hidden md:block'>Orders</p>
        </NavLink>
      </div>
    </div>

  ) 
}

export default Sidebar
