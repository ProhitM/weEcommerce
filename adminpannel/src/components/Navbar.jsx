import React from 'react'
import { assets } from '../assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex justify-between item-center px-[4%] py-2'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <button  onClick={() => setToken('')} className='bg-gray-600 text-white border rounded-full px-4 py-2 sm:px-7 sm:py-2 m-2 text-xs sm:text-sm cursor-pointer h-9'>Logout</button>
    </div>
  )
}

export default Navbar
