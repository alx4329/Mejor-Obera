import React from 'react'
import fb_logo from '../../assets/images/nav/facebook.svg'
import ig_logo from '../../assets/images/nav/instagram.svg'
import web_logo from '../../assets/images/nav/web.svg'
import wp_logo from '../../assets/images/nav/whatsapp.svg'
import './SocialCommerceNetwork.css'

const SocialCommerceNetwork = ({details}) =>{
    const regex = /[abcdefghijklmnñopqrstuvwyz]/ig
    return(
        <div className="detail-redes" >
            {details.fb_url && 
                <div><a href={details.fb_url} target='_blank' rel="noreferrer nofollow" >
                    <img title="Facebook" className='nav-red-icon detail-icon' src={fb_logo} alt="logo facebook comercio" / >
                </a></div>
            }
            {details.ig_url && 
                <div><a href={details.ig_url} target='_blank' rel="noreferrer nofollow" >
                    <img title='Instagram' className='nav-red-icon detail-icon' src={ig_logo} alt="logo instagram comercio" / >
                </a></div>
            }
            {details.web_url && 
                <div><a href={details.web_url} target='_blank' rel="noreferrer nofollow" >
                    <img title='Web Comercio' className='nav-red-icon detail-icon' src={web_logo} alt="logo instagram comercio" / >
                </a></div>
            }
            {details.whatsapp && 
                <div><a href={`https://wa.me/+54${((details.whatsapp).replace(/\s/g,'').replace(regex,""))}`} target='_blank' rel="noreferrer nofollow" >
                    <img title={details.whatsapp} className='nav-red-icon detail-icon' src={wp_logo} alt="logo instagram comercio" / >
                </a></div>
            }
            
        </div>
    )
}

export default SocialCommerceNetwork