import React, { useRef, useState } from 'react';
import ContactForm from './ContactForm';
import PopUp from './PopUp';
import { useLanguage } from '../i18n/LanguageContext';
import './Contact.css';

export default function Contact() {
  const { t } = useLanguage();
  const formRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="section contact" id={t.contact.id}>
      <div className="section__inner contact__inner">
        <header className="section__header">
          <h2>{t.contact.title}</h2>
          <p>{t.contact.intro}</p>
        </header>
        <ContactForm onSuccess={() => setShowPopup(true)} formRef={formRef} />
        <ul className="contact__links">
          {t.contact.links.map((link) => (
            <li key={link.url}>
              <a href={link.url} target="_blank" rel="me noreferrer">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        {showPopup ? (
          <PopUp
            title={t.contact.successTitle}
            body={t.contact.successBody}
            onClose={() => setShowPopup(false)}
          />
        ) : null}
      </div>
    </section>
  );
}
