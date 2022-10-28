import React from 'react'
import Footer from '../../components/Footer/Footer'
import AddedCommerces from '../../components/Home/AddedCommerces'
import SponsorsHome from '../../components/Home/SponsorsHome'
import SponsorLogos from '../../components/Landing/SponsorLogos'
import Navbar from '../../components/Navbar/Navbar'
import Slider from '../../components/Slider'
import useWindowSize from '../../hooks/useWindowSize'
import sliderImages from '../../utils/sliderImages'
import './Home.css'
const Home = () =>{
    const windowSize = useWindowSize()
    return (
        <>
            <div className='home-container' >
                <div className='home-slider' >
                    <Slider slides={windowSize.innerWidth>720? sliderImages.desktop:sliderImages.responsive} />
                </div>
                <div className='green-background' ></div>
                <div className='red-background' >
                <AddedCommerces/>
                </div>
            </div>
            
            <SponsorsHome/>
            <Footer/>
        </>
    )
}

export default Home