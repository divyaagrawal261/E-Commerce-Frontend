import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import { landingCarousel } from '../constants'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function LandingCarousel() {
  return (
    <Swiper loop={true} navigation={true} pagination={true} slidesPerView={1} modules={[Navigation, Pagination]}>
        {landingCarousel.map(({src})=><SwiperSlide className="w-full" key={src}><img src={src} alt="" className='w-full'/></SwiperSlide>)}
    </Swiper>
  )
}

export default LandingCarousel