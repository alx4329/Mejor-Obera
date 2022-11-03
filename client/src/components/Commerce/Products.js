import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/reducer/commerceReducer'
import AddProduct from '../Products/AddProduct'
import ProductsTable from '../Products/ProductsTable'

const Products = ({id}) =>{
    const dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getProducts({id}))
    },[])
    const products = useSelector(state=>state.userCommerce.products)
    const comercio =useSelector(state=>state.userCommerce.commerce)
    const nombreComercio = comercio?.nombre || ""
    console.log(products)
    return(
        <>
            <AddProduct id={id}/>
            {products.length>0 && <ProductsTable nombreComercio={nombreComercio} productList={products} />}
        </>
    )
}

export default Products