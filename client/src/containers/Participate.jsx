import React from "react";
import Information from "../components/Participate/Information";
import ParticipateForm from "../components/Participate/ParticipateForm";
import './Participate.css'
const Participate = () =>{
    return(
        
        <div className="participate-container" >
            <ParticipateForm/>
            <Information/>

        </div>
        
    )
}

export default Participate