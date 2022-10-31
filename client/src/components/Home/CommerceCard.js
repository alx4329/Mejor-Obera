import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCommerceDetail } from '../../redux/reducer/noAuth'
import './CommerceCard.css'
const CommerceCard = ({info}) => {
    const navigate=useNavigate()
    const dispatch = useDispatch()
    const goToDetail=(info)=>{
        dispatch(setCommerceDetail(info))
        navigate(`/comercio/${info._id}`)
    }
    return(
        <div onClick={()=>goToDetail(info)} className='card-container' >
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