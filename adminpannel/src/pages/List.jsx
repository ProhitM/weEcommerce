import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { backendUrl, currency } from '../App'
import { toast } from 'react-toastify'

const List = ({token}) => {

  const [list, setList] = useState([])

  const fetchList = async() => {
    try{
      let response = await axios.get(backendUrl + '/api/product/list')
      if(response.data.success){
        setList(response.data.products)
      }
      else{
        toast.error(response.data.message)
      }
      
    } catch(error){
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProducts = async (id) =>{
    try {
      const response = await axios.post(backendUrl + '/api/product/remove',{id},{headers:{token}})

      if(response.data.success){
        toast.success(response.data.message)
        await fetchList()
      } else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

      }

  useEffect(() => {
    fetchList()   
  }, [])
  
  return (
    <>
      <p className='text-gray-600 mb-2'>All Products List</p>
      <div className='flex flex-col'>

      {/* list all products title  */}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center border border-gray-300 bg-gray-100 px-2 py-1 text-sm text-gray-600'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {/* list all product   */}
        {
          list.map((item,index)=>(
            <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center border border-gray-100 text-sm px-2 py-1 gap-2' key={index}>
            <img className='w-12' src={item.image[0]} alt="" />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p onClick={()=>removeProducts(item._id)} className='text-right md:text-center text-lg cursor-pointer'>X</p>

            </div>
          ))
        }        
      </div>
    </>
  )
}

export default List
