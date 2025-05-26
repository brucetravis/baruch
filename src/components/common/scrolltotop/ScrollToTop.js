import  React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
    
    // destructure to access the path name
    const { pathname } = useLocation()

    // useEffect to watch ot If the path has changes
    useEffect(() => {

        window.scrollTo(0, 0) // scroll to the top when the path name changes
    }, [ pathname ]) // watch out if the pathname changes


  return null // return null because this component doesn’t render anything visible—it's just there for the side effect (scrolling).
}
