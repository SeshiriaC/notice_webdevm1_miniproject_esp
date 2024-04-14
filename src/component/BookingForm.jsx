import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";

function BookingForm() {
  const [name, setNameValue] = useState("");
  const [email, setEmailValue] = useState("");
  const [AccessTicketNumber, setAccessTicketNumberValue] = useState(0);
  const [PremiumTicketNumber, setPremiumTicketNumberValue] = useState(0);
  const [VipTicketNumber, setVipTicketNumberValue] = useState(0);

  return (
    <div className="card flex justify-content-center align-content-start gap-6 sm:grid">
      <div className="align-items-center">
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
      <div>
        <div>
          <div className="flex-auto">
            <label htmlFor="integeronly" className="block mb-2">
              Nombre de billet Access
            </label>
            <InputNumber
              inputId="integeronly"
              value={AccessTicketNumber}
              className="p-float-label block mb-2"
              onValueChange={(e) => setAccessTicketNumberValue(e.value)}
            />
            <div className="flex-auto">
              <label htmlFor="integeronly" className="block mb-2">
                Nombre de billet Premium
              </label>
              <InputNumber
                inputId="integeronly"
                value={PremiumTicketNumber}
                className="p-float-label block mb-2"
                onValueChange={(e) => setPremiumTicketNumberValue(e.value)}
              />
            </div>
            <div className="flex-auto">
              <label htmlFor="integeronly" className="block mb-2">
                Nombre de billet VIP
              </label>
              <InputNumber
                inputId="integeronly"
                value={VipTicketNumber}
                className="p-float-label block mb-2"
                onValueChange={(e) => setVipTicketNumberValue(e.value)}
              />
            </div>
          </div>
        </div>
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
