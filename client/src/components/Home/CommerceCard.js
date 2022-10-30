import React from 'react'
import './CommerceCard.css'
const CommerceCard = ({info}) => {
    return(
        <div className='card-container' >
            <div className='card-picture'>
            {
                info.imageUrl?(
                    <img className='actual-card-picture' title={info.nombre} src={info.imageUrl} alt='Logo de Comercio'/>
                    
                ):(
                    <p className='card-nombre' >{info.nombre}</p>
                )
            }
            </div>
            <div className='card-info' >+INFO</div>
        </div>
    )
}

export default CommerceCard