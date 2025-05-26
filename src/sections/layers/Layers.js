import React from 'react'
import './Layers.css'
import { motion } from 'framer-motion'
import MyButton from '../../components/common/buttons/MyButton'


export default function Layers() {
  return (
    <motion.div
      initial={{  x: 100, opacity: 0  }}
      animate={{  x: 0, opacity: 1 }}
      transition={{  duration: 2, ease: "easeOut"  }}
      className='container-fluid layers-section mt-3 mb-3'
    >
      <div className='row align-items-center justify-content-center mt-3 mb-3' id='layers'>
        
        <div className='col-12 col-md-6 col-lg-5 mb-4 mb-md-0 '>
          <h4 className='layers '>Layers</h4>
          <p >
            Baruch Poultry provides robust and productive layer chickens that are ideal for egg production. 
            Our layers are sourced and raised with care, fed with high-quality feed, and kept in optimal conditions 
            to maximize laying potential. These birds are healthy, reliable, and a great choice for farmers and 
            poultry businesses focused on egg production.
          </p>

          <MyButton text="Order Now" link="/orders" />
        </div>
        <div className='col-12 col-md-6 col-lg-5'>
          <img 
            src={require('../../images/layer.jpg')} 
            alt="day old chicks"
            className='img-fluid layers-image'
          />
        </div>
      </div>

    </motion.div>
  )
}
