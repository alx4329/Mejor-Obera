import React from 'react'
import LogoMO from '../../assets/images/mejorobera.png'
import fb_logo from '../../assets/images/nav/facebook.svg'
import ig_logo from '../../assets/images/nav/instagram.svg'
import NavSponsors from './NavSponsors'
import Search from './Search'
import './Navbar.css'
import FilterBar from './FilterBar'
const Navbar = () =>{

    return(
        <div className='navbar-container' >
            <div className='upper-header-nav' >
                El MejorOberá comienza el 3 de Noviembre • Buscá los comercios adheridos y aprovechá las ofertas
            </div>
            <div className='up-nav'>
                <div className='left-up-nav' >
                    <img src={LogoMO} className="logo-nav-mo" alt='Logo Mejor Obera'/>
                    <div className='nav-fecha-evento' >
                        <p>4,5 y 6 <br/>
                        DE NOVIEMBRE</p>
                    </div>
                    <Search/>
                    <p>Seguinos</p>
                    <div className='nav-redes'>
                        <a href="https://www.facebook.com/profile.php?id=100086669450468" target='_blank' rel="noreferrer nofollow" >
                            <img className='nav-red-icon' src={fb_logo} alt="logo facebook" / >
                        </a>
                        <a href="https://instagram.com/mejorobera?igshid=YmMyMTA2M2Y=" target='_blank' rel="noreferrer nofollow" >
                            <img className='nav-red-icon' src={ig_logo} alt="logo instagram" / >
                        </a>
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