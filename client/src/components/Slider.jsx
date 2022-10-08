import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Slider.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";

const Slider = ({slides}) =>{
    return <Swiper
            spaceBetween={1}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            
                >
                {
                    slides.map((s,i)=>{
                        return <SwiperSlide>
                                <img className='img-slide' src={s} alt='slide' />
                            </SwiperSlide>
                    })
                }
            </Swiper>
}

export default Slider