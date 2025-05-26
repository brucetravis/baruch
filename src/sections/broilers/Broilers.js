import React from 'react'
import './Broilers.css'
import { motion } from 'framer-motion'
import MyButton from '../../components/common/buttons/MyButton'

export default function Broilers() {
  return (
    <motion.div
      initial={{  x: -100, opacity: 0  }}
      animate={{  x: 0, opacity: 1 }}
      transition={{  duration: 2, ease: "easeOut"  }}
      className='container-fluid broilers-section mt-3 mb-3'
    >
      <div className='row align-items-center justify-content-center' id='broilers'>
        <div className='col-12 col-md-6 col-lg-5'>
          <img 
            src={require('../../images/broiler.jpg')} 
            alt="Broiler section chicken"
            className='img-fluid broiler-section-image'
          />
        </div>
        <div className='col-12 col-md-6 col-lg-5 mb-4 mb-md-0 '>
          <h4 className='broilers mt-1 mt-sm-2'>Broilers</h4>
          <p >
            Our broilers are raised in a clean, well-managed environment and are fed with nutritious, 
            quality feeds to ensure healthy growth and tender meat. They grow fast and are ready for market 
            in a matter of weeks, making them ideal for customers looking for fresh, farm-raised chicken. 
            Baruch broilers are perfect for both home consumption and commercial supply.
          </p>

          <MyButton text="Order Now" link="/orders" />
        </div>
      </div>

    </motion.div>
  )
}
