import React from 'react'

// Button 
import { BtnSeeMore } from '../../ui/BtnSeeMore'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { CardCoursFree } from './CardCoursFree';

export const Swipper = () => {
  return (
      <div className='swipper relative overflow-hidden flex gap-[30px] flex-col justify-center items-start px-[124px] py-[70px] max-lg:px-[30px] max-sm:py-[30px] max-sm:px-[15px] bg-[#222]'>
          
            <div className="title w-full flex items-center justify-between max-w-[1400px] m-auto max-md:flex-col">
                <h1 className='p-[10px] text-2xl border-l-[3px] border-[#D5FF40] text-[#fff] font-semibold'>Get started with these free courses</h1>
                <BtnSeeMore />
            </div>

            <div className="container max-w-[1400px] m-auto flex justify-between items-center max-md:flex-col">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                    clickable: true,
                    }}
                    breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                    }}
                    // modules={[]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <CardCoursFree />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardCoursFree />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardCoursFree />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardCoursFree />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardCoursFree />
                    </SwiperSlide>
                    <SwiperSlide>
                        <CardCoursFree />
                    </SwiperSlide>
                  
                   
                   
                  
                </Swiper>
            </div>
    </div>
  )
}
