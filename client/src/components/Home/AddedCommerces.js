import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategorizedCommerces, getCommerces } from '../../redux/reducer/noAuth'
import './AddedCommerces.css'
import CommerceCard from './CommerceCard'
const AddedCommerces = () =>{
    const dispatch = useDispatch()
    // const commerces= useSelector(state=>state.)
    useEffect(()=>{
        dispatch(getCommerces())
        dispatch(getCategorizedCommerces())
    },[])
    const reduxCommerces = useSelector(state=>state.noAuth.commerces)
    // const commercesSlice = reduxCommerces.slice(0,25)
    return(
        <div className='home-commerces-container' >
            <p>COMERCIOS ADHERIDOS</p>
            <div className='commerces-list'>
                {
                    reduxCommerces && reduxCommerces.map(item=>
                        {return <CommerceCard info={item}/>}
                    )
                }
            </div>
        </div>
    )
}

export default AddedCommerces