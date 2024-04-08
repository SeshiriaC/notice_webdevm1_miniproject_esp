import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

function BookingForm() {
  const [value, setValue] = useState("");

  return (
    <div className="card flex justify-content-center">
      <div className="">
        <h2 className="">Réservations</h2>
        <div>
          <form>
            <span className="p-float-label m-5">
              <InputText
                id="email"
                valueEmail={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="email">Mail</label>
            </span>
            <span className="p-float-label m-5">
              <InputText
                id="ticketnumber"
                valueTicketNumber={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <label htmlFor="ticketnumber">Nombre de Ticket</label>
            </span>
            <span className="m-5">
              <Button label="Détails" icon="pi pi-check-circle" id=""></Button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BookingForm;
