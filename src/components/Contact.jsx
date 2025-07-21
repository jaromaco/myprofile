import React, { useRef , useState } from "react";
import ContactForm from "./ContactForm";
import PopUp from "./PopUp";

export default function Contact () {

  const formRef = useRef()
  
  const [showPopup, setShowPopup] = useState(false)

  const handleFormSuccess = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="page form-contact">
        <ContactForm onSuccess={handleFormSuccess} formRef={formRef}/>
        {showPopup &&
          <PopUp msj="El mensaje fue recibido.lllNos pondremos en contacto con la mayor brevedad posible."
            onClose={closePopup}
          />
        }
      </div>
    </>
  );
}