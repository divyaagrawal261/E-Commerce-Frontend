import React from 'react'
import { Trending } from '../constants'
import { Navigation } from 'swiper/modules';
import TrendingNowCard from './TrendingNowCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation';

function TrendingNowContainer() {
  return (
    <div className='max-w-[1200px] mx-auto mt-10 mb-20 sm:px-4 xl:px-0'>
        <span className='block text-2xl font-serif mb-6'>Trending Now</span>
        <Swiper slidesPerView={4.1} navigation={true} modules={[Navigation]} spaceBetween={"10"}>
        {Trending.map(({src, name, rate, category})=><SwiperSlide><TrendingNowCard src={src} name={name} rate={rate} category={category}/></SwiperSlide>)}
        </Swiper>
    </div>
  )
}

export default TrendingNowContainer