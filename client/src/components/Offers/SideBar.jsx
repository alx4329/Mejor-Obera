import React from 'react'
import { useSelector } from 'react-redux'
import './SideBar.css'
const SideBar = ({setCategory}) =>{
    const categories = useSelector(state=>state.categories.categories)

return(
        <div className='sidebar-container' >
            {
                categories.map(cat=>{
                    return(
                        <div onClick={()=>setCategory(cat.shortening)} className='sidebar-categoria'>
                            {cat.nombre}
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default SideBar