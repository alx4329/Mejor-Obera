import React from "react";
import Carousel from "../Carousel";
import infoBackground from '../../assets/images/home/mejorobera_banner-que-es.jpg'
import './Information.css'
import logoMo from '../../assets/images/mejorobera.png'
import Slider from "../Slider";
import JoinForm from "../Modals/JoinForm";



const Information = () =>{
    
    return(
        <>

        <div className="info-container">
            <div className="info-bg" >
                <div className="left-info" >
                    <div className="info-title">¿Qué es Mejor Oberá?</div>
                    <div className="info-text">
                        <p>
                            MejorOberá es una acción comercial organizada por la Cámara de Comercio, Industria y Producción de Oberá (CRIPCO), que busca posicionar a la ciudad como nodo turístico, productivo e industrial, a la vez que impulsar el comercio local.
                        </p>
                        <p>
                            En este evento participan importantes comercios y empresas obereñas que promocionan sus productos y servicios, con ofertas o descuentos especiales durante cuatro días.
                        </p>
                    </div>
                </div>
                <div className="right-info" >
                    <img className="info-logo" src={logoMo} alt="Logo Mejor Oberá"/>
                    <p className="" >MejorOberá es una marca registrada de la CRIPCO, para poder usarla en tus comunicaciones tenés que participar oficialmente como Patrocinador Comercial.</p>
                    <JoinForm text="ADHERIR MI COMERCIO" classNameStyle="hom1-info-ad-button" />
                    
                </div>
            </div>
            
            <img className="info-background" src={infoBackground} alt="Fondo mejor Oberá" />
            
        </div>
        </>
    )
}

export default Information