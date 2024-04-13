import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function BookingForm() {
  const [name, setNameValue] = useState("");
  const [email, setEmailValue] = useState("");

  return (
    <div className="card flex justify-content-center gap-6 sm:grid">
      <div>
        <form>
          <span className="p-float-label my-5">
            <InputText
              id="name"
              value={name}
              onChange={(e) => setNameValue(e.target.value)}
            />
            <label htmlFor="name">Nom et Prénoms</label>
          </span>
          <span className="p-float-label my-5">
            <InputText
              id="email"
              value={email}
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <label htmlFor="email">Adresse mail</label>
          </span>
        </form>
      </div>
      <div className="align-self-center">
        <span className="my-5 justify-content-center">
          <Button
            label="Réserver"
            icon="pi pi-check-circle"
            id="cardInfoButton"
          ></Button>
        </span>
      </div>
    </div>
  );
}

export default BookingForm;
