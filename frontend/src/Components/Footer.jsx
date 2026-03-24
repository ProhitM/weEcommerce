import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

      <div>
        <img src={assets.logo} className='mb-2 w-38' alt="" />
        <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo voluptates rem enim itaque hic cum possimus reprehenderit, recusandae iure assumenda vero commodi molestiae laudantium id ipsa quisquam quis. Culpa, iusto!</p>
      </div>

        <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-1 text-gray-500'>
            <li>Home</li>
            <li>About Us </li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
        </ul>
      </div>

      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+1-000-000-0000</li>
            <li>eccomerce1234@gmail.com</li>
        </ul>
      </div>
      </div>

      <div>
        <hr />
        <p className='text-center text-sm py-4'>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
