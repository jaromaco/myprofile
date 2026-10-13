import React, { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import './PopUp.css';

export default function PopUp({ title, body, onClose }) {
  const { t } = useLanguage();

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="popup" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <div className="popup-content">
        <h2 id="popup-title">{title}</h2>
        <p>{body}</p>
        <button type="button" className="btn btn--primary" onClick={onClose}>
          {t.contact.close}
        </button>
      </div>
    </div>
  );
}
