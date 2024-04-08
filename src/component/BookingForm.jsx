import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function BookingForm() {
  const [value, setValue] = useState("");

  return (
    <div className="card flex justify-content-center">
      <div>
        <h2 className="text-color">Réservations</h2>
        <div>
          <form>
            <span className="p-float-label my-5">
              <InputText
                id="email"
                valueEmail={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="email">Adresse mail</label>
            </span>
            <span className="p-float-label my-5">
              <InputText
                id="ticketnumber"
                valueTicketNumber={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="ticketnumber">Nombre de Ticket</label>
            </span>
            <span className="my-5 justify-content-center">
              <Button label="Réserver" icon="pi pi-check-circle" id="cardInfoButton"></Button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
