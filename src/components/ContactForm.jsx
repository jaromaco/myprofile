import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../i18n/LanguageContext';

const SERVICE_ID = 'service_11xginh';
const TEMPLATE_OWNER = 'template_g5pei3s';
const TEMPLATE_ACK = 'template_gsewpfy';
const PUBLIC_KEY = 'EAJsh03wRkb24s6-Z';

export default function ContactForm({ onSuccess, formRef }) {
  const { t, lang } = useLanguage();
  const c = t.contact;

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState('');

  useEffect(() => {
    setFormErrors({});
    setSendError('');
  }, [lang]);

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: '' }));
    setSendError('');
  };

  const validate = () => {
    const next = {};
    if (!formData.nombre.trim()) next.nombre = c.errors.name;
    if (!formData.email.trim()) next.email = c.errors.email;
    if (!formData.asunto.trim()) next.asunto = c.errors.subject;
    if (!formData.mensaje.trim()) next.mensaje = c.errors.message;
    return next;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const next = validate();
    if (Object.keys(next).length > 0) {
      setFormErrors(next);
      return;
    }

    setSending(true);
    setSendError('');

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_OWNER, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ACK, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      onSuccess();
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
    } catch {
      setSendError(c.errorSend);
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="contact-form" autoComplete="off" ref={formRef} onSubmit={onSubmit} noValidate>
      <label htmlFor="nombre">{c.name}</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        value={formData.nombre}
        onChange={onChange}
        autoComplete="name"
      />
      {formErrors.nombre ? <span className="field-error">{formErrors.nombre}</span> : null}

      <label htmlFor="email">{c.email}</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={onChange}
        autoComplete="email"
      />
      {formErrors.email ? <span className="field-error">{formErrors.email}</span> : null}

      <label htmlFor="asunto">{c.subject}</label>
      <input
        type="text"
        id="asunto"
        name="asunto"
        value={formData.asunto}
        onChange={onChange}
      />
      {formErrors.asunto ? <span className="field-error">{formErrors.asunto}</span> : null}

      <label htmlFor="mensaje">{c.message}</label>
      <textarea
        id="mensaje"
        name="mensaje"
        value={formData.mensaje}
        rows="5"
        onChange={onChange}
      />
      {formErrors.mensaje ? <span className="field-error">{formErrors.mensaje}</span> : null}

      {sendError ? <p className="form-error" role="alert">{sendError}</p> : null}

      <button type="submit" className="btn btn--primary" disabled={sending}>
        {sending ? c.sending : c.submit}
      </button>
    </form>
  );
}
