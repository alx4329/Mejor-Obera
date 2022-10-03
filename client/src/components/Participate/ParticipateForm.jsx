import React from "react";
import logo from '../../assets/images/mejorobera.png'
import './ParticipateForm.css'

const ParticipateForm = () =>{
    return(
        <div className="form-part-container" >
            <div className="logo-container">
                <img src={logo} alt="Logo del evento"/>
                <div className="participar-title" >
                    <p className="event-name">Participar en</p>
                    <p className="event-name bold"  >Mejor Oberá</p>
                </div>
            </div>
            <div className="form-box" >
                <form className="form" >
                <div className="part-form-title" >Recibí novedades sobre participar en Mejor Oberá</div>
                    <div className="form-part-item" >
                        <label for="Nombre" >Nombre:</label>
                        <input type="text" id="Nombre" name="Nombre" />
                    </div>
                    <div className="form-part-item" >
                        <label for="Apellido" >Apellido:</label>
                        <input type="text" id="Apellido" name="Apellido" />
                    </div>
                    <div className="form-part-item" >
                        <label for="Empresa" >Empresa:</label>
                        <input type="text" id="Empresa" name="Empresa" />
                    </div>
                    <div className="form-part-item" >
                        <label for="Email" >Email:</label>
                        <input type="text" id="Email" name="Email" />
                    </div>
                    <div className="bottom-form-part">
                        <div className="cbox-privacidad" >
                            <input type="checkbox" id="cbox1" name="Email" />
                            <label for="cbox1" >Leí y acepto las Políticas de Privacidad</label>
                        </div>
                        <button className="submit-form-part">Enviar</button>

                    </div>
                    
                </form>
            </div>
            <div className="part-add-info">
                <p className="part-add-title">Lorem ipsum dolor sit amet </p>
                <p className="part-add-text">Si todavia no conocias Mejor Obera, mirá toda la información a continuación para enterarte más</p>
            </div>
        </div>
    )
}

export default ParticipateForm