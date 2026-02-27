import React from 'react'
import { useState, useEffect } from 'react'
import {backendUrl, currency} from '../App'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'
import axios from 'axios'

const Order = ({token}) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrder = async() => {
    if(!token){
      return null;
    }

    try {
      const response = await axios.post(backendUrl + '/api/order/list',{},{headers:{token}})
      // console.log(response.data)
      if(response.data.success){
        setOrders(response.data.orders.reverse())
        console.log(response.data.orders)
      } else{
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const StatusHandler = async (event, orderId) => {
    try{
      const response = await axios.post(backendUrl + '/api/order/status', {orderId,status:event.target.value},{headers:{token}})
      if(response.data.success){
        await fetchAllOrder()
      }
    } catch(error){
      console.log(error)
      toast.error(response.data.message)
    }
  }
  useEffect(() => {
    fetchAllOrder()
  }, [token])
  
  return (
    <div>
      <h3>Order Page</h3>
      <div>
      {
        orders.map((order,index)=>(
          <div className='grid grid-cols-1 md:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 border-2 border-gray-300 p-5 md:p-8 px-3 my-3 md:my-4 items-start text-xs sm:text-sm text-gray-700' key={index}>
            <img className='w-12' src={assets.parcel_icon} alt="" />
            <div>
            <div>
            {order.items.map((item,index)=>{
              if(index === order.items.length-1){
                return <p className='p-0.5' key={index}>{item.name} x {item.quantity} <span>{item.size}</span></p>
              } else{
                return <p className='p-0.5' key={index}>{item.name} x {item.quantity} <span>{item.size}</span>,</p>
              }
            })
            }
            </div>
            <p className='mt-3 mb-2 font-medium'>{order.address.firstName + " " + order.address.LastName}</p>
            <div>
              <p>{order.address.street}</p>
              <p>{order.address.city + ", " + order.address.state  + ", " + order.address.country + ", " + order.address.zipcode}</p>
            </div>
            <p>{order.address.phone}</p>
          </div>
            <div>
            <p className='text-sm sm:text-[15px]'>Itmes: {order.items.length}</p>
            <p className='mt-3'>Method: {order.paymentMethod}</p>
            <p>Payment: {order.payment ? "Done" : "Pending"}</p>
            <p>Date: {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className='text-sm sm:text-[15px]'>{currency} {order.amount}</p>
            <select onChange={(event)=>StatusHandler(event, order._id)} value={order.status} className='p-2 font-semibold'>
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out For Delivery">Out For Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))
      }
      </div>
      
    </div>
  )
}

export default Order
