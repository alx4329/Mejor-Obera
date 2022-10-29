import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/reducer/categoriesReducer";
import { useNavigate } from "react-router-dom";
import './FilterBar.css'
import FilterSlider from "../ResponsiveNavbar/FilterSlider";


const FilterBar=({res}) =>{
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const categories = useSelector(state=>state.categories.categories)

    React.useEffect(()=>{
        dispatch(getCategories())
    },[])
    
    
    const goToCategory =(section)=>{
        navigate(`/${section}`)
    }
    return(
        <div className="categories-container" >
            {res?<FilterSlider slides={categories} />:(
                categories && categories.map((cat,i)=>{                    
                    return (
                        <div>
                            <img className="category-container" key={cat._id} name={cat._id}  onClick={()=>goToCategory(cat.shortening)} src={`/categories/${cat.identifier}.svg`} alt={cat.nombre} title={cat.nombre}/>
                            <div>{cat.tag}</div>
                        </div>
                        
                    )
                })
            )
            }
                    
        </div>
    )
}

export default FilterBar