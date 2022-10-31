import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SocialCommerceNetwork from "../../components/commerceDetail/SocialCommerceNetwork";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import useWindowSize from "../../hooks/useWindowSize";
import { getDetailCommerce } from "../../redux/reducer/noAuth";

import './CommerceDetail.css'

const CommerceDetail = () =>{
    const windowSize=useWindowSize()
    const {id}=useParams()
    console.log(id)
    const details = useSelector(state=>state.noAuth.commerceDetail)
    let categoriasHedear =''
    details.categorias.forEach((cat,i)=> categoriasHedear.length===0?categoriasHedear=cat:categoriasHedear= categoriasHedear +', '+ cat)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(Object.keys(details).length===0)dispatch(getDetailCommerce({commerceId:id}))
    },[])
    return(
        <>
            <Navbar/>
            <div className={windowSize.innerWidth<720?"res-home-container": 'home-container'} >
                <div className="red-background-detail" >
                    <div className="commerce-detail-left" >
                        <img className="detail-image" src={details.imageUrl||"https://random.imagecdn.app/400/400"} alt=""/>
                    </div>
                    <div className="commerce-detail-right" >
                        <div className="detail-title" >
                            <div>
                                <div className="commerce-detail-nombre" >{details.nombre}</div>
                                <div className="detail-cat">{categoriasHedear}</div>
                            </div>
                            <img className="detail-logo-comercio" src={details.imageUrl||"https://random.imagecdn.app/100/100"} alt="" />
                        </div>
                        <div className="commerce-detail-comercio" >{details.descripcion}</div>
                        <br/>
                        {
                        details.direccion && <div className="commerce-addres" >{details.direccion}</div>

                        }
                        <SocialCommerceNetwork details={details}/>
                    </div>
                </div>
                <div className="green-background-detail" >
                    <div className="commerce-detail-products" >Ofertas</div>
                    <div className="commerce-detail-location" >MAPA</div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default CommerceDetail