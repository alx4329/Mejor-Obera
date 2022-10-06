import React,{useEffect,useRef} from 'react'
import  './JoinForm.css'

const JoinForm = ({text,classNameStyle}) => {
    const [show, setShow] = React.useState(false)
    const handleShow = () => {
        setShow(!show)
    }
    function useOutsideAlerter(ref) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            console.log(ref.current)
        if ( ref.current &&!ref.current.classList.contains("not-visible") && !ref.current.contains(event.target)) {
            
            setShow(false)
        }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
    }
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef)
    return(
        <>
                <button 
                    className={classNameStyle}
                    onClick={handleShow}   
                >{text}</button>
                <div className={show?'joinform-background':'joinform-background not-visible'} >
                    <div ref={wrapperRef} className={show?'joinform-container':'joinform-container not-visible'} >
                        <span onClick={handleShow} class="material-symbols-outlined">
                            close
                        </span>
                        <iframe 
                            src="https://docs.google.com/forms/d/e/1FAIpQLSe4UXY8i4E1_pmOl6leoCRh0o5JJstYSqzmgMCmvBMNrBRUzA/viewform?embedded=true" 
                            title='Formulario de adhesion Mejor Obera 2022'
                            width="700" 
                            height="520" 
                            frameborder="0" 
                            marginheight="0" 
                            marginwidth="0"
                            className= "modal-join-form"
                            >
                            Cargando…
                        </iframe>
                    </div>
                </div>

        </>
    )
}

export default JoinForm