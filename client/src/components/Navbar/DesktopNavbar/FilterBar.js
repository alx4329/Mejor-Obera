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
        <div className={res?"res-categories-container" :"categories-container"} >
            {res?<FilterSlider slides={categories} action={goToCategory} />:(
                categories && categories.map((cat,i)=>{
                    console.log(cat.tag)
                    return (
                        <div className="category-container" >
                            <img className="category-image" key={cat._id} name={cat._id}  onClick={()=>goToCategory(cat.shortening)} src={`/categories/${cat.identifier}.svg`} alt={cat.nombre} title={cat.nombre}/>
                            <div className="category-tag" >{cat.tag}</div>
                        </div>
                        
                    )
                })
            )
            }
                    
        </div>
    )
}

export default FilterBar