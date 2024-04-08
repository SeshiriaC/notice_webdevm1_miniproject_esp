import { useState } from "react";
import { Card } from "primereact/card";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

function EventCard(props) {
  const print = (
    <>
      <img
        src={props.print}
        alt="Affiche de l'évènement"
        className="border-round-top"
      />
    </>
  );

  const [visible, setVisible] = useState(false);

  return (
    <div className="card">
      <Card
        title={props.header}
        subTitle={props.subtitles}
        header={print}
        className="my-4 shadow-8 md:mx-8"
      >
        <p className="m-2">{props.paragraph}</p>
        <div className="card flex justify-content-center m-2">
          <Button
            label="Détails"
            icon="pi pi-info-circle"
            onClick={() => setVisible(true)}
            id="cardInfoButton"
          />
          <Dialog
            header={props.header}
            visible={visible}
            style={{ width: "85vw" }}
            onHide={() => setVisible(false)}
          >
            {props.details}
          </Dialog>
        </div>
      </Card>
    </div>
  );
}

export default EventCard;
