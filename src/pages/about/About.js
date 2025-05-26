import React from 'react'
import './About.css'
import SlideInOnScroll from '../../components/slideinonscroll/SlideInOnScroll'
import VisionAndMission from '../../sections/visionandmission/VisionAndMission'
import AboutHero from '../../sections/aboutsections/abouthero/AboutHero'
import Story from '../../sections/story/Story'
import Cta from '../../sections/cta/Cta'

export default function About() {
  return (
    <div className='pt-5'>
      <SlideInOnScroll>
        <AboutHero />
      </SlideInOnScroll>
      <SlideInOnScroll>
        <VisionAndMission />
      </SlideInOnScroll>
      <SlideInOnScroll>
        <Story />
      </SlideInOnScroll>
      <SlideInOnScroll>
        <Cta/>
      </SlideInOnScroll>
    </div>
  )
}
