import React from "react";

import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import './Search.css'
const Search = ({res,setQuery,searchQuery}) =>{
    return(
        <>
            <input 
                onChange={(e)=>setQuery(e.target.value)} 
                className={res?"res-input-searchbar":"input-searchbar"}
                value={searchQuery}
                 />

        </>

        
        
    )
}
// const Search = (props) => {
    
//     console.log(props)
//     return (
//     <form>
//       <TextField
//         id="search-bar"
//         className="text"
//         onInput={(e) => {
//             props.setQuery(e.target.value);
//         }}
//         label="Enter a city name"
//         variant="outlined"
//         placeholder="Search..."
//         size="small"
//       />
//       <IconButton type="submit" aria-label="search">
//         <SearchIcon style={{ fill: "blue" }} />
//       </IconButton>
//     </form>
//   );}
export default Search