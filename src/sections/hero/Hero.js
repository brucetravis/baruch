import React, { useEffect, useState } from 'react'
import './Hero.css'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero() {


    const chickenImages =  [
        { id: 1, picture: require('../../images/chicken-1.jpg') },
        { id: 2, picture: require('../../images/chicken-2.jpg') },
        { id: 3, picture: require('../../images/chicken-3.jpg') }
    ]

    // state to update the chicken sliders
    const [ chickenCount, setChickenCount ] = useState(0) //initial state is 0
    const [ previous, setPrevious ] = useState(0)
    const [ fadeIn, setFadeIn ] = useState(true)

    // useEffect to control the chaning of images
    useEffect(() => {

        // function to contol the interval changes
        const interval = setInterval(() => {

            setPrevious(chickenCount)
            // Update the image function
            setChickenCount((prevIndex) => (prevIndex + 1) % chickenImages.length)
            setFadeIn(false)


            // delay the setFadein for some time
            setTimeout(() => setFadeIn(true), 50)

        }, 10000) // images will change after 10 seconds
        
        return () => clearInterval(interval) // clear the the interval to stop memory leaks when unmounted

    }, [ chickenCount, chickenImages.length ]) // empty dependency array

  return (
    <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className='hero-section w-100 d-block position-relative overflow-hidden vh-100'
        onError={(e) => e.target.src = require('../../images/chicken-2.jpg') } // incase  an image faild to load show this image
        aria-live='polite' // for screen readers
    >
        {/* Title */}
        <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
        >
            <div className=' text-name position-absolute top-0 start-0 w-100 text-center z-2'>
                <Link
                    to='/about' 
                    className='baruch-name text-white fw-bold display-4'
                >
                    BARUCH POULTRY PRODUCTS
                </Link>
            </div>
        </motion.div>

        {/* Previous Image stays below */}
        <AnimatePresence mode='wait'> {/* AnimatePresence enables exit animations when components are removed. */}
            <motion.img 
                key={chickenImages[previous].id} // important for animate presence 
                src={chickenImages[previous].picture}
                alt='Previous Chicken' 
                className='img-fluid position-absolute top-0 start-0 w-100 z-1 object-fit-cover'
                initial={{ opacity: 0 }}
                animate={{ opacity: fadeIn ? 0 : 3 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 4, ease: "easeOut"}}
            />
        </AnimatePresence>

         {/* Current Image fades in on top */}
        <motion.img
            key={`curr-${chickenImages[chickenCount].id}`}
            src={chickenImages[chickenCount].picture}
            alt='Current chicken'
            className='img-fluid position-absolute top-0 start-0 w-100 h-100 object-fit-cover'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
        />
    </motion.div>
  )
}
