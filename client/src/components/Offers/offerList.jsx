import React, { useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import OfferCard from './Offercard'

const OfferList = ({list,detailcommerce}) =>{
    const windowSize = useWindowSize()
    useEffect(() => {
        // 👇️ scroll to top on page load
        setTimeout(()=>{
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        },1000)
      }, []);
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