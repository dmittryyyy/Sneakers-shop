import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import './Slider.scss';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

export const Slider = () => {
    return (
        <>
            <Swiper
                className='mb-40'
                navigation={
                    {
                        nextEl: ".button-next",
                        prevEl: ".button-prev",
                    }
                }
                pagination
                autoplay={{ delay: 4000 }}
                loop={true}
                slidesPerView={1}
            >

                <SwiperSlide>
                    <img src="images/slider/slide1.jpg" alt="Слайдер" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/slider/slide2.jpg" alt="Слайдер" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/slider/slide3.jpg" alt="Слайдер" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="images/slider/slide4.jpg" alt="Слайдер" />
                </SwiperSlide>
                <div className="NavigationSider">
                <div className="button-prev">
                    <img src="images/slider/arrowPrev.svg" alt="Предыдущий" />
                </div>
                <div className="button-next">
                    <img src="images/slider/arrowNext.svg" alt="Предыдущий" />
                </div>
            </div>
            </Swiper>
        </>
    )
}

