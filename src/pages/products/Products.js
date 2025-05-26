import React, { useEffect } from 'react'
import './Products.css'
import SlideInOnScroll from '../../components/slideinonscroll/SlideInOnScroll'
import ProductsHero from '../../sections/hero/productshero/ProductsHero'
import DayOld from '../../sections/dayoldchicks/DayOld'
import Broilers from '../../sections/broilers/Broilers'
import Layers from '../../sections/layers/Layers'
import Eggs from '../../sections/eggs/Eggs'
import { useLocation } from 'react-router-dom'
import Faqs from '../faqs/Faqs'

export default function Products() {

  const location = useLocation()
  

  useEffect(() => {

    const hash = location.hash

    if (hash) {
      const element = document.querySelector(hash)

      if (element) {
        element.scrollIntoView({  behaviour: "smooth" })
      } else {
        window.scroll(0, 0)
      }
    }

  }, [location]) // watch out for a change in location



  return (
    <div className='pt-5'>
      <SlideInOnScroll>
        <ProductsHero />
      </SlideInOnScroll>
      <SlideInOnScroll>
        <DayOld />
      </SlideInOnScroll>
      <SlideInOnScroll>
        <Broilers />
      </SlideInOnScroll>
      <SlideInOnScroll>
        <Layers />
      </SlideInOnScroll>
      <SlideInOnScroll>
        <Eggs />
      </SlideInOnScroll>
      <SlideInOnScroll>
        <Faqs />
      </SlideInOnScroll>
    </div>
  )
}
