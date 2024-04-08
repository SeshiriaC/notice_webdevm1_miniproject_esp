import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";

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

    // Clears the form after sending the email
    e.target.reset();
  };

  const [value, setValue] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="ard flex justify-content-center">
      <div>
        <h2 className="text-color">Contact</h2>
        <div>
          <form onSubmit={sendEmail}>
            <span className="p-float-label mb-5 w-full">
              <InputText
                id="name"
                valueName={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="name">Nom</label>
            </span>
            <span className="p-float-label mb-5 w-full">
              <InputText
                id="email"
                valueEmail={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="email">Adresse mail</label>
            </span>
            <span className="p-float-label mb-5">
              <InputTextarea
                id="description"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                rows={5}
                cols={30}
              />
              <label htmlFor="message">Message</label>
            </span>
            <input type="submit" value="Send" disabled={isSubmitting} />
            {stateMessage && <p>{stateMessage}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
