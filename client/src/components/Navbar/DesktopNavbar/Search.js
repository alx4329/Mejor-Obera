import React from "react";
import './Search.css'
const Search = ({res}) =>{
    return(
        <input className={res?"res-input-searchbar":"input-searchbar"} />
        
    )
}

export default Search