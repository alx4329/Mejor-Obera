import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import OfferCard from './Offercard'

const OfferList = ({list,detailcommerce}) =>{
    const windowSize = useWindowSize()

    return(
        <div className={windowSize.innerWidth>720?(detailcommerce?'res-offerListContainer':'offerListContainer'):'res-offerListContainer'}>
        {
            list?.map(item=>{
                return(
                    <OfferCard detailCommerce={detailcommerce?true:false} offer={item}/>
                )
            })
        }
        </div>
    )
}

export default OfferList