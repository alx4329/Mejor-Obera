import React from 'react'
import fb_logo from '../assets/images/nav/facebook.svg'
import ig_logo from '../assets/images/nav/instagram.svg'
const SocialNetwork = ({component}) => {
    return (
        <>
            <p>Seguinos</p>
            <div className={component==="navbar"? 'nav-redes':'footer-redes'}>
                <a href="https://www.facebook.com/profile.php?id=100086669450468" target='_blank' rel="noreferrer nofollow" >
                    <img className='nav-red-icon' src={fb_logo} alt="logo facebook" / >
                </a>
                <a href="https://instagram.com/mejorobera?igshid=YmMyMTA2M2Y=" target='_blank' rel="noreferrer nofollow" >
                    <img className='nav-red-icon' src={ig_logo} alt="logo instagram" / >
                </a>
            </div>
        </>
    )
}

export default SocialNetwork