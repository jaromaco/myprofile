import React from "react";
import './PopUp.css'

const PopUp = ({ msj, onClose }) => {


    return(
        <>
            <div className="popup">
                <div className="popup-content">
                    <p>{msj.split('lll').map((linea, index) => (
                        <p key={index}>
                            {linea}
                            <br />
                        </p>
                    ))}</p>
                    <button onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </>
    )
}

export default PopUp