import React from 'react'
import './FooterTwo.css'
import { motion } from 'framer-motion'

export default function FooterTwo() {
  return (
    <motion.div
        initial={{  y: 100, opacity: 0 }} 
        animate={{  y: 0, opacity: 1  }} 
        transition={{  duration: 1, ease: "easeIn" }} 
        className='d-flex align-items-center justify-content-center footer-two'>
        <p className='text-center text-white-50'>&copy; {new Date().getFullYear()} Baruch Poultry Products. All rights Reserved </p>
    </motion.div>
  )
}
