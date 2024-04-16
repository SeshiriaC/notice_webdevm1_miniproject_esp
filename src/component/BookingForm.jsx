import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { InputNumber } from "primereact/inputnumber";
import { Dialog } from "primereact/dialog";
import noticeIcon from "../images/notice-icon-v2-noir.png";
import { Divider } from "primereact/divider";
import { Dropdown } from "primereact/dropdown";
import downloadjs from "downloadjs";
import html2canvas from "html2canvas";

function BookingForm() {
  const handleCaptureClick = async () => {
    const ticketElmt = document.querySelector("#ticket");
    if (!ticketElmt) return;

    const canvas = await html2canvas(ticketElmt);
    const dataURL = canvas.toDataURL("image/png");
    downloadjs(dataURL, "download.png", "image/png");
  };

  const [name, setNameValue] = useState("");
  const [email, setEmailValue] = useState("");

  const [AccessTicketNumber, setAccessTicketNumberValue] = useState(0);
  const [PremiumTicketNumber, setPremiumTicketNumberValue] = useState(0);
  const [VipTicketNumber, setVipTicketNumberValue] = useState(0);

  const [visible, setVisible] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("");

  const Events = [
    { name: "Today 2 Tomorrow", code: "T2T" },
    { name: "Vision 2.0", code: "VS2" },
    { name: "NeurolinkExp", code: "TNE" },
  ];

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
          <span className="p-float-label my-5">
            <Dropdown
              value={selectedEvent}
              onChange={(e) => setSelectedEvent(e.value)}
              options={Events}
              optionLabel="name"
              placeholder="Evènement"
              className="w-full md:w-15rem"
              checkmark={true}
              highlightOnSelect={false}
            />
            <label htmlFor="bookedEvent">Evènement souhaité</label>
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
            onClick={() => setVisible(true)}
          ></Button>
          <Dialog
            visible={visible}
            modal
            onHide={() => setVisible(false)}
            content={({ hide }) => (
              <div
                id="ticket"
                className="flex flex-column border-round bg-white p-6 w-5 jutify-content-center align-self-center align-items-center"
              >
                <img
                  className="w-5  align-self-center border-round"
                  src={noticeIcon}
                  alt="Notice Logo"
                />
                <Divider />
                <div>
                  <p>
                    Réservation de M. {name} pour {selectedEvent.name}
                  </p>
                  <div className="p-0 align-items-center">
                    <h3 className="m-0 p-0">Ticket réservés</h3>
                    <p>
                      Access: {AccessTicketNumber} <br />
                      Premium: {PremiumTicketNumber}
                      <br />
                      VIP: {VipTicketNumber}
                    </p>
                    <br />
                    <div className="flex flex-inline m-0 p-0 gap-1 align-items-center">
                      <h3>Total: </h3>
                      <p>
                        MGA{" "}
                        {AccessTicketNumber * 5000 +
                          PremiumTicketNumber * 10000 +
                          VipTicketNumber * 30000}
                      </p>
                    </div>
                    <p>Merci pour votre réservation!</p>
                  </div>
                </div>
                <div className="flex gap-2 justify-content-between">
                  <Button
                    label="Obtenir le ticket"
                    icon="pi pi-download"
                    id="cardInfoButton"
                    onClick={handleCaptureClick}
                  />
                  <Button
                    label="Ok"
                    icon="pi pi-check"
                    id="cardInfoButton"
                    onClick={(e) => hide(e)}
                  />
                </div>
              </div>
            )}
          ></Dialog>
        </span>
      </div>
    </div>
  );
}

export default BookingForm;
