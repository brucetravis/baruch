import React from 'react'
import './OrdersHero.css'
import { motion } from 'framer-motion'

export default function OrdersHero() {
  return (
    <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className='orders-hero'
    >
        <h3 className='text-center orders-hero-text'>Orders</h3>
    </motion.div>
  )
}
