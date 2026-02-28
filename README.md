

# 🛒 MERN WE-Commerce Website

A full-stack **WE-Commerce Web Application** built using the **MERN Stack** (MongoDB, Express.js, React.js, Node.js).

This project includes secure authentication, product management, cart functionality, and multiple payment options including **Stripe, Razorpay, and Cash on Delivery (COD)**.

---

## 🚀 Tech Stack

### 🔹 Frontend

* ⚛ React.js
* 🎨 CSS
* Axios
* React Router DOM

### 🔹 Backend

* 🟢 Node.js
* 🚂 Express.js
* 🍃 MongoDB
* 🗂 Mongoose

### 🔹 Payment Gateways

* 💳 Stripe
* 💰 Razorpay
* 📦 Cash on Delivery (COD)

---

## ✨ Features

* ✅ User Authentication (Register / Login)
* ✅ JWT-based Authorization
* ✅ Product Listing & Filtering
* ✅ Add to Cart / Remove from Cart
* ✅ Order Placement
* ✅ Stripe Payment Integration
* ✅ Razorpay Payment Integration
* ✅ Cash on Delivery Option
* ✅ Order History
* ✅ Admin Product Management
* ✅ Responsive Design

---

## 💳 Payment Methods Integrated

### 1️⃣ Stripe

Secure international card payments powered by Stripe API.

### 2️⃣ Razorpay

Indian payment gateway supporting:

* UPI
* Debit/Credit Card
* Net Banking
* Wallets

### 3️⃣ Cash on Delivery (COD)

Users can place orders without online payment.

---

## 📂 Project Structure

```
ecommerce/
│
├── frontend/        # React App
├── backend/         # Node + Express API
├── models/          # Mongoose Models
├── routes/          # API Routes
├── controllers/     # Business Logic
└── config/          # DB & Payment Config
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

### 3️⃣ Install Frontend Dependencies

```bash
cd frontend
npm install
```

---

### 4️⃣ Setup Environment Variables

Create a `.env` file inside the backend folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

---

### 5️⃣ Run the Project

#### Start Backend

```bash
npm run server
```

#### Start Frontend

```bash
npm start
```

---

## 🔐 Security Features

* Password hashing using bcrypt
* JWT Authentication
* Secure Payment API integration
* Protected Routes
* Environment variable protection

---


## 📈 Future Improvements

* Wishlist Feature
* Product Reviews & Ratings
* Order Tracking System
* Admin Dashboard Analytics
* Email Notifications

---

Special thanks to greatstack tutor for helping me to buid this wonderful project by learnig from their video




