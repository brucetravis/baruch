import React from 'react'
import {  motion } from 'framer-motion'
import './Types.css'
import { Link } from 'react-router-dom'

export default function Types() {
  return (
    <motion.div 
        initial={{ x: -100, opacity: 0 }}    
        animate={{ x: 0, opacity: 1 }}    
        transition={{ duration: 2, ease: "easeOut" }}    
        className='container-fluid types-section mt-5'
    >
        <h2 className='text-center mb-4'>Our Products</h2>
        <div className='row align-items-center justify-content-center gap-4'>
            <Link></Link>
            <div className='day-old col-12 col-md-6 col-lg-3 rounded'>
               <Link to='/products#dayold' className='types-text text-white text-center d-block'>Day Old chicks</Link>
            </div>
            <div className='broiler col-12 col-md-6 col-lg-3 rounded'>
                <Link to='/products#broilers' className='types-text text-white text-center d-block'>Broilers</Link>
            </div>
            <div className='layer col-12 col-md-6 col-lg-3 rounded'>
                <Link to='/products#layers' className='types-text text-white text-center d-block'>Layers</Link>
            </div>
        </div>
    </motion.div>
  )
}
