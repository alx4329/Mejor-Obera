import React from 'react'
import Search from './Search';
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCommerceDetail } from '../../../redux/reducer/noAuth';
export default function SearchBar() {
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const [searchQuery, setSearchQuery] = useState("");
    const commerces = useSelector(state=>state.noAuth.commerces)
    const filterData = (query, data) => {
        if (!query) {
          return data;
        } else {
          return data.filter((d) => d.nombre.toLowerCase().includes(query));
        }
      };
    const dataFiltered = filterData(searchQuery, commerces);
    const goTo= (d)=>{
        console.log(d)
        setSearchQuery("")
        dispatch(setCommerceDetail(d))
        navigate(`/comercio/${d._id}`)
    }
    return (
      <div
        style={{
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: 20
        }}
      >
        <Search searchQuery={searchQuery} setQuery={setSearchQuery} />
       
                <div className="dropdown" >
            {
            searchQuery.length>2 && dataFiltered.map((d) => {
                    return(
                    <div onClick={()=>goTo(d)}  className={"dropbtn"}>  
                    <div className='search-nombre' >{d.nombre}</div>
                    <div className='search-direccion'>{d.direccion}</div>
                    </div>
                        )
                    })
            }
        
        </div>
      </div>
    );
  }