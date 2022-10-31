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
        if(categories.length===0) dispatch(getCategories())
    },[])
    
    
    const goToCategory =(section)=>{
        navigate(`/${section}`)
    }
    return(
        <div className={res?"res-categories-container" :"categories-container"} >
            {res?<FilterSlider slides={categories} action={goToCategory} number={6} />:(
                <FilterSlider slides={categories} action={goToCategory} number={10} />)
                
            
            }
                    
        </div>
    )
}

export default FilterBar