import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { logout } from '../../redux/reducer/authReducer';

const LoggedNavbar = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signOut = () =>{
        dispatch(logout())
        setTimeout(()=>{
        navigate('/login');
        },1000)
    }
    return(
        <div className='navbar-container'>
            <div onClick={signOut} >Logout</div>
        </div>
    )
}

export default LoggedNavbar