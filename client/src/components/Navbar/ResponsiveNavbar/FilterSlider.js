import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import mapa from '../../../assets/images/nav/MAPA.svg'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./FilterSlider.css";

// import required modules
import { Autoplay, Pagination } from "swiper";
import { useNavigate } from "react-router-dom";

const FilterSlider= ({slides,action,number})=> {
    
  return (
    <>
    <div className="map-icon" >
        <a href="https://www.google.com/maps/d/u/0/viewer?mid=1ppMsfA5jFboU2Cn4ozPHQvUZgTVtk6E&ll=-27.48446189995544%2C-55.11363117324829&z=15" target='_blank' rel="noreferrer nofollow" >
            <img className="category-container-nav" src={mapa} alt={"mapa de comercios"} title={"Mapa de Comercios"}/>
        </a>
            <div className="res-category-tag" >Mapa de Comercios</div>            
    </div>

    <Swiper
        slidesPerView={number}
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
                return <SwiperSlide className="swiper-slide-nav" key={cat._id} >
                <div className="res-category-container" >
                    <img className="category-container-nav"  name={cat._id}  onClick={()=>action(cat.shortening)} src={`/categories/${cat.identifier}.svg`} alt={cat.nombre} title={cat.nombre}/>
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