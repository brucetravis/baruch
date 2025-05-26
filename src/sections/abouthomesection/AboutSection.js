import React from 'react'
import './AboutSection.css'
import { motion } from 'framer-motion'
import MyButton from '../../components/common/buttons/MyButton'

export default function AboutSection() {
  return (
    <motion.div
        initial={{  x: 100, opacity: 0  }}
        animate={{  x: 0, opacity: 1 }}
        transition={{  duration: 2, ease: "easeOut"  }}
        className='container-fluid'
    >
        <div className='about-section row align-items-center justify-content-center gap-5'>
            <div className='col-12 col-md-6 col-lg-5 mb-4 mb-md-0'>
                <img 
                    src={require('../../images/about-chicken.jpg')} 
                    alt="about section chicken"
                    className='img-fluid about-section-image'
                />
            </div>
            
            <div className='col-12 col-md-6 col-lg-5'>
                <h4 className='mb-3'>About Baruch Chicken Limited</h4>
                <p>
                    At <span className='fw-bold'>Baruch Poultry Products</span>, we are dedicated to 
                    providing premium quality poultry products tailored to meet the diverse needs of 
                    our customers. From one day-old chicks to layers, broilers, pure Kienyeji(indegeneous) 
                    and improved Kienyeji, as well as fresh, fertilized, nutritious eggs. We ensure that every 
                    product meets the highest standards of health and quality.
                </p>
                <p>
                    What sets us apart in the competitive poultry market is our unwavering commitment to 
                    sustainable farming practices, transparent sourcing, and exceptional customer service. 
                    We don’t just sell poultry products — we build lasting relationships based on trust, reliability, 
                    and the consistent delivery of superior products.
                    Soon, we will expand our offers to include high-quality poultry feeds, further supporting our 
                    customers’ success in poultry farming. Choose Baruch Chicken products for a dependable partner that 
                    prioritizes your growth and satisfaction above all.
                </p>

                {/* <Link to='/about' className='about-us-btn btn btn-warning text-white'>
                    About Us
                </Link> */}
                <MyButton text="About Us" link="/about" />
            </div>
        </div>
    </motion.div>
  )
}
