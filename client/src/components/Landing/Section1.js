import React, { useEffect, useState } from 'react'

import './Section1.css'
import slide1 from '../../assets/images/home/slider1/mejorobera_beneficos-exclusivos-horizontal-25.jpg'
import slide2 from '../../assets/images/home/slider1/mejorobera_beneficos-exclusivos-horizontal-26.jpg'
import slide3 from '../../assets/images/home/slider1/mejorobera_beneficos-exclusivos-horizontal-27.jpg'
import slide4 from '../../assets/images/home/slider1/mejorobera_beneficos-exclusivos-horizontal-28.jpg'
import slide5 from '../../assets/images/home/slider1/mejorobera_beneficos-exclusivos-horizontal-29.jpg'
import slide6 from '../../assets/images/home/slider1/mejorobera_beneficos-exclusivos-horizontal-30.jpg'
//responsive slides
import res_Slide1 from '../../assets/images/home/slider1/responsive/mejorobera_beneficos-exclusivos-cuadrado-31.jpg'
import res_Slide2 from '../../assets/images/home/slider1/responsive/mejorobera_beneficos-exclusivos-cuadrado-32.jpg'
import res_Slide3 from '../../assets/images/home/slider1/responsive/mejorobera_beneficos-exclusivos-cuadrado-33.jpg'
import res_Slide4 from '../../assets/images/home/slider1/responsive/mejorobera_beneficos-exclusivos-cuadrado-34.jpg'
import res_Slide5 from '../../assets/images/home/slider1/responsive/mejorobera_beneficos-exclusivos-cuadrado-35.jpg'
import res_Slide6 from '../../assets/images/home/slider1/responsive/mejorobera_beneficos-exclusivos-cuadrado-36.jpg'

import Slider from '../Slider'
import JoinForm from '../Modals/JoinForm'
import useWindowSize from '../../hooks/useWindowSize'
const Section1 = () =>{
    const slides = [slide1,slide2,slide3,slide4,slide5,slide6]
    const resSlides = [res_Slide1,res_Slide2,res_Slide3,res_Slide4,res_Slide5,res_Slide6]
    const windowSize = useWindowSize()
    console.log(windowSize)
    
    return(
        <div className="home-section1" >
            <div className='h-s1-container' >
                <p className='home-section1-title'>Sumá tu comercio al Mejor Oberá 2022</p>
                <p className='home-section1-headline'>POTENCIÁ TUS VENTAS Y FIDELIZÁ CLIENTES</p>
                <div className='home-section1-adheri' >
                    <p className='hom1-s1-ad-title'>ADHERÍ TU COMERCIO</p>
                    <JoinForm text={"COMPLETAR FORMULARIO"} classNameStyle='hom1-s1-ad-button' />
                    <p className='hom1-s1-ad-detalle'>Conocé en detalle la forma de participar y los beneficios exlusivos <a className='hom1-s1-ad-link' href="https://docs.google.com/document/d/1PuvUZhcTa0mnl9GQKXaM7vL1HOlMUp0zuoF7kJxwUiE/edit" >aquí</a> </p>
                </div>
                <p className='home-s1-mid-title' >¡Nueva edición! Más beneficios para tu comercio.</p>
                <div className='h-s1-slider' >
                    <Slider slides={windowSize.innerWidth>720? slides:resSlides} />
                </div>
                <p className='home-s1-descrption' >*Las imágenes son ilustrativas, ver <a href='https://docs.google.com/document/d/19yP0lIg4s-63pWYXGDGi1rl35Vd_T9eW0QSko4j3TcE/edit' >Condiciones de Adhesión MejorOberá 2022</a></p>
            </div>
        </div>
    )
}

export default Section1