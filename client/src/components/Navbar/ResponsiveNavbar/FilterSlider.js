import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./FilterSlider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";

const FilterSlider= ({slides,action})=> {
  return (
    <>
    <Swiper
        slidesPerView={6}
        spaceBetween={30}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper-nav"
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
            }}
    >
        {
            slides.map((cat,i)=>{
                return <SwiperSlide className="swiper-slide-nav" >
                <div className="res-category-container" >
                    <img className="category-container-nav" key={cat._id} name={cat._id}  onClick={()=>action(cat.shortening)} src={`/categories/${cat.identifier}.svg`} alt={cat.nombre} title={cat.nombre}/>
                    <div className="res-category-tag" >{cat.tag}</div>
                </div>
                    </SwiperSlide>
            })
        }

        </Swiper>
    </>
    );
}
export default FilterSlider