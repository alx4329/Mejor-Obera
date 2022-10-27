import React from 'react'
import AddedCommerces from '../../components/Home/AddedCommerces'
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
            <Navbar/>
            <div className='home-container' >
                <div className='home-slider' >
                    <Slider slides={windowSize.innerWidth>720? sliderImages.desktop:sliderImages.responsive} />
                </div>
                <AddedCommerces/>
                <div className='green-background' ></div>
                <div className='red-background' ></div>
            </div>
            <SponsorLogos/>
        </>
    )
}

export default Home