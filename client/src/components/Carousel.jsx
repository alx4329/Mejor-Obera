import React , { useRef }from "react";
import { infocards } from "../assets/infocards";
import './Carousel.css'
const Carousel = () =>{
    var slideIndex = 0;
    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        console.log(x)
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > x.length) {slideIndex = 1}
        x[slideIndex-1].style.display = "block";
        setTimeout(carousel, 4000); 
        }
        const started = useRef(false)
        // function plusDivs(n) {
        //     showDivs(slideIndex += n);
        //   }
          
        //   function showDivs(n) {
        //     var i;
        //     var x = document.getElementsByClassName("mySlides");
        //     if (n > x.length) {slideIndex = 1}
        //     if (n < 1) {slideIndex = x.length} ;
        //     for (i = 0; i < x.length; i++) {
        //       x[i].style.display = "none";
        //     }
        //     x[slideIndex-1].style.display = "block";
        //   }
        React.useEffect(()=>{
            let x = document.getElementsByClassName("mySlides");
            console.log("====started",  started)
            if(x.length>0 && started.current=== false) {
                started.current = true
                carousel()
                
            }
        },[])
    
    return(
        <div className="info-carousel-container" >
            {
                infocards.map(card=>{
                    return <>
                        <div className="mySlides">
                            <div className="slide-container" >
                                <div className=" card">{card.title}</div>
                                <div className="card-content">
                                    <img className="slide-img" src={card.img} alt="slide pic" />
                                    <div className="slide-text">{card.text}</div>
                                </div>
                            </div>
                        </div>
                    </>
                })
            }
        {/* <button onClick={()=>plusDivs(-1)}>atras</button>
        <button onClick={()=>plusDivs(1)}>adelante</button> */}
        </div>
    )
}

export default Carousel