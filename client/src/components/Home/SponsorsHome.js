import React from 'react'
import logoCrip from '../../assets/images/home/colorSponsors/mejorobera_cripco.svg'
import logoMuni from '../../assets/images/home/colorSponsors/mejorobera-23.svg'
import logoMis from '../../assets/images/home/colorSponsors/mejorobera_misiones.svg'
import logoCem from '../../assets/images/home/colorSponsors/mejorobera_cem.svg'
import logoTur from '../../assets/images/home/colorSponsors/mejorobera_cámara turismo.svg'
import logoFed from '../../assets/images/home/colorSponsors/mejorobera_federación.svg'
import './SponsorsHome.css'
const SponsorsHome = () =>{
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
        <div className='sponsors-home-container' >
            <div className='sponsors-home-container-content' >
                <div className='left-sponsor' >
                    <div className='sponsor-title' >INICIATIIVA</div>
                    <a href={logos[0].uri} target='_blank' rel="noreferrer nofollow" >
                        <img title={logos[0].title} className='sponsor-home-container' src={logos[0].logo} alt="logo" / >
                    </a>
                </div>
                <div className='right-sponsor' >
                    <div className='sponsor-title' >CON EL APOYO DE</div>
                    <div className='right-sponsor-logos' >
                        {
                            logos.map((item)=>{
                                if(item.title===logos[0].title) return null
                                return <a href={item.uri} target='_blank' rel="noreferrer nofollow" >
                                    <img title={item.title} className='sponsor-home-container' src={item.logo} alt="logo" / >
                                </a>
                                
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    )
}

export default SponsorsHome