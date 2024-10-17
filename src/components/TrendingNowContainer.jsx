import React from 'react';
import { Trending } from '../constants';
import { Navigation } from 'swiper/modules';
import TrendingNowCard from './TrendingNowCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

function TrendingNowContainer() {
  return (
    <div className='max-w-[1200px] mx-auto mt-10 mb-20 sm:px-4 '>
      <span className='block text-xl sm:text-2xl font-serif m-4'>Trending Now</span>
      <div className='p-3'>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 }, 
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 4.1, spaceBetween: 25 },
        }}
      >
        {Trending.map(({ src, name, rate, category }) => (
          <SwiperSlide key={name}>
            <TrendingNowCard src={src} name={name} rate={rate} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
}

export default TrendingNowContainer;
