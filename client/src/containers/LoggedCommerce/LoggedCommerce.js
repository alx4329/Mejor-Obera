import React from 'react'
import {  useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import LoggedNavbar from '../../components/Commerce/LoggedNavbar';
import { getCommerce } from '../../redux/reducer/commerceReducer';
import FormInfo from '../../components/Commerce/formInfo';
import Products from '../../components/Commerce/Products';

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
            <LoggedNavbar setOption={setOption} />
            
            {
                option ==="Comercio" && <FormInfo info={commerceInfo} />
            }
            {
                option ==="Productos" && <Products id={commerceId} />
            }
        </div>
    )
}

export default Commerce