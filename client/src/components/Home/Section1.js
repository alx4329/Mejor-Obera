import React from 'react'

import './Section1.css'
import slide1 from '../../assets/images/home/slider1/mejorobera_beneficos-exclusivos-horizontal-25.jpg'
import slide2 from '../../assets/images/home/slider1/mejorobera_beneficos-exclusivos-horizontal-26.jpg'
import slide3 from '../../assets/images/home/slider1/mejorobera_beneficos-exclusivos-horizontal-27.jpg'
import slide4 from '../../assets/images/home/slider1/mejorobera_beneficos-exclusivos-horizontal-28.jpg'
import slide5 from '../../assets/images/home/slider1/mejorobera_beneficos-exclusivos-horizontal-29.jpg'
import slide6 from '../../assets/images/home/slider1/mejorobera_beneficos-exclusivos-horizontal-30.jpg'
import Slider from '../Slider'
const Section1 = () =>{
    const slides = [
        slide1,
        slide2,
        slide3,
        slide4,
        slide5,
        slide6
    ]
    return(
        <div className="home-section1" >
            <div className='h-s1-container' >
                <p className='home-section1-title'>Sumá tu comercio al Mejor Oberá 2022</p>
                <p className='home-section1-headline'>POTENCIÁ TUS VENTAS Y FIDELIZÁ CLIENTES</p>
                <div className='home-section1-adheri' >
                    <p className='hom1-s1-ad-title'>ADHERÍ TU COMERCIO</p>
                    <a href='https://docs.google.com/forms/d/e/1FAIpQLSe4UXY8i4E1_pmOl6leoCRh0o5JJstYSqzmgMCmvBMNrBRUzA/viewform' className='hom1-s1-ad-button'>COMPLETAR FORMULARIO</a>
                    <p className='hom1-s1-ad-detalle'>Conocé en detalle la forma de participar y los beneficios exlusivos <a className='hom1-s1-ad-link' href="https://docs.google.com/document/d/1PuvUZhcTa0mnl9GQKXaM7vL1HOlMUp0zuoF7kJxwUiE/edit" >aquí</a> </p>
                </div>
                <p className='home-s1-mid-title' >¡Nueva edición! Más beneficios para tu comercio.</p>
                <div className='h-s1-slider' >
                    <Slider slides={slides} />

                </div>
                <p className='home-s1-descrption' >*Las imágenes son ilustrativas, ver <a href='https://docs.google.com/document/d/19yP0lIg4s-63pWYXGDGi1rl35Vd_T9eW0QSko4j3TcE/edit' >Condiciones de Adhesión MejorOberá 2022</a></p>
            </div>
        </div>
    )
}

export default Section1