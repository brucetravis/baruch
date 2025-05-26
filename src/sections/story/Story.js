import React from 'react'
import './Story.css'
import { motion } from 'framer-motion'

export default function Story() {
  return (
    <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className='container-fluid story'
    >
        <div className='row align-items-center justify-content-center gap-2'>
            <div className='col-12 col-md-6 col-lg-5 mb-4 mb-md-0'>
                <img 
                    src={require('../../images/chicken-feeding.jpg')} 
                    alt="chick" 
                    className='img-fluid shadow'
                />
            </div>
            <div className='col-12 col-md-6 col-lg-5 mb-4 mb-md-0'>
                <h4 className='text-center'>Our Story</h4>
                <p>
                    At Baruch Poultry Farm, our journey began with a simple yet powerful vision — to be a 
                    blessing to our community through sustainable poultry farming. What started as a small backyard 
                    initiative quickly grew into a trusted provider of quality poultry feeds and farm-fresh eggs.
                    <br/>
                    <br/>
                    Rooted in our name Baruch, which means “blessing”, our farm was founded on the belief that 
                    agriculture, when done with care and purpose, can transform lives. From day one, we’ve focused 
                    on empowering farmers, ensuring every chick is well-fed, every egg is fresh, and every customer 
                    is satisfied. 
                    <br/>
                    <br/>
                    We believe in doing business with honesty, creating opportunities, and building 
                    food security, one coop at a time. Today, Baruch Poultry Farm continues to grow — not 
                    just in size, but in impact. As we expand our reach, our commitment remains the same: 
                    to feed, to nourish, and to bless.
                </p>
            </div>
        </div>

    </motion.div>
  )
}
