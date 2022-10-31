import React from 'react'
import Footer from '../../components/Footer/Footer'
import AddedCommerces from '../../components/Home/AddedCommerces'
import SponsorsHome from '../../components/Home/SponsorsHome'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider'
import useWindowSize from '../../hooks/useWindowSize'
import sliderImages from '../../utils/sliderImages'
import home_banner_desktop from '../../assets/home_banners/MO_banner_escritorio.png'
import home_banner_mobile from '../../assets/home_banners/MO_banner_móvil.jpg'

import './Home.css'
const Home = () =>{
    const windowSize = useWindowSize()
    return (
        <>
            <Navbar/>
            <div className={windowSize.innerWidth<720?"res-home-container": 'home-container'} >
                <div className='green-background' >
                    <div className='home-slider' >
                        {/* <Slider slides={windowSize.innerWidth>720? sliderImages.desktop:sliderImages.responsive} /> */}
                        <img className='home-banner' src={windowSize.innerWidth>720? home_banner_desktop:home_banner_mobile} alt='Banner' />
                    </div>

                </div>
                <div className='red-background' >
                <AddedCommerces/>
                </div>
            <SponsorsHome/>
            <Footer/>
            </div>
            
        </>
    )
}

export default Home