import React, { useState } from "react";
import ContactForm from "./ContactForm";
import PopUp from "./PopUp";

export default function Contact () {
  const [showPopup, setShowPopup] = useState(false)

  const handleFormSuccess = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <div className="page">
        <ContactForm onSuccess={handleFormSuccess}/>
        {showPopup &&
          <PopUp msj="El mensaje fue recibido.lllNos pondremos en contacto con la mayor brevedad posible."
            onClose={closePopup}
          />
        }
      </div>
    </>
  );
}