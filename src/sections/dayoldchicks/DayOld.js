import React from 'react'
import './DayOld.css'
import { motion } from 'framer-motion'
import MyButton from '../../components/common/buttons/MyButton'

export default function DayOld() {
  return (
    <motion.div
      initial={{  x: 100, opacity: 0  }}
      animate={{  x: 0, opacity: 1 }}
      transition={{  duration: 2, ease: "easeOut"  }}
      className='container-fluid day-old-section mt-3 mb-3'
    >
      <div className='row align-items-center justify-content-center mt-3 mb-3' id='dayold'>
        
        <div className='col-12 col-md-6 col-lg-5 mb-4 mb-md-0 '>
          <h4 className='dayold '>Day Old Chicks</h4>
          <p >
            We supply day-old chicks that are fully vaccinated and ready for a healthy start. 
            These chicks are bred from strong parent stock and are ideal for both broiler and 
            layer farming. We ensure they are vaccinated against common poultry diseases, giving 
            them a head start in life and giving you peace of mind as you raise your flock.
          </p>

          <MyButton text="Order Now" link="/orders" />
        </div>
        <div className='col-12 col-md-6 col-lg-5'>
          <img 
            src={require('../../images/day-old.jpg')} 
            alt="day old chicks"
            className='img-fluid day-old-image'
          />
        </div>
      </div>

    </motion.div>
  )
}
