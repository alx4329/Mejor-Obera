import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCommerceDetail } from '../../redux/reducer/noAuth'
import './Auspician.css'
const Auspician = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const commerces = useSelector(state=>state.noAuth.commerces)
    const auspiciantes = commerces.filter(commerce=>commerce.auspicia===true)
    const goToDetail=(info)=>{
        dispatch(setCommerceDetail(info))
        navigate(`/comercio/${info._id}`)
    }
    return (
        <>
            <div className='auspician-container' >
                <div className='auspician-title' >APOYAN ESTA INICIATIVA</div>
                <div className='auspician-content' >
                    {
                        auspiciantes?.map(item=>{
                            return (
                                <img onClick={()=>goToDetail(item)} src={item.imageUrl} alt='Logo auspiciante' className='logo-auspicia' />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default Auspician