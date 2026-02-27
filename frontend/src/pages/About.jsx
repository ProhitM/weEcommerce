import React from 'react'
import Title from '../Components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../Components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center border-t pt-6 '>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
       <div className='my-10 flex flex-col md:flex-row gap-16'>
       <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
       <div className='flex flex-col gap-6 w-full md:w-1/2 text-gray-600 mt-12'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cum distinctio beatae impedit placeat qui labore quam ab, temporibus voluptate id perspiciatis optio corporis ratione quia. Qui mollitia fugit asperiores.qui labore quam ab, temporibus voluptate id perspiciatis optio corporis ratione quia. Qui mollitia fugit asperiores</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cum distinctio beatae impedit placeat qui labore quam ab, temporibus voluptate id perspiciatis optio corporis ratione quia. Qui mollitia fugit asperiores.qui labore quam ab, temporibus voluptate id perspiciatis optio corporis ratione quia. Qui mollitia fugit asperiores</p>

         <h1 className='font-semibold'>Our Mission</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cum distinctio beatae impedit placeat qui labore quam ab, temporibus voluptate id perspiciatis optio corporis ratione quia. Qui mollitia fugit asperiores.qui labore quam ab, temporibus voluptate id perspiciatis optio corporis ratione quia. Qui mollitia fugit asperiores</p>
       </div>

       </div>

       <div>
       <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
       </div>

        <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border flex flex-col px-10 md:px-16 py-8 sm:py-20 gap-2'>
          <b>Quality Assurance:</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum illo, consectetur aspernatur assumenda in quod </p>
        </div>

          <div className='border flex flex-col px-10 md:px-16 py-8 sm:py-20 gap-2'>
         <b>Convenience:</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum illo, consectetur aspernatur assumenda in quod </p>
        </div>

          <div className='border flex flex-col px-10 md:px-16 py-8 sm:py-20 gap-2'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laborum illo, consectetur aspernatur assumenda in quod </p>
        </div>

        </div>

       </div>

      <NewsLetterBox />
    </div>
  )
}

export default About
