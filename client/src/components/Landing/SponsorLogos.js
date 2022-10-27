import React from 'react'
import './SponsorLogos.css'
import logoCrip from '../../assets/images/home/sponsors/mejorobera-logo-cripco-2.png'
import logoMuni from '../../assets/images/home/sponsors/mejorobera_logo-apoyo-gris-19.jpg'
import logoGob from '../../assets/images/home/sponsors/mejorobera_logo-apoyo-gris-20.jpg'
import logoCem from '../../assets/images/home/sponsors/mejorobera_logo-apoyo-gris-21.jpg'
import logoTur from '../../assets/images/home/sponsors/mejorobera_logo-apoyo-gris-22.jpg'
import logoFed from '../../assets/images/home/sponsors/mejorobera_logo-apoyo-gris-23.jpg'

const SponsorLogos = () =>{
    const logos =[
        {
            logo:logoCrip,
            uri:'http://www.cripco.com.ar/portal/'
        },
        {
            logo:logoMuni,
            uri:'https://obera.gob.ar/'
        },
        {
            logo:logoGob,
            uri:'https://hacienda.gob.ar/'
        },
        {
            logo:logoCem,
            uri:'https://cemisiones.com.ar/v2/'
        },
        {
            logo:logoTur,
            uri:'https://camara-turismo-de-las-sierras.business.site/'
        },
        {
            logo:logoFed,
            uri:'https://fiestadelinmigrante.com.ar/informacion-institucional/'
        },
    ]
    return(
        <div className='sponsors-logos-container' >
            {
                logos.map(item=>{
                    return (
                        <a href={item.uri} target='_blank' rel="noreferrer nofollow" >
                            <img className='sponsor-logo-container' src={item.logo} alt="logo" / >
                        </a>
                    )
                })
            }
        </div>
    )
}

export default SponsorLogos