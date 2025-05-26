import React from 'react'
import SlideInOnScroll from '../../components/slideinonscroll/SlideInOnScroll'
import OrdersHero from '../../sections/hero/ordershero/OrdersHero'
import OrdersSection from '../../sections/orderssection/OrdersSection'
import Prices from '../../sections/prices/Prices'

export default function Orders() {
  return (
    <div>
        <SlideInOnScroll>
          <OrdersHero />
        </SlideInOnScroll>
        <SlideInOnScroll>
          <Prices />
        </SlideInOnScroll>
        <SlideInOnScroll>
          <OrdersSection />
        </SlideInOnScroll>
    </div>
  )
}
