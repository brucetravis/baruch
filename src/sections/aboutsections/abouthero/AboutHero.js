import React from 'react'
import { motion} from 'framer-motion'
import './AboutHero.css'

export default function AboutHero() {
  return (
    <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeIn" }}
        className='about-hero'
    >
        <h3 className='text-center about-us-text'>Sustainable Poultry. Trusted Feeds. Fresh Eggs</h3>
    </motion.div>
  )
}
