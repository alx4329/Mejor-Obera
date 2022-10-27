import React, { useEffect, useState } from 'react'
import './Section1.css'
import Slider from '../Slider'
import JoinForm from '../Modals/JoinForm'
import useWindowSize from '../../hooks/useWindowSize'
import sliderImages from '../../utils/sliderImages'
const Section1 = () =>{
    const windowSize = useWindowSize()
    
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
                    <Slider slides={windowSize.innerWidth>720? sliderImages.desktop:sliderImages.responsive} />
                </div>
                <p className='home-s1-descrption' >*Las imágenes son ilustrativas, ver <a href='https://docs.google.com/document/d/19yP0lIg4s-63pWYXGDGi1rl35Vd_T9eW0QSko4j3TcE/edit' >Condiciones de Adhesión MejorOberá 2022</a></p>
            </div>
        </div>
    )
}

export default Section1