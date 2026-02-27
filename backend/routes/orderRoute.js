import express from 'express'
import { placeOrder, placeOrderStripe, verifystripe, placeOrerRazorpay, allOrder, userOrder, updateStatus, verfiyRazorpay } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminauth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()

// admin features 
orderRouter.post('/list', adminAuth, allOrder)
orderRouter.post('/status', adminAuth, updateStatus )

// payment features 
orderRouter.post('/place', authUser, placeOrder )
orderRouter.post('/stripe', authUser, placeOrderStripe)
orderRouter.post('/razorpay', authUser, placeOrerRazorpay)

// verify Payment 
orderRouter.post('/verifystripe', authUser, verifystripe)
orderRouter.post('/verifyRazorpay', authUser, verfiyRazorpay)

// user features 
orderRouter.post('/userOrders', authUser, userOrder)

export default orderRouter