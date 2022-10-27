import React from 'react'
import './FooterLanding.css'
const FooterLanding = () =>{    
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
    ]
    return(
        <div className='footer-landing' >
            {
                items.map(item=>{
                    return <a className='foot-land-item' href={item.uri}target='_blank'  rel="noreferrer nofollow">{item.text}</a>
                })
            }
        </div>
    )
}

export default FooterLanding