import React from "react";
import banner1 from '../../assets/images/home/mejorobera_baner-home.jpg'
import banner2 from '../../assets/images/home/mejorobera_banner-home-2.jpg'
import LogoMO from '../../assets/images/mejorobera.png'
import LogoMOinciativa from '../../assets/images/mejorobera_logo-iniciativa.png'
import './Banners.css'

const Banners = () =>{
    return(
        <div className='landing-banners' >
                <div className="LogosBanner" >
                    <img className="banners-logo-mo" src={LogoMO} alt="logo mejor obera" />
                    <img className="banners-logo-mo cr" src={LogoMOinciativa} alt="logo mejor obera" />
                </div>
                <img className='mySlides' id='pic2' src={banner1} loading="lazy" alt='banner1' />
                <img className='mySlides' id='pic1' src={banner2} loading="lazy" alt='banner1' />
        </div>
    )
}

export default Banners