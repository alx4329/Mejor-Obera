import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import ResponsiveNavbar from './ResponsiveNavbar/ResponsiveNavbar'
import Desktopnavbar from './DesktopNavbar/DesktopNavbar'
const Navbar = () =>{
    const windowSize = useWindowSize()
    return(
        <>
            {windowSize.innerWidth>720? <Desktopnavbar/>:<ResponsiveNavbar/>}
        </>
    )
}

export default Navbar