import React from 'react'
import './Landing.css'
import Banners from '../components/Landing/Banners'
import Section1 from '../components/Landing/Section1'
import Information from '../components/Participate/Information'
import Section4 from '../components/Landing/Section4'
import SponsorLogos from '../components/Landing/SponsorLogos'
import QandA from '../components/QandA/QandA'
import FooterLanding from '../components/Landing/FooterLanding'

const Home = () =>{


    return(
        <div className='home-container' >
            <Banners/>
            <Section1/>
            <Information/>
            <Section4/>
            <SponsorLogos/>
            <QandA/>
            <FooterLanding/>
        </div>
    )
}

export default Home;