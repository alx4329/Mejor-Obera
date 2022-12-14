import React from 'react'
import LogoMO from '../../../assets/images/mejorobera.png'
import NavSponsors from '../DesktopNavbar/NavSponsors'
import Search from '../DesktopNavbar/Search'
import FilterBar from '../DesktopNavbar/FilterBar'
import SocialNetwork from '../../SocialNetwork'
import { useNavigate } from 'react-router-dom'
import './ResponsiveNavbar.css'
import SearchBar from '../DesktopNavbar/SearchBar'
const ResponsiveNavbar = () =>{
    const navigate = useNavigate()
    const goHome = () =>{
        navigate('/')
    }
    return(
        <div className='res-navbar-container' >
            <div className='res-upper-header-nav' >
                <div>Aprovechá las ofertas a partir del 3 de Noviembre</div>
            </div>
            {/* <div className='res-nav-middle-container' >
                <NavSponsors res={true}/>
            </div> */}
            <div className='res-up-nav' >
                <img onClick={goHome} src={LogoMO} className="res-logo-nav-mo" alt='Logo Mejor Obera'/>
                <SearchBar res={true} />
                <div className='res-navbar-social-container' >
                    <SocialNetwork component={"res-navbar"} />

                </div>
            </div>
            <div className='res-bottom-nav' >
                <FilterBar res={true}/>
            </div>
            <div className='res-bottom-header-nav' >
            {/* <div>A PARTIR DEL 3 DE NOVIEMBRE ENCONTRÁ LOS COMERCIOS ADHERIDOS •</div> 
            <div>OFERTAS • DESCUENTOS • PROMOCIONES • MEJOR OBERÁ</div> */}
            
            </div>
        </div>
    )
}

export default ResponsiveNavbar