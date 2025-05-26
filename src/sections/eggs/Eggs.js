import React from 'react'
import './Eggs.css'
import { motion } from 'framer-motion'
import MyButton from '../../components/common/buttons/MyButton'

export default function Eggs() {
  return (
    <motion.div
      initial={{  x: -100, opacity: 0  }}
      animate={{  x: 0, opacity: 1 }}
      transition={{  duration: 2, ease: "easeOut"  }}
      className='container-fluid eggs-section mt-3 mb-3'
    >
      <div className='row align-items-center justify-content-center' id='eggs'>
        <div className='col-12 col-md-6 col-lg-5'>
          <img 
            src={require('../../images/eggs.jpg')} 
            alt="about section chicken"
            className='img-fluid about-section-image'
          />
        </div>
        
        <div className='col-12 col-md-6 col-lg-5 mb-4 mb-md-0 '>
          <h4 className='eggs '>Eggs</h4>
          <p >
            At Baruch Poultry, we produce high-quality eggs from healthy layer hens. Our birds 
            lay consistently, delivering up to three crates of fresh eggs daily. These eggs are 
            carefully collected, handled hygienically, and delivered to ensure freshness and nutritional 
            value. Whether you're buying for personal use or resale, our eggs are a reliable choice for 
            quality and consistency.At Baruch Poultry, we produce high-quality eggs from healthy layer 
            hens. Our birds lay consistently, delivering up to three crates of fresh eggs daily. These 
            eggs are carefully collected, handled hygienically, and delivered to ensure freshness and 
            nutritional value. Whether you're buying for personal use or resale, our eggs are a reliable 
            choice for quality and consistency.
          </p>

          
          <MyButton text="Order Now" link="/orders" />
        </div>
      </div>

    </motion.div>
  )
}
