import React from 'react'
import LogoMO from '../../../assets/images/mejorobera.png'
import NavSponsors from './NavSponsors'
import Search from './Search'
import './DesktopNavbar.css'
import FilterBar from './FilterBar'
import SocialNetwork from '../../SocialNetwork'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

const Desktopnavbar = () =>{
    const navigate = useNavigate()
    const goHome = () =>{
        navigate('/')
    }
    return(
        <div className='navbar-container' >
            <div className='upper-header-nav' >
                Aprovechá las ofertas a partir del 3 de Noviembre
            </div>
            <div className='up-nav'>
                <div className='left-up-nav' >
                    <img onClick={goHome} src={LogoMO} className="logo-nav-mo" alt='Logo Mejor Obera'/>
                    <div className='nav-fecha-evento' >
                        <p>3, 4, 5 y 6 DE<br/>
                        NOVIEMBRE</p>
                    </div>
                    <SearchBar/>
                    <div className='nav-redes-container' >
                        <SocialNetwork component={"navbar"} />
                    </div>
                </div>
                    <NavSponsors/>
            </div>
            <div className='bottom-nav' >
                <FilterBar/>
            </div>
            <div className='bottom-header-nav' >
            ENCONTRÁ LOS COMERCIOS ADHERIDOS • OFERTAS • DESCUENTOS • PROMOCIONES • MEJOR OBERÁ
            </div>
        </div>
    )
}

export default Desktopnavbar