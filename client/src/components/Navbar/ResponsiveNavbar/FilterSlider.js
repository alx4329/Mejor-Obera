import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./FilterSlider.css";

// import required modules
import { Pagination } from "swiper";

const FilterSlider= ({slides,action})=> {
  return (
    <>
    <Swiper
        slidesPerView={10}
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper-nav"
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
    >
        {
            slides.map((cat,i)=>{
                return <SwiperSlide className="swiper-slide-nav" >
                <img className="category-container-nav" key={cat._id} name={cat._id}  onClick={()=>action(cat.shortening)} src={`/categories/${cat.identifier}.svg`} alt={cat.nombre} title={cat.nombre}/>
                    </SwiperSlide>
            })
        }

        </Swiper>
    </>
    );
}
export default FilterSlider