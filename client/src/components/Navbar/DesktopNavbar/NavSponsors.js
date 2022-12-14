import React from 'react'
import './NavSponsors.css'
import logoCrip from '../../../assets/cripco_rect.svg'
import logoMuni from '../../../assets/images/home/colorSponsors/mejorobera-23.svg'
import logoMis from '../../../assets/images/home/colorSponsors/mejorobera_misiones.svg'
import logoCem from '../../../assets/images/home/colorSponsors/mejorobera_cem.svg'
import logoTur from '../../../assets/images/home/colorSponsors/mejorobera_cámara turismo.svg'
import logoFed from '../../../assets/images/home/colorSponsors/mejorobera_federación.svg'

const NavSponsors = ({res}) =>{
    const logos =[
        {
            logo:logoCrip,
            uri:'http://www.cripco.com.ar/portal/',
            title:"Camara Regional de Industria, Producción y Comercio"
        },
        {
            logo:logoMuni,
            uri:'https://obera.gob.ar/',
            title:"Municipalidad de Oberá"
        },
        {
            logo:logoMis,
            uri:'https://hacienda.gob.ar/',
            title:"Ministerio de Hacienda, Finanzas, Obras, y Servicios Públicos"
        },
        {
            logo:logoCem,
            uri:'https://cemisiones.com.ar/v2/',
            title:"Confederación Económica de Misiones"
        },
        {
            logo:logoTur,
            uri:'https://camara-turismo-de-las-sierras.business.site/',
            title:"Cámara Turismo de las Sierras Centrales"
        },
        {
            logo:logoFed,
            uri:'https://fiestadelinmigrante.com.ar/informacion-institucional/',
            title:"Federación de Colectividades de Oberá"

        },
    ]
    return(
        <div className={res?"res-sponsors-logos-nav-container":'sponsors-logos-nav-container'} >
            {
                logos.map(item=>{
                    return (
                        <a href={item.uri} target='_blank' rel="noreferrer nofollow" >
                            <img title={item.title} className={res?"res-sponsor-logo-nav-container":'sponsor-logo-nav-container'} src={item.logo} alt="logo" / >
                        </a>
                    )
                })
            }
        </div>
    )
}

export default NavSponsors