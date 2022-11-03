import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logout } from '../../redux/reducer/authReducer';
import { cleanCommerce } from '../../redux/reducer/commerceReducer';
import './LoggedNavbar.css'
import LogoMO from '../../assets/images/mejorobera.png'

const LoggedNavbar = ({setOption}) =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signOut = () =>{
        dispatch(logout())
        setTimeout(()=>{
        navigate('/login');
        dispatch(cleanCommerce())
        },1000)
    }
    return(
        <div className='logged-navbar-container'>
            <img  src={LogoMO} className="logged-nav-mo" alt='Logo Mejor Obera'/>
                    <div className='nav-fecha-evento' >
                        <p>3, 4, 5 y 6 DE<br/>
                        NOVIEMBRE</p>
                    </div>
            {/* <div onClick={()=>setOption("Usuario")} className='sidebar-option'>Usuario</div> */}
                <div onClick={()=>setOption("Comercio")} className='sidebar-option'>Comercio</div>
                <div onClick={()=>setOption("Productos")} className='sidebar-option'>Productos destacados</div>
            <div className='sidebar-option' onClick={signOut} >Salir</div>
        </div>
    )
}

export default LoggedNavbar