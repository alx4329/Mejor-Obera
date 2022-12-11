import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Banners from '../../components/Landing/Banners'
import Navbar from '../../components/Navbar/Navbar'
import OfferList from '../../components/Offers/offerList'
import ResSidebar from '../../components/Offers/ResSidebar'
import SideBar from '../../components/Offers/SideBar.jsx'
import useWindowSize from '../../hooks/useWindowSize'
import { getCategorizedProducts, getCommerces, getProducts } from '../../redux/reducer/noAuth'
import './Offers.css'

const Offers =()=>{
    const windowSize=useWindowSize()
    const offers = useSelector(state=>state.noAuth.offers)
    const commerces = useSelector(state=>state.noAuth.commerces)
    const categorizedOffers = useSelector(state=>state.noAuth.categorizedOffers)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        if(offers.length===0)dispatch(getProducts())
        if(Object.keys(categorizedOffers).length===0) dispatch(getCategorizedProducts())
        if(commerces.length===0) dispatch(getCommerces())
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[])
    
    const [list,setList] = React.useState([])
    const [category, setCategory] = React.useState("all")
    React.useEffect(()=>{
        if(category==="all") setList(offers)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[offers])
    React.useEffect(()=>{
        console.log(category)
        if(category==="all") setList(offers)
        else setList(categorizedOffers[category].products)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[category])
    return(
        <>
            <Navbar/>
            <div className={windowSize.innerWidth<720?"res-offers-container": 'offers-container'} >
            {windowSize.innerWidth<720?<ResSidebar setCategory={setCategory}/>: <SideBar setCategory={setCategory}/>}
                <OfferList list={list}  />
            </div>
        </>
    )
}

export default Offers