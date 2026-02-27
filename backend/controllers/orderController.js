import OrderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js"
import Stripe from 'stripe'
import razorpay from 'razorpay'

// global variable 
const currency = 'inr'
const deliveryCharge = 10

// initializing payment gateway
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

const razorpayInstance = new razorpay({
   key_id : process.env.RAZORPAY_KEY_ID,
   key_secret: process.env.RAZORPAY_KEY_SECRET
})

// placing order using cash on delivery 
const placeOrder = async(req,res) =>{

    try {
        const {userId,items,address,amount} = req.body

        const OrderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:'COD',
            payment:false,
            date : Date.now()
        }

        const newOrder = new OrderModel(OrderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData:{}})

        res.json({success:true,message:'Order Placed'})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
        
    }
}

// placing order using stripe
const placeOrderStripe = async(req,res) => {
    try {
      const { userId, items, address, amount} = req.body
      const { origin } = req.headers

      const OrderData = {
        userId,
        items,
        address, 
        amount,
        paymentMethod:'Stripe',
        payment:false,
        date: Date.now()
      }

      const newOrder = new OrderModel(OrderData)
      await newOrder.save()

      const line_items = items.map((item)=>({
        price_data : {
            currency:currency,
            product_data : {
                name:item.name
            },
            unit_amount : item.price * 100
        },
        quantity:item.quantity,
      }))

      line_items.push({
        price_data: {
            currency : currency,
            product_data : {
                name:"delivery Charges"
            },
           unit_amount: deliveryCharge * 100 
        },
        quantity:1,
      })

      const session = await stripe.checkout.sessions.create({
        success_url:`${origin}/verify?success=true&orderId=${newOrder._id}`,
        cancel_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
        line_items,
        mode:'payment',
      })

      res.json({success:true, session_url : session.url})

    } catch (error) {
        console.log(error)
        res.json({message:false, message:error.message})
    }

}

// verify payment 
const verifystripe = async (req,res) => {
    const {orderId, success, userId} = req.body
    try {
        if (success === "true"){
            await OrderModel.findByIdAndUpdate(orderId, {payment:true})
            await userModel.findByIdAndUpdate(userId, {cartData:{}})
            res.json({success:true});
        } else{
            await OrderModel.findByIdAndDelete(orderId)
            res.json({success:false})
        }
    } catch (error) {
        console.log(error)
        res.json({success:false})
    }
}

// placing order using razorpay
const placeOrerRazorpay = async (req,res) => {
  try {
    const { userId, address, items, amount} = req.body

    const OrderData = {
        userId,
        address,
        items,
        amount,
        paymentMethod:'Razorpay',
        payment:false,
        date: Date.now()
    }

    const newOrder = await OrderModel(OrderData)
    await newOrder.save()

    const Options = {
        amount: amount*100,
        currency: currency.toUpperCase(),
        receipt: newOrder._id.toString()
    }

    await razorpayInstance.orders.create(Options, (error,order)=>{
        if(error){
            console.log(error)
            return res.json({success:false, message:error})
        }
        res.json({success:true, order})
    })
  } catch (error) {
    console.log(error)
    res.json({success:true, message:error.message})
  }

}

const verfiyRazorpay = async (req,res) =>{
    try {
       const {userId, razorpay_order_id} = req.body

       const orderInfo = await razorpayInstance.orders.fetch(razorpay_order_id)
    //    console.log(orderInfo)
      if(orderInfo.status === "paid"){
        await OrderModel.findByIdAndUpdate(orderInfo.receipt, {payment:"true"})
        await userModel.findByIdAndUpdate(userId, {cartData:{}})
        res.json({success:true, message:"payment Successful"})
      } else {
        res.json({success:false, message:"payment failed"})
      }
    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

// all order data for admin panel
const allOrder = async(req,res) => {
    try{
        const orders = await OrderModel.find({})
        res.json({success:true, orders})
    } catch(error){
        console.log(error)
        res.json({message:false, message:error.message})
    }
}

// user orderdata for frontend 
const userOrder = async(req,res) => {
    try {
        const { userId } = req.body

        const orders = await OrderModel.find({ userId })
        res.json({success:true, orders})
    } catch (error) {
        console.log(error)
        res.json({success:true, message:error.message})
    }

}
// update status from admin panel 
const updateStatus = async(req,res) => {
try {
    const {orderId, status} = req.body
    await OrderModel.findByIdAndUpdate(orderId,{status})
    res.json({success:true, messgae:'Status Updated'})
} catch (error) {
    console.log(error)
    res.json({success:false, message:error.message})
}
}

export {placeOrder, placeOrderStripe, verifystripe, placeOrerRazorpay, verfiyRazorpay, allOrder, userOrder, updateStatus}