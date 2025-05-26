import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function SlideInOnScroll({ children }) {

    const ref = useRef(null) // A reference to a specific div
    const inView = useInView(ref, { once: true }) // Check if the element is in view
    const controls = useAnimation()


    // watch out for when the elements are in View
    useEffect(() => {
        
        if (inView) {
            controls.start({  y: 0, opacity: 1  })
        }

    }, [ inView, controls]) // Only run the code in useEffect when inView and controls changes



  return (
    <motion.div
        ref={ref} // referrring to the child referenced in this div
        initial={{  y: 100, opacity: 0  }}
        animate={controls} // Control the animation
        transition={{ duration: 1, ease: "easeIn" }}
    >
        {children}
    </motion.div>
  )
}
