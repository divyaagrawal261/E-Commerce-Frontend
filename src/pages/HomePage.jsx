import React from 'react'
import LandingCarousel from '../components/LandingCarousel'
import LandingCarousel2 from "../components/LandingCarousel2"
import ShopTheLookContainer from '../components/ShopTheLookContainer'
import TrendingNowContainer from '../components/TrendingNowContainer'

function HomePage() {
  return (
    <>
    <LandingCarousel/>
    <LandingCarousel2/>
    <ShopTheLookContainer/>
    <TrendingNowContainer/>
    </>
  )
}

export default HomePage