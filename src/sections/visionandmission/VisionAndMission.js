import React from 'react'
import './VisionAndMission.css'
import { motion } from 'framer-motion'

export default function Vision() {
  return (
    <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className='container-fluid vision-and-mission'
    >
        <div className='row  align-items-center justify-content-center gap-2'>
            <div className='col-12 col-md-6 col-lg-5 mb-4 mb-md-0'>
                <h4 className='text-center mt-4 mb-3'>Vision</h4>
                <p className='text-center text-md-start'>
                    Empowering communities through sustainable poultry farming, delivering blessings 
                    in every feed and egg.”
                </p>
                <h4 className='mt-2 text-center mt-4 mb-3'>Mission</h4>
                <p className='text-center text-md-start'>
                    We provide reliable poultry feeds and fresh eggs with integrity and care, helping 
                    farmers raise healthy poultry and ensuring food security in the region.
                </p>
            </div>
            <div className='col-12 col-md-6 col-lg-5'>
                <img 
                    src={require('../../images/about-chick.jpg')} 
                    alt="chick" 
                    className='img-fluid shadow'
                />
            </div>
        </div>
        
    </motion.div>
  )
}
