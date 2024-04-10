import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Button } from "primereact/button";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState(null);
  const sendEmail = (e) => {
    e.persist();
    e.preventDefault();
    setIsSubmitting(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          setStateMessage("Message sent!");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // cacher après 5 secondes
        },
        (error) => {
          setStateMessage("Something went wrong, please try again later");
          setIsSubmitting(false);
          setTimeout(() => {
            setStateMessage(null);
          }, 5000); // cacher après 5 secondes
        }
      );

    // efface le contenu des cases quand le mail est envoyé
    e.target.reset();
  };

  const [value, setValue] = useState("");

  return (
    <div className="card flex justify-content-center">
      <div>
        <h2 className="text-color">Contact</h2>
        <div>
          <form onSubmit={sendEmail}>
            <span className="p-float-label mb-5">
              <InputText
                id="name"
                valueName={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="name">Nom</label>
            </span>
            <span className="p-float-label mb-5">
              <InputText
                id="email"
                valueEmail={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="email">Adresse mail</label>
            </span>
            <span className="p-float-label m-0 p-0">
              <InputTextarea
                autoResize
                id="description"
                valueMessage={value}
                onChange={(e) => setValue(e.target.value)}
                rows={8}
                cols={40}
              />
              <label htmlFor="message">Message</label>
            </span>
            <span className="my-0 justify-content-center">
              <Button
                label="Envoyer"
                icon="pi pi-send"
                id="contactSubmit"
                type="submit"
                value="Send"
                disabled={isSubmitting}
              ></Button>
            </span>
            {stateMessage && <p>{stateMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
