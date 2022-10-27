import React from "react";
import { useParams } from "react-router-dom";

const CategoryList = () =>{
    const {id}=useParams()
    return(
        <div>categoryList: {id}</div>
    )
}

export default CategoryList