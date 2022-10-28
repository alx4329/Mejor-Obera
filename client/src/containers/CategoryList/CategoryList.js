import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import CommerceCard from "../../components/Home/CommerceCard";
import { getCategorizedCommerces } from "../../redux/reducer/noAuth";
import './CategoryList.css'
const CategoryList = () =>{
    const {id}=useParams()
    const reduxCommerces = useSelector(state=>state.noAuth.categorizedCommerces)
    const dispatch=useDispatch()
    useEffect(()=>{
        if(Object.keys(reduxCommerces).length===0) dispatch(getCategorizedCommerces())
        console.log(Object.keys(reduxCommerces))
    },[])
    // if(reduxCommerces[id]===undefined) return(<div>Categoria {id} no existe</div>)
    return(
        <>
            <div className='home-container' >                
                <div className='green-background-category' ></div>
                <div className='red-background' >                        
                    <div className='home-commerces-container' >
                        <p>{reduxCommerces[id]?.categoria}</p>
                        <div className='commerces-list'>
                            {
                                Object.keys(reduxCommerces).length>0 && (reduxCommerces[id] ? reduxCommerces[id].commerces.map(item=>
                                    {return <CommerceCard info={item}/>}
                                ) : <div>Categoria <strong>{id}</strong> no existe</div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CategoryList