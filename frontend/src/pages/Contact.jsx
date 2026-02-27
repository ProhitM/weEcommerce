import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const Contact = () => {
  return (
    <div>

    <div className='text-center text-2xl border-t pt-10'>
      <Title text1={'CONTACT'} text2={'US'}/>
    </div>

      <div className='flex flex-col md:flex-row justify-center md:px-30 my-10 mb-28 gap-10'>
           <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />

             <div className='flex flex-col justify-center items-start gap-6'>
               <p className='font-semibold text-xl text-gray-800'>Our Store</p>
               <p className='text-gray-500'>54709 Willms Station <br/> Suite 350, Washington, USA </p>
               <p className='text-gray-500'>Tel: (415) 555-0132 <br /> Email: admin@forever.com</p>
               <p className='font-semibold text-xl text-gray-800'>Careers at Forever</p>
               <p className='text-gray-500'>Learn more about our teams and job openings.</p>
               <button className='border px-8 py-4 text-sm hover:bg-black hover:text-white'>Explore Jobs</button>

             </div>
      </div>

      <NewsLetterBox />
       
    </div>
  )
}

export default Contact
