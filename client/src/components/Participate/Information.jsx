import React from "react";
import Carousel from "../Carousel";
import './Information.css'
const Information = () =>{
    
    return(
        <>

        <div className="info-container">
            <div className="info-bg" >
                <div className="left-info" >
                    <div className="info-title">¿Qué es Mejor Oberá?</div>
                    <div className="info-text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</div>
                </div>
                <div className="right-" >
                    {// eslint-disable-next-line jsx-a11y/img-redundant-alt
                    <img src="https://picsum.photos/seed/picsum/200/300" alt="ilustrative event picture"></img>
                    }
                </div>
            </div>
            <Carousel/>
        </div>
        </>
    )
}

export default Information