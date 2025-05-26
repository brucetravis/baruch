import React from 'react'
import './ProductsHero.css'
import { motion } from 'framer-motion'

export default function ProductsHero() {
  return (
    <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className='products-hero'
    >
        <h3 className='text-center products-hero-text'>products</h3>
    </motion.div>
  )
}
