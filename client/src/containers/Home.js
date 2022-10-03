import React from 'react'
import './Home.css'
import Banners from '../components/Home/Banners'
import Section1 from '../components/Home/Section1'

const Home = () =>{


    return(
        <div className='home-container' >
            <Banners/>
            <Section1/>
        </div>
    )
}

export default Home;