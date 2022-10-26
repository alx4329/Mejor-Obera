import React from 'react'
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LoggedNavbar from '../../components/Commerce/LoggedNavbar';
import { getCommerce } from '../../redux/reducer/commerceReducer';
import FormInfo from '../../components/Commerce/formInfo';

const Commerce = ( ) => {
    const {commerceId} = useParams()
    const dispatch = useDispatch()
    const commerceInfo = useSelector(state=>state.userCommerce.commerce)
    React.useEffect(()=>{
        dispatch(getCommerce({commerceId}))
    },[])
    const [option,setOption] = React.useState("Comercio")

    return(
        <div className='commerce-container' >
            <LoggedNavbar/>
            <div className='left-sidebar' >
                <div onClick={()=>setOption("Usuario")} className='sidebar-option'>Información del Usuario</div>
                <div onClick={()=>setOption("Comercio")} className='sidebar-option'>Información del Comercio</div>
                <div onClick={()=>setOption("Productos")} className='sidebar-option'>Productos destacados</div>
            </div>
            {
                option ==="Comercio" && <FormInfo info={commerceInfo} />
            }
        </div>
    )
}

export default Commerce