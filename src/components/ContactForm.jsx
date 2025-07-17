import React, { useState } from "react";
import emailjs from '@emailjs/browser';

const ContactForm = ({onSuccess, formRef }) => {

    const [ formData, setFormData ] = useState({
        nombre:'',
        email:'',
        asunto:'',
        mensaje:'',
    })

    const [ formErrors, setFormErrors ] = useState({
        nombre:'',
        email:'',
        asunto:'',
        mensaje:'',
    })

    const procesarCambio = (evento) =>{

        const { name, value } = evento.target;
        setFormData((prevFormData)=>({
            ...prevFormData,
            [name] : value,
        }))

        setFormErrors((prevFormErrors)=>({
            ...prevFormErrors,
            [name] : '',
        }))

    }

    const procesarSubmit = (evento) => {
        evento.preventDefault();
        console.log(formData)

        const newFormErrors ={};

        if(formData.nombre.trim() === ''){
            newFormErrors.nombre = 'El nombre es requerido.';
        }

        if(formData.email.trim() === ''){
            newFormErrors.email = 'El email es requerido.';
        }

        if(formData.asunto.trim() === ''){
            newFormErrors.asunto = 'El asunto es requerido.';
        }

        if(formData.mensaje.trim() === ''){
            newFormErrors.mensaje = 'El mensaje es requerido.';
        }

        if (Object.keys(newFormErrors).length > 0) {
            setFormErrors(newFormErrors);
        }else{
            emailjs
                .sendForm('service_11xginh', 'template_g5pei3s', formRef.current, {
                    publicKey: 'EAJsh03wRkb24s6-Z',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error);
                    },
                );
            console.log('Formulario válido. Datos:', formData);

            emailjs
                .sendForm('service_11xginh', 'template_gsewpfy', formRef.current, {
                    publicKey: 'EAJsh03wRkb24s6-Z',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error);
                    },
                );
            console.log('Formulario válido. Datos:', formData);
            onSuccess()
            setTimeout(()=>{
                setFormData({
                    nombre:'',
                    email:'',
                    asunto:'',
                    mensaje:'',
                })
                }, 1000)
            }
            
    }

    

    return (
        <>
            <form autoComplete="off" ref={formRef} onSubmit={procesarSubmit}>
                <h2>Contact us</h2>
    
                <label htmlFor="nombre">Name:</label>
                <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={procesarCambio}/>

                {formErrors.nombre && <span className="error"> {formErrors.nombre}</span>}

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={procesarCambio}/>

                {formErrors.email && <span className="error"> {formErrors.email}</span>}

                
                <label htmlFor="asunto">Subject:</label>
                <input type="text" id="asunto" name="asunto" value={formData.asunto} onChange={procesarCambio}/>

                {formErrors.asunto && <span className="error"> {formErrors.asunto}</span>}

                
                <label htmlFor="mensaje">Message:</label>
                <textarea id="mensaje" name="mensaje" value={formData.mensaje} rows="5" onChange={procesarCambio}></textarea>

                {formErrors.mensaje && <span className="error"> {formErrors.mensaje}</span>}

                <button type="submit">Submit</button>
            </form>
        </>
    )
};

export default ContactForm;