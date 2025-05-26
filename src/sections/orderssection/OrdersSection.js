import React from 'react'
import './OrdersSection.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import OrdersForm from '../../components/forms/ordersform/OrdersForm'

export default function OrdersSection() {
  return (
    <motion.div
      initial={{  x: 100, opacity: 0  }}
      animate={{  x: 0, opacity: 1 }}
      transition={{  duration: 2, ease: "easeOut"  }}
      className='container-fluid orders-section mt-0 mb-3'
    >
        <div className='row align-items-center justify-content-center'>
            <div className='col-12 col-md-6 col-lg-5 mb-4 mb-md-0 order-instructions'>
                <h4>How to Make Your Order</h4>
                <ol className="list-group list-group-numbered">
                    <li className="list-group-item">
                        <strong>Browse Products:</strong> Go to the <Link to="/products">Products</Link> page to view our available items such as eggs, broilers, layers, and day-old chicks.
                    </li>
                    <li className="list-group-item">
                        <strong>Step 2:</strong> Under each product, click the <em>"Order Now"</em> button. This will take you back to this page.
                    </li>
                    <li className="list-group-item">
                        <strong>Step 3:</strong> On the Orders page, fill in the order form with your name, contact details, the product you want, and quantity.
                    </li>
                    <li className="list-group-item">
                        <strong>Step 4:</strong> Review your information and click the <em>"Place Order"</em> button to submit your request.
                    </li>
                    <li className="list-group-item">
                        <strong>Step 5:</strong> Our team will get in touch to confirm your order and arrange delivery or pickup.
                    </li>
                </ol>
                <div className="text-center mt-4">
                    <Link to="/products" className="btn btn-warning px-4 py-2">
                        Browse Products & Order
                    </Link>
                </div>
            </div>
            <div className='col-12 col-md-6 col-lg-5'>
                <OrdersForm />
            </div>
        </div>
    </motion.div>
  )
}
