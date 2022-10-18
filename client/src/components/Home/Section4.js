import React from 'react'
import './Section4.css'
import Slider from '../Slider'
import slide1 from '../../assets/images/home/slider2/mejorobera_beneficio-04.jpg'
import slide2 from '../../assets/images/home/slider2/mejorobera_beneficio-05.jpg'
import slide3 from '../../assets/images/home/slider2/mejorobera_beneficio-06.jpg'
import slide4 from '../../assets/images/home/slider2/mejorobera_beneficio-07.jpg'
import res_slide1 from '../../assets/images/home/slider2/responsive/mejorobera_beneficio-08.jpg'
import res_slide2 from '../../assets/images/home/slider2/responsive/mejorobera_beneficio-09.jpg'
import res_slide3 from '../../assets/images/home/slider2/responsive/mejorobera_beneficio-10.jpg'
import res_slide4 from '../../assets/images/home/slider2/responsive/mejorobera_beneficio-11.jpg'
import useWindowSize from '../../hooks/useWindowSize'

const Section4 = () =>{
    const slides =[slide1,slide2,slide3,slide4]
    const res_slides =[res_slide1,res_slide2,res_slide3,res_slide4]
    const windowSize = useWindowSize()
    return(
        <div className='section4-container' >
            <div className='Section4-content' >
                <div className='Slider-container' >
                    <p>¿Por qué participar en el Mejor Oberá?</p>
                    <div className="h-slider" >
                        <Slider slides={windowSize.innerWidth>720?slides:res_slides} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Section4