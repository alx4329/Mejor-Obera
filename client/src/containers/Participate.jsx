import React from "react";
import Information from "../components/Participate/Information";
import ParticipateForm from "../components/Participate/ParticipateForm";
import QandA from "../components/QandA/QandA";
import './Participate.css'
const Participate = () =>{
    return(
        
        <div className="participate-container" >
            <ParticipateForm/>
            <Information/>
            <QandA/>

        </div>
        
    )
}

export default Participate