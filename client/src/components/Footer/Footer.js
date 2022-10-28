import React from 'react'
import SocialNetwork from '../SocialNetwork'
import LogoMO from '../../assets/images/mejorobera.png'
import './Footer.css'
const Footer = () =>{
    const items = [
        {
            text:"Bases y Condiciones",
            uri:"https://docs.google.com/document/d/19yP0lIg4s-63pWYXGDGi1rl35Vd_T9eW0QSko4j3TcE/edit "
        },
        {
            text:"Detalle de Adhesión",
            uri:"https://docs.google.com/document/d/1PuvUZhcTa0mnl9GQKXaM7vL1HOlMUp0zuoF7kJxwUiE/edit"
        },
        {
            text:"Políticas de Privacidad",
            uri:"https://docs.google.com/document/d/1S1HOHRQEfnxE8RKZjq19dA2pgsUbRoX1HgrVvFhr4-U/edit"
        },
        {
            text:"Asociarme a la CRIPCO",
            uri:"https://docs.google.com/document/d/1SI5cJs-l6XTVJGR0P8zHicCM0iZAWboSmI6F6I8WKlE/edit"
        },
        {
            text:"Descargables",
            uri:""
        },
    ]
    const items2 = [
        {
            text:"Ofertas",
            uri:""
        },
        {
            text:"Mapa Interactivo",
            uri:""
        },
        {
            text:"Blog",
            uri:""
        },

    ]
    return (
        <div className='footer-container' >
            <div className='footer-content' >
                <div className='colummna-footer' >
                    <img className='footer-logo' src={LogoMO} alt='Logo Mejor Oberá' />
                </div>
                <div className='colummna-footer ' >
                    <SocialNetwork component={"footer"} />
                </div>
                <div className='colummna-footer items-columna' >
                {
                    items.map(item=>{
                        return <a className='' href={item.uri}target='_blank'  rel="noreferrer nofollow">{item.text}</a>
                    })
                }
                </div>
                <div className='colummna-footer items-columna' >
                {
                    items2.map(item=>{
                        return <a className='' href={item.uri}target='_blank'  rel="noreferrer nofollow">{item.text}</a>
                    })
                }
                    <div className='footer-adheri' >Adherí tu comercio</div>
                </div>
                <div className='colummna-footer bases' >El uso de este sitio web implica la aceptación de los Términos y condiciones y de las Políticas Privacidad del MejorOberá. Las ofertas y/o promociones son ofrecidos en forma directa por los Comercios Adheridos y no por la CRIPCO. Consulte los comercios de cada uno de los adheridos para conocer los Términos y Condiciones de cada oferta y/o promoción.</div>
            </div>
        </div>
    )
}

export default Footer