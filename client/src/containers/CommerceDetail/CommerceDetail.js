import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SocialCommerceNetwork from "../../components/commerceDetail/SocialCommerceNetwork";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OfferList from "../../components/Offers/offerList";
import useWindowSize from "../../hooks/useWindowSize";
import { getDetailCommerce, getProductsCommerce } from "../../redux/reducer/noAuth";

import './CommerceDetail.css'

const CommerceDetail = () =>{
    const windowSize=useWindowSize()
    const {id}=useParams()
    const details = useSelector(state=>state.noAuth.commerceDetail)
    const productsDetail=useSelector(state=>state.noAuth.productsDetail)
    let categoriasHedear =''
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getProductsCommerce({id}))
        if(Object.keys(details).length===0)dispatch(getDetailCommerce({commerceId:id}))
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    },[])
    
    details?.categorias?.forEach((cat,i)=> categoriasHedear.length===0?categoriasHedear=cat:categoriasHedear= categoriasHedear +', '+ cat)
    
    return(
        <>
            <Navbar/>
            {
                Object.keys(details).length===0 ? (<div>Loading</div>):(

                <div className={windowSize.innerWidth<720?"res-detail-container": 'home-container'} >
                    <div className={windowSize.innerWidth<720?"res-red-background-container" : "red-background-detail"} >
                        <div className={ windowSize.innerWidth<720?"res-commerce-detail-left" : "commerce-detail-left" }>
                            <img className="detail-image" src={details.imageUrl||"https://random.imagecdn.app/400/400"} alt=""/>
                        </div>
                        <div className={ windowSize.innerWidth<720?"res-commerce-detail-right" : "commerce-detail-right" } >
                            <div className="detail-title" >
                                <div>
                                    <div className="commerce-detail-nombre" >{details.nombre}</div>
                                    
                                </div>
                                <img className="detail-logo-comercio" src={details.imageUrl||"https://random.imagecdn.app/100/100"} alt="" />
                            </div>
                            <div className="commerce-detail-comercio" >{details.descripcion}</div>
                            {
                                details.telefono? (
                                    <div className="commerce-detail-comercio" >
                                    <br/>
                                    Teléfono: {details.telefono}</div>) : null
                            }
                            <br/>
                            {
                            details.direccion && <div className="commerce-addres" >{details.direccion}</div>

                            }
                            <SocialCommerceNetwork details={details}/>
                        </div>
                    </div>
                    <div className="green-background-detail" >
                        <div className="commerce-detail-products" >
                            {productsDetail.length>0 && productsDetail[0].idComercio===id &&  <OfferList list={productsDetail} detailcommerce={true}/>}
                        </div>
                        
                    </div>
                    <Footer/>
                </div>
                )
            }
        </>
    )
}

export default CommerceDetail