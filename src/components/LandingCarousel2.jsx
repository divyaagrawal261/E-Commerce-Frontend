import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { landingCarousel2 } from '../constants';
import 'swiper/css';
import 'swiper/css/navigation';
import Carousel2Card from './Carousel2Card';

function LandingCarousel2() {
  return (
    <div className="my-8">
      <h1 className="m-3 font-bold text-xl md:text-2xl">Look at collections</h1>
      <Swiper
        loop={true}
        navigation={true}
        slidesPerView={2} // 2 slides on very small screens
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 10 },
          768: { slidesPerView: 3, spaceBetween: 15 },
          1024: { slidesPerView: 4, spaceBetween: 20 }, // 4 slides on screens >= 1024px
          1280: { slidesPerView: 5, spaceBetween: 25 }, // 5 slides on screens >= 1280px
        }}
        spaceBetween={10}
        modules={[Navigation]}
        className="w-[90%]"
      >
        {landingCarousel2.map(({ src, tag, category }) => (
          <SwiperSlide className="w-full" key={src}>
            <Carousel2Card src={src} tag={tag} category={category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LandingCarousel2;
