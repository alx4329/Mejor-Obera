import React from 'react'
import './Home.css'
import Banners from '../components/Home/Banners'
import Section1 from '../components/Home/Section1'
import Information from '../components/Participate/Information'
import Section4 from '../components/Home/Section4'
import SponsorLogos from '../components/Home/SponsorLogos'
import QandA from '../components/QandA/QandA'
import FooterLanding from '../components/Home/FooterLanding'

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