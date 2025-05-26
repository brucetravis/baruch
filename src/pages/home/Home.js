import React from 'react'
import './Home.css'
import Hero from '../../sections/hero/Hero'
import AboutSection from '../../sections/abouthomesection/AboutSection'
import Types from '../../sections/typesofchicken/Types'
import SlideInOnScroll from '../../components/slideinonscroll/SlideInOnScroll'

export default function Home() {
  return (
    <div className='pt-5'>
      <SlideInOnScroll>
        <Hero />
      </SlideInOnScroll>
      <SlideInOnScroll>
        <AboutSection />
      </SlideInOnScroll>
      <SlideInOnScroll>
        <Types />
      </SlideInOnScroll>
    </div>
  )
}
