import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules';
import { landingCarousel2 } from '../constants'
import 'swiper/css'
import 'swiper/css/navigation';
import Carousel2Card from './Carousel2Card';

function LandingCarousel2() {
  return (
    <Swiper loop={true} navigation={true} pagination={true} slidesPerView={4.5} modules={[Navigation]} grabCursor={true} spaceBetween={1} className='w-[90%] my-16'>
        {landingCarousel2.map(({src, tag})=><SwiperSlide className="w-full" key={src}><Carousel2Card src={src} tag={tag}/></SwiperSlide>)}
    </Swiper>
  )
}

export default LandingCarousel2