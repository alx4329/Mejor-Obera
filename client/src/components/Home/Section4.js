import React from 'react'
import './Section4.css'
import Slider from '../Slider'
import slide1 from '../../assets/images/home/slider2/mejorobera_beneficio-04.jpg'
import slide2 from '../../assets/images/home/slider2/mejorobera_beneficio-05.jpg'
import slide3 from '../../assets/images/home/slider2/mejorobera_beneficio-06.jpg'
import slide4 from '../../assets/images/home/slider2/mejorobera_beneficio-07.jpg'
const Section4 = () =>{
    const slides =[
        slide1,
        slide2,
        slide3,
        slide4
    ]
    return(
        <div className='section4-container' >
            <div className='Section4-content' >
                <div className='Slider-container' >
                    <p>¿Por qué participar en el Mejor Oberá?</p>
                    <div className="h-slider" >
                        <Slider slides={slides} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section4