import React from 'react'
import './Prices.css'
import { motion } from 'framer-motion'

export default function Prices() {

    const items = [
        { name: 'Day Old Chicks', price: 'Ksh 100each' },
        { name: 'Broilers', price: 'Ksh 1200each' },
        { name: 'Layers', price: 'Ksh 1500 each' },
        { name: 'Eggs', price: 'Ksh 450 per tray' },
        { name: 'Feeds', price: 'Ksh 2,000 per 50kg bag' }
    ];

  return (
    <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className="prices-container"
    >
        <h2 className='title'>Product prices</h2>
        <div className='price-cards'>
            {items.map((item, index) => (
                <motion.div
                    key={index}
                    className='card'
                    whileHover={{ scale: 1.05 }}
                >
                    <h3>{item.name}</h3>
                    <p>{item.price}</p>
                </motion.div>
            ))}
        </div>
    </motion.div>
  )
}
