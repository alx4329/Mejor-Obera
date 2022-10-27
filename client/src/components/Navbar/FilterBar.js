import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/reducer/categoriesReducer";
import { useNavigate } from "react-router-dom";
import './FilterBar.css'


const FilterBar=() =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categories = useSelector(state=>state.categories.categories)

    React.useEffect(()=>{
        dispatch(getCategories())
    },[])
    
    
    const goToCategory =(id)=>{
        navigate(`/category/${id}`)
    }
    return(
        <div className="categories-container" >
            {
                categories && categories.map((cat,i)=>{
                    
                    return (
                        <img className="category-container" key={cat._id} name={cat._id}  onClick={()=>goToCategory(cat._id)} src={`/categories/${cat.identifier}.svg`} alt={cat.nombre} title={cat.nombre}/>
                    )
                })
            }
                    
        </div>
    )
}

export default FilterBar