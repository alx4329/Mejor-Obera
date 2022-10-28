import React from 'react'
import LogoMO from '../../assets/images/mejorobera.png'
import NavSponsors from './NavSponsors'
import Search from './Search'
import './Navbar.css'
import FilterBar from './FilterBar'
import SocialNetwork from '../SocialNetwork'
import { useNavigate } from 'react-router-dom'
const Navbar = () =>{
    const navigate = useNavigate()
    const goHome = () =>{
        navigate('/home')
    }
    return(
        <div className='navbar-container' >
            <div className='upper-header-nav' >
                El MejorOberá comienza el 3 de Noviembre • Buscá los comercios adheridos y aprovechá las ofertas
            </div>
            <div className='up-nav'>
                <div className='left-up-nav' >
                    <img onClick={goHome} src={LogoMO} className="logo-nav-mo" alt='Logo Mejor Obera'/>
                    <div className='nav-fecha-evento' >
                        <p>4,5 y 6 DE<br/>
                        NOVIEMBRE</p>
                    </div>
                    <Search/>
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
            A PARTIR DEL 3 DE NOVIEMBRE ENCONTRÁ LOS COMERCIOS ADHERIDOS • OFERTAS • DESCUENTOS • PROMOCIONES • MEJOR OBERÁ
            </div>
        </div>
    )
}

export default Navbar